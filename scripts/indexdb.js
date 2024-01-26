const DB_VERSION = 80;
const dadesClients = [
    {
    ssn: "1",
    nom: "Futbol",
    aiguaConsumida: 52000,
}, {
    ssn: "2",
    nom: "Tenis",
    aiguaConsumida: 6000,
    
},{
    ssn: "3",
    nom: "Rugby",
    aiguaConsumida: 40000,
},{
    ssn: "4",
    nom: "Golf",
    aiguaConsumida: 900000,
    
}
];
window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
window.IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction || {
    READ_WRITE: "readwrite"
};
window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange;
let peticioObertura = window.indexedDB.open("DAW2", DB_VERSION);
let db;

let emmagatzematge = {
    
    desar: function () {
        let magatzemObjsUsuari = db.transaction("Usuaris", "readwrite").objectStore("Usuaris");
        let alumne = {
            'nom': document.getElementById('nom').value, 'edad': document.getElementById('edad').value, 'esportTriat': document.getElementById('esportTriat').value
        };
        const peticioAlumneExisteix = magatzemObjsUsuari.get(alumne.nom);
        peticioAlumneExisteix.onsuccess=(e) => {
            console.log(peticioAlumneExisteix.result);
            if(peticioAlumneExisteix.result) {
                console.log('ja existeix')
            }
            else {
                magatzemObjsUsuari.add(alumne);
                emmagatzematge.esborrarTaula();
                emmagatzematge.mostrar(magatzemObjsUsuari);
            }  
        }
    },
    mostrar: function (magatzemObjsUsuari) {
        magatzemObjsUsuari.openCursor().onsuccess = function (event) {
            let cursor = event.target.result;
            if (cursor) {
                let fila = taula.insertRow(0);
                fila.insertCell(0).innerHTML = cursor.key;
                fila.insertCell(1).innerHTML = cursor.value.edad;
                fila.insertCell(2).innerHTML = cursor.value.esportTriat;
                cursor.continue();
            }
        };

    },
    esborrarTaula: function () {
        while (taula.rows.length > 0) {
            taula.deleteRow(0);
        }
    },
    esborrarItem: function () {
        magatzemObjsUsuari = db.transaction("Usuaris", "readwrite").objectStore("Usuaris");
        magatzemObjsUsuari.delete(document.getElementById('nom').value);
        emmagatzematge.esborrarTaula();
        emmagatzematge.mostrar(magatzemObjsUsuari);
    },
    netejar: function () {
        emmagatzematge.esborrarTaula();
    }
}
document.getElementById('desar').addEventListener('click', emmagatzematge.desar, false);
document.getElementById('esborrar').addEventListener('click', emmagatzematge.esborrarItem, false);
document.getElementById('netejar').addEventListener('click', emmagatzematge.netejar, false);

peticioObertura.onerror = function (event) {
    alert("Problema!");
};
peticioObertura.onsuccess = function (event) {
    db = event.target.result;
};
peticioObertura.onupgradeneeded = function (event) {
    let db = event.target.result;
    try {
        db.deleteObjectStore("clients");
        db.deleteObjectStore("noms");
        db.deleteObjectStore("Usuaris");

    }
    catch (e) {

    }
    // ObjectStore conté la informació sobre els nostres clients. El codi
    // "SSN" es la ruta de la clau perquè es garanteix que sigui única
    let magatzemObjsClients = db.createObjectStore("clients", {
        keyPath: "ssn"
    });

    // un altre magatzem amb autoIncrement com a key generator
    let magatzemObjsNoms = db.createObjectStore("noms", {
        autoIncrement: true
    });

    //  magatzem amb autoIncrement com a key generator per a les notes dels alumnes
    let magatzemObjsUsuari = db.createObjectStore("Usuaris", {
        keyPath: "nom"
    });

    for (let i in dadesClients) {
        magatzemObjsNoms.add(dadesClients[i].nom);
    }

    // Crear un índex per buscar clients pel seu nom. Podem tenir duplicats
    // Així que no podem utilitzar un índex únic.
    magatzemObjsClients.createIndex("nom", "nom", {
        unique: false
    });
    magatzemObjsClients.createIndex("edad", "edad", {
        unique: false
    });
    // Utilitzeu la transacció OnComplete per assegurar-se que la creació és ObjectStore
    // Acabat abans d'afegir dades en ell.
    magatzemObjsClients.transaction.oncomplete = function (event) {
        // Emmagatzemar els valors de la magatzemObjsClients acabat de crear.
        let magatzemObjsClients = db.transaction("clients", "readwrite").objectStore("clients");
        for (let i in dadesClients) {
            console.log(dadesClients[i]);
            let peticio = magatzemObjsClients.add(dadesClients[i]);
        }

        let peticio = magatzemObjsClients.get("1");
        peticio.onerror = function (event) {

        };
        peticio.onsuccess = function (event) {
            console.log("client " + peticio.result.nom);
        };

        magatzemObjsClients.openCursor().onsuccess = function (event) {
            let cursor = event.target.result;
            if (cursor) {
                console.log(cursor.key + " es " + cursor.value.nom);
                cursor.continue();
            }
        };


    };
};

const modoOscuroI = document.getElementById('modo-oscuro');
    
modoOscuroI.addEventListener('click', function() {
    document.body.classList.toggle('modoOscuro');
    const esModoOscuro = document.body.classList.contains('modoOscuro');
    localStorage.setItem('Oscuro', esModoOscuro);
    actualizarImagenModoOscuro(modoOscuroI, esModoOscuro);
});

const esModoOscuroGuardar = localStorage.getItem('Oscuro');
if (esModoOscuroGuardar === 'true') {
    document.body.classList.add('modoOscuro');
    actualizarImagenModoOscuro(modoOscuroI, true);
}


function actualizarImagenModoOscuro(elemento, esModoOscuro) {
if (esModoOscuro) {
    elemento.src = 'img/on.png';
} else {
    elemento.src = 'img/offf.png';
}
}
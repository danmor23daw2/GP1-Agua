let http = require("http");
let url = require("url")
let fs = require("fs");
let MongoClient = require('mongodb').MongoClient;
let assert = require('assert');
let ObjectId = require('mongodb').ObjectID;

function iniciar() {
    function onRequest(req, res) {
        let sortida;
        const baseURL = req.protocol + '://' + req.headers.host + '/';
        const reqUrl = new URL(req.url, baseURL);
        console.log("Petició per a  " + reqUrl.pathname + " rebuda.");
        const ruta = reqUrl.pathname;
        let cadenaConnexio = 'mongodb://127.0.0.1:27017/database';

        if (reqUrl.pathname == '/index.html') {
            fs.readFile('index.html', function (err, sortida) {
                if(err){
                    res.writeHead(500, { 'Content-Type': 'text/plain' });
                    res.end('Error llegint fitxer');
                }else{
                    res.writeHead(200, {
                        "Content-Type": "text/html; charset=utf-8"
                    });
                    console.log("ok");
                    res.write(sortida);
                    res.end();
                }
            });
        }else if (reqUrl.pathname == '/deportes.html') {
            fs.readFile('deportes.html', function (err, sortida) {
                if(err){
                    res.writeHead(500, { 'Content-Type': 'text/plain' });
                    res.end('Error llegint fitxer');
                }else{
                    res.writeHead(200, {
                        "Content-Type": "text/html; charset=utf-8"
                    });
                    console.log("ok");
                    res.write(sortida);
                    res.end();
                }
            });
        }else if (reqUrl.pathname == '/info1.html') {
            fs.readFile('info1.html', function (err, sortida) {
                if(err){
                    res.writeHead(500, { 'Content-Type': 'text/plain' });
                    res.end('Error llegint fitxer');
                }else{
                    res.writeHead(200, {
                        "Content-Type": "text/html; charset=utf-8"
                    });
                    console.log("ok");
                    res.write(sortida);
                    res.end();
                }
            });
        }else if (reqUrl.pathname == '/info2.html') {
            fs.readFile('info2.html', function (err, sortida) {
                if(err){
                    res.writeHead(500, { 'Content-Type': 'text/plain' });
                    res.end('Error llegint fitxer');
                }else{
                    res.writeHead(200, {
                        "Content-Type": "text/html; charset=utf-8"
                    });
                    console.log("ok");
                    res.write(sortida);
                    res.end();
                }
            });
        }else if (reqUrl.pathname == '/info3.html') {
            fs.readFile('info3.html', function (err, sortida) {
                if(err){
                    res.writeHead(500, { 'Content-Type': 'text/plain' });
                    res.end('Error llegint fitxer');
                }else{
                    res.writeHead(200, {
                        "Content-Type": "text/html; charset=utf-8"
                    });
                    console.log("ok");
                    res.write(sortida);
                    res.end();
                }
            });
        }else if (reqUrl.pathname == '/info4.html') {
            fs.readFile('info4.html', function (err, sortida) {
                if(err){
                    res.writeHead(500, { 'Content-Type': 'text/plain' });
                    res.end('Error llegint fitxer');
                }else{
                    res.writeHead(200, {
                        "Content-Type": "text/html; charset=utf-8"
                    });
                    console.log("ok");
                    res.write(sortida);
                    res.end();
                }
            });
        }else if (reqUrl.pathname == '/info5.html') {
            fs.readFile('info5.html', function (err, sortida) {
                if(err){
                    res.writeHead(500, { 'Content-Type': 'text/plain' });
                    res.end('Error llegint fitxer');
                }else{
                    res.writeHead(200, {
                        "Content-Type": "text/html; charset=utf-8"
                    });
                    console.log("ok");
                    res.write(sortida);
                    res.end();
                }
            });
        }else if (reqUrl.pathname == '/consulta.html') {
            fs.readFile('consulta.html', function (err, sortida) {
                if(err){
                    res.writeHead(500, { 'Content-Type': 'text/plain' });
                    res.end('Error llegint fitxer');
                }else{
                    res.writeHead(200, {
                        "Content-Type": "text/html; charset=utf-8"
                    });
                    console.log("ok");
                    res.write(sortida);
                    res.end();
                }
            });
        }else if (reqUrl.pathname == '/mongo.html') {
            fs.readFile('mongo.html', function (err, sortida) {
                if(err){
                    res.writeHead(500, { 'Content-Type': 'text/plain' });
                    res.end('Error llegint fitxer');
                }else{
                    res.writeHead(200, {
                        "Content-Type": "text/html; charset=utf-8"
                    });
                    console.log("ok");
                    res.write(sortida);
                    res.end();
                }
            });
        }else if (reqUrl.pathname == '/modificar.html') {
            fs.readFile('modificar.html', function (err, sortida) {
                if(err){
                    res.writeHead(500, { 'Content-Type': 'text/plain' });
                    res.end('Error llegint fitxer');
                }else{
                    res.writeHead(200, {
                        "Content-Type": "text/html; charset=utf-8"
                    });
                    console.log("ok");
                    res.write(sortida);
                    res.end();
                }
            });
        }else if (reqUrl.pathname == '/eliminar.html') {
            fs.readFile('eliminar.html', function (err, sortida) {
                if(err){
                    res.writeHead(500, { 'Content-Type': 'text/plain' });
                    res.end('Error llegint fitxer');
                }else{
                    res.writeHead(200, {
                        "Content-Type": "text/html; charset=utf-8"
                    });
                    console.log("ok");
                    res.write(sortida);
                    res.end();
                }
            });
        }else if (reqUrl.pathname == '/registro.html') {
            fs.readFile('registro.html', function (err, sortida) {
                if(err){
                    res.writeHead(500, { 'Content-Type': 'text/plain' });
                    res.end('Error llegint fitxer');
                }else{
                    res.writeHead(200, {
                        "Content-Type": "text/html; charset=utf-8"
                    });
                    console.log("ok");
                    res.write(sortida);
                    res.end();
                }
            });
        }else if (reqUrl.pathname == '/registrar.html') {
            fs.readFile('registrar.html', function (err, sortida) {
                if(err){
                    res.writeHead(500, { 'Content-Type': 'text/plain' });
                    res.end('Error llegint fitxer');
                }else{
                    res.writeHead(200, {
                        "Content-Type": "text/html; charset=utf-8"
                    });
                    console.log("ok");
                    res.write(sortida);
                    res.end();
                }
            });
        }else if (reqUrl.pathname == '/login.html') {
            fs.readFile('login.html', function (err, sortida) {
                if(err){
                    res.writeHead(500, { 'Content-Type': 'text/plain' });
                    res.end('Error llegint fitxer');
                }else{
                    res.writeHead(200, {
                        "Content-Type": "text/html; charset=utf-8"
                    });
                    console.log("ok");
                    res.write(sortida);
                    res.end();
                }
            });
        }else if (reqUrl.pathname == '/scripts/script.js') {
            fs.readFile('scripts/script.js', function (err, sortida) {
                if(err){
                    res.writeHead(500, { 'Content-Type': 'text/plain' });
                    res.end('Error llegint fitxer');
                }else{
                    res.writeHead(200, {
                        "Content-Type": "text/javascript; charset=utf-8"
                    });
                    console.log("ok");
                    res.write(sortida);
                    res.end();
                }
            });
        }else if (reqUrl.pathname == '/scripts/dragAndDrop.js') {
            fs.readFile('scripts/dragAndDrop.js', function (err, sortida) {
                if(err){
                    res.writeHead(500, { 'Content-Type': 'text/plain' });
                    res.end('Error llegint fitxer');
                }else{
                    res.writeHead(200, {
                        "Content-Type": "text/javascript; charset=utf-8"
                    });
                    console.log("ok");
                    res.write(sortida);
                    res.end();
                }
            });
        }else if (reqUrl.pathname == '/scripts/canva.js') {
            fs.readFile('scripts/canva.js', function (err, sortida) {
                if(err){
                    res.writeHead(500, { 'Content-Type': 'text/plain' });
                    res.end('Error llegint fitxer');
                }else{
                    res.writeHead(200, {
                        "Content-Type": "text/javascript; charset=utf-8"
                    });
                    console.log("ok");
                    res.write(sortida);
                    res.end();
                }
            });
        }else if (reqUrl.pathname == '/scripts/info1.js') {
            fs.readFile('scripts/info1.js', function (err, sortida) {
                if(err){
                    res.writeHead(500, { 'Content-Type': 'text/plain' });
                    res.end('Error llegint fitxer');
                }else{
                    res.writeHead(200, {
                        "Content-Type": "text/javascript; charset=utf-8"
                    });
                    console.log("ok");
                    res.write(sortida);
                    res.end();
                }
            });
        }else if (reqUrl.pathname == '/scripts/indexdb.js') {
            fs.readFile('scripts/indexdb.js', function (err, sortida) {
                if(err){
                    res.writeHead(500, { 'Content-Type': 'text/plain' });
                    res.end('Error llegint fitxer');
                }else{
                    res.writeHead(200, {
                        "Content-Type": "text/javascript; charset=utf-8"
                    });
                    console.log("ok");
                    res.write(sortida);
                    res.end();
                }
            });
        }else if (reqUrl.pathname == '/scripts/modoOscuro.js') {
            fs.readFile('scripts/modoOscuro.js', function (err, sortida) {
                if(err){
                    res.writeHead(500, { 'Content-Type': 'text/plain' });
                    res.end('Error llegint fitxer');
                }else{
                    res.writeHead(200, {
                        "Content-Type": "text/javascript; charset=utf-8"
                    });
                    console.log("ok");
                    res.write(sortida);
                    res.end();
                }
            });
        }else if (reqUrl.pathname == '/scripts/registro.js') {
            fs.readFile('scripts/registro.js', function (err, sortida) {
                if(err){
                    res.writeHead(500, { 'Content-Type': 'text/plain' });
                    res.end('Error llegint fitxer');
                }else{
                    res.writeHead(200, {
                        "Content-Type": "text/javascript; charset=utf-8"
                    });
                    console.log("ok");
                    res.write(sortida);
                    res.end();
                }
            });
        }else if (reqUrl.pathname == '/css/styles.css') {
            fs.readFile('css/styles.css', function (err, sortida) {
                if(err){
                    res.writeHead(500, { 'Content-Type': 'text/plain' });
                    res.end('Error llegint fitxer');
                }else{
                    res.writeHead(200, {
                        "Content-Type": "text/css; charset=utf-8"
                    });
                    console.log("ok");
                    res.write(sortida);
                    res.end();
                }
            });
        }else if (reqUrl.pathname == '/img/mapa-golf.jpg') {
            fs.readFile('img/mapa-golf.jpg', function (err, sortida) {
                if(err){
                    res.writeHead(500, { 'Content-Type': 'text/plain' });
                    res.end('Error llegint fitxer');
                }else{
                    res.writeHead(200, {
                        "Content-Type": "image/jpg; charset=utf-8"
                    });
                    console.log("ok");
                    res.write(sortida);
                    res.end();
                }
            });
        }else if (reqUrl.pathname == '/img/sequiaAndalucia.jpg') {
            fs.readFile('img/sequiaAndalucia.jpg', function (err, sortida) {
                if(err){
                    res.writeHead(500, { 'Content-Type': 'text/plain' });
                    res.end('Error llegint fitxer');
                }else{
                    res.writeHead(200, {
                        "Content-Type": "image/jpg; charset=utf-8"
                    });
                    console.log("ok");
                    res.write(sortida);
                    res.end();
                }
            });
        }else if (reqUrl.pathname == '/img/fondo.jpg') {
            fs.readFile('img/fondo.jpg', function (err, sortida) {
                if(err){
                    res.writeHead(500, { 'Content-Type': 'text/plain' });
                    res.end('Error llegint fitxer');
                }else{
                    res.writeHead(200, {
                        "Content-Type": "image/jpg; charset=utf-8"
                    });
                    console.log("ok");
                    res.write(sortida);
                    res.end();
                }
            });
        }else if (reqUrl.pathname == '/img/campogolf.mp4') {
            fs.readFile('img/campogolf.mp4', function (err, sortida) {
                if(err){
                    res.writeHead(500, { 'Content-Type': 'text/plain' });
                    res.end('Error llegint fitxer');
                }else{
                    res.writeHead(200, {
                        "Content-Type": "video/mp4; charset=utf-8"
                    });
                    console.log("ok");
                    res.write(sortida);
                    res.end();
                }
            });
        }else if (reqUrl.pathname == '/img/camporegado.mp4') {
            fs.readFile('img/camporegado.mp4', function (err, sortida) {
                if(err){
                    res.writeHead(500, { 'Content-Type': 'text/plain' });
                    res.end('Error llegint fitxer');
                }else{
                    res.writeHead(200, {
                        "Content-Type": "video/mp4; charset=utf-8"
                    });
                    console.log("ok");
                    res.write(sortida);
                    res.end();
                }
            });
        }else if (reqUrl.pathname == '/img/CompeticionAcuatica.mp4') {
            fs.readFile('img/CompeticionAcuatica.mp4', function (err, sortida) {
                if(err){
                    res.writeHead(500, { 'Content-Type': 'text/plain' });
                    res.end('Error llegint fitxer');
                }else{
                    res.writeHead(200, {
                        "Content-Type": "video/mp4; charset=utf-8"
                    });
                    console.log("ok");
                    res.write(sortida);
                    res.end();
                }
            });
        }else if (reqUrl.pathname == '/img/r1.mp4') {
            fs.readFile('img/r1.mp4', function (err, sortida) {
                if(err){
                    res.writeHead(500, { 'Content-Type': 'text/plain' });
                    res.end('Error llegint fitxer');
                }else{
                    res.writeHead(200, {
                        "Content-Type": "video/mp4; charset=utf-8"
                    });
                    console.log("ok");
                    res.write(sortida);
                    res.end();
                }
            });
        }else if (reqUrl.pathname == '/img/bomboclat.mp4') {
            fs.readFile('img/bomboclat.mp4', function (err, sortida) {
                if(err){
                    res.writeHead(500, { 'Content-Type': 'text/plain' });
                    res.end('Error llegint fitxer');
                }else{
                    res.writeHead(200, {
                        "Content-Type": "video/mp4; charset=utf-8"
                    });
                    console.log("ok");
                    res.write(sortida);
                    res.end();
                }
            });
        }else if (reqUrl.pathname == '/img/regado.mp4') {
            fs.readFile('img/regado.mp4', function (err, sortida) {
                if(err){
                    res.writeHead(500, { 'Content-Type': 'text/plain' });
                    res.end('Error llegint fitxer');
                }else{
                    res.writeHead(200, {
                        "Content-Type": "video/mp4; charset=utf-8"
                    });
                    console.log("ok");
                    res.write(sortida);
                    res.end();
                }
            });
        }else if (reqUrl.pathname == '/img/dinero.jpg') {
            fs.readFile('img/dinero.jpg', function (err, sortida) {
                if(err){
                    res.writeHead(500, { 'Content-Type': 'text/plain' });
                    res.end('Error llegint fitxer');
                }else{
                    res.writeHead(200, {
                        "Content-Type": "image/jpg; charset=utf-8"
                    });
                    console.log("ok");
                    res.write(sortida);
                    res.end();
                }
            });
        }else if (reqUrl.pathname == '/img/tabla.jpg') {
            fs.readFile('img/tabla.jpg', function (err, sortida) {
                if(err){
                    res.writeHead(500, { 'Content-Type': 'text/plain' });
                    res.end('Error llegint fitxer');
                }else{
                    res.writeHead(200, {
                        "Content-Type": "image/jpg; charset=utf-8"
                    });
                    console.log("ok");
                    res.write(sortida);
                    res.end();
                }
            });
        }else if (reqUrl.pathname == '/img/asper.png') {
            fs.readFile('img/asper.png', function (err, sortida) {
                if(err){
                    res.writeHead(500, { 'Content-Type': 'text/plain' });
                    res.end('Error llegint fitxer');
                }else{
                    res.writeHead(200, {
                        "Content-Type": "image/png; charset=utf-8"
                    });
                    console.log("ok");
                    res.write(sortida);
                    res.end();
                }
            });
        }else if (reqUrl.pathname == '/img/mircroasper.png') {
            fs.readFile('img/mircroasper.png', function (err, sortida) {
                if(err){
                    res.writeHead(500, { 'Content-Type': 'text/plain' });
                    res.end('Error llegint fitxer');
                }else{
                    res.writeHead(200, {
                        "Content-Type": "image/png; charset=utf-8"
                    });
                    console.log("ok");
                    res.write(sortida);
                    res.end();
                }
            });
        }else if (reqUrl.pathname == '/img/tuberiagot.png') {
            fs.readFile('img/tuberiagot.png', function (err, sortida) {
                if(err){
                    res.writeHead(500, { 'Content-Type': 'text/plain' });
                    res.end('Error llegint fitxer');
                }else{
                    res.writeHead(200, {
                        "Content-Type": "image/png; charset=utf-8"
                    });
                    console.log("ok");
                    res.write(sortida);
                    res.end();
                }
            });
        }else if (reqUrl.pathname == '/img/tuborieg.png') {
            fs.readFile('img/tuborieg.png', function (err, sortida) {
                if(err){
                    res.writeHead(500, { 'Content-Type': 'text/plain' });
                    res.end('Error llegint fitxer');
                }else{
                    res.writeHead(200, {
                        "Content-Type": "image/png; charset=utf-8"
                    });
                    console.log("ok");
                    res.write(sortida);
                    res.end();
                }
            });
        }else if (reqUrl.pathname == '/img/on.png') {
            fs.readFile('img/on.png', function (err, sortida) {
                if(err){
                    res.writeHead(500, { 'Content-Type': 'text/plain' });
                    res.end('Error llegint fitxer');
                }else{
                    res.writeHead(200, {
                        "Content-Type": "image/png; charset=utf-8"
                    });
                    console.log("ok");
                    res.write(sortida);
                    res.end();
                }
            });
        }else if (reqUrl.pathname == '/img/offf.png') {
            fs.readFile('img/offf.png', function (err, sortida) {
                if(err){
                    res.writeHead(500, { 'Content-Type': 'text/plain' });
                    res.end('Error llegint fitxer');
                }else{
                    res.writeHead(200, {
                        "Content-Type": "image/png; charset=utf-8"
                    });
                    console.log("ok");
                    res.write(sortida);
                    res.end();
                }
            });
        }else if (ruta === '/registrar') {
            MongoClient.connect(cadenaConnexio, function (err, client) {
                assert.equal(null, err);
                console.log("Connexió correcta");
                const db = client.db('database');
                const nom = reqUrl.searchParams.get('nom');
                const contrasenya = reqUrl.searchParams.get('contrasenya');
        
                db.collection('usuaris').findOne({ "nom": nom }, function (err, existe) {
                    assert.equal(err, null);
        
                    if (existe) {
                        console.log("Usuari trobat. ERROR");
                        client.close();
        
                        res.writeHead(200, { 'Content-Type': 'text/html' });
                        res.write('<html><head><link rel="stylesheet" type="text/css" href="css/styles.css"></head><body><h1 class="usuari-no">Error: El usuario ya esta registrado</h1></body></html>');
                        res.end();
                    }else {
                        db.collection('usuaris').insertOne({ "nom": nom, "contrasenya": contrasenya }, function (err, result) {
                            assert.equal(err, null);
                            console.log("Afegit document a col·lecció usuaris");
                            client.close();
        
                            res.writeHead(302, {
                                'Location': '/login.html'
                            });
                            res.end();
                        });
                    }
                });
            });
        
            
            }else if (ruta === '/login') {
                MongoClient.connect(cadenaConnexio, function (err, client) {
                    assert.equal(null, err);
                    console.log("Connexió correcta");
                    const db = client.db('database');
                    const nom = reqUrl.searchParams.get('nom');
                    const contrasenya = reqUrl.searchParams.get('contrasenya');
            
                    db.collection('usuaris').findOne({ "nom": nom, "contrasenya": contrasenya }, function (err, result) {
                        assert.equal(err, null);
            
                        if (result) {
                            console.log("Usuari encontrado. Redirigiendo a /index.html");
                            client.close();
            
                            res.writeHead(302, {
                                'Location': '/index.html'
                            });
                            res.end();
                        } else {
                            console.log("Usuario no encontrado. Error");
                            client.close();
            
                            res.writeHead(200, { 'Content-Type': 'text/html' });
                            res.write('<html><head><link rel="stylesheet" type="text/css" href="css/styles.css"></head><body><h1 class="usuari-no">Error: Usuario no encontrado</h1></body></html>');
                            res.end();

                        }
                    });
                });
            }
            
        
            else if (ruta === '/desa') {
                MongoClient.connect(cadenaConnexio, function (err, client) {
                    assert.equal(null, err);
                    console.log("Connexió correcta");
                    const db = client.db('database');
                    const nom = reqUrl.searchParams.get('nom');
            
                    db.collection('usuaris').insertOne({ "nom": nom }, function (err, result) {
                        assert.equal(err, null);
                        console.log("Afegit document a col·lecció usuaris");
                        client.close();
            
                        res.writeHead(302, {
                            'Location': '/registro.html'
                        });
                        res.end();
                    });
                });
            }
            else if (ruta === '/lista_nombres') {
                MongoClient.connect(cadenaConnexio, function (err, client) {
                    assert.equal(null, err);
                    console.log("Connexió correcta");
                    const db = client.db('database');
            
                    res.writeHead(200, {
                        "Content-Type": "application/json" 
                    });
                    console.log("Consulta de documentos en la colección usuaris");
            
                    const cursor = db.collection('usuaris').find({});
            
                    cursor.toArray(function (err, results) {
                        assert.equal(err, null);
            
                        res.write(JSON.stringify(results.map(doc => ({ nom: doc.nom }))));
                        res.end();
                        client.close();
                    });
                });
            }
            else if (ruta == '/consulta') {
                MongoClient.connect(cadenaConnexio, function (err, client) {
                    assert.equal(null, err);
                    console.log("Connexió correcta");
                    var db = client.db('database');
            
                    res.writeHead(200, {
                        "Content-Type": "text/html; charset=utf-8"
                    });
                    console.log("consulta document a col·lecció usuaris");
            
                    let cursor = db.collection('usuaris').find({});
            
                    cursor.toArray(function (err, results) {
                        assert.equal(err, null);
                        if (results != null) {
                            results.forEach((doc) => {
                                res.write(`nom ${doc.nom} <br>`);
                            });
                            res.end();
                        } else {
                            res.end();
                        }
                        client.close(); 
                    });
                });
            }
            else if (ruta === '/eliminar' && req.method === 'POST') {
                let body = '';

                req.on('data', chunk => {
                    body += chunk.toString();
                });
            
                req.on('end', () => {
                    const nombreAEliminar = new URLSearchParams(body).get('nom');
            
                    MongoClient.connect(cadenaConnexio, function (err, client) {
                        assert.equal(null, err);
                        console.log("Connexió correcta");
                        const db = client.db('database');
            
                        db.collection('usuaris').deleteOne({ "nom": nombreAEliminar }, function (err, result) {
                            if (err) {
                                console.error("Error al eliminar el documento:", err);
                                res.writeHead(500, { 'Content-Type': 'text/plain' });
                                res.end('Error al eliminar el documento');
                            } else {
                                if (result.deletedCount === 1) {
                                    console.log("Documento eliminado de la colección usuaris");
                                    res.writeHead(302, { 'Location': '/registro.html' });
                                    res.end();
                                }
                            }
            
                            client.close();
                        });
                    });
                });
            }
            else if (ruta === '/modifica' && req.method === 'POST') {
                let body = '';
            
                req.on('data', chunk => {
                    body += chunk.toString();
                });
            
                req.on('end', () => {
                    const datos = new URLSearchParams(body);
                    const nombreActual = datos.get('nombreActual');
                    const nuevoNombre = datos.get('nuevoNombre');
            
                    MongoClient.connect(cadenaConnexio, function (err, client) {
                        assert.equal(null, err);
                        console.log("Connexió correcta");
                        const db = client.db('database');
            
                        db.collection('usuaris').updateOne({ "nom": nombreActual }, { $set: { "nom": nuevoNombre } }, function (err, result) {
                            if (err) {
                                console.error("Error al modificar el nombre:", err);
                                res.writeHead(500, { 'Content-Type': 'text/plain' });
                                res.end('Error al modificar el nombre');
                            } else {
                                if (result.modifiedCount === 1) {
                                    console.log("Nombre modificado en la colección usuaris");
                                    res.writeHead(302, { 'Location': '/registro.html' });
                                    res.end();
                            }
                        }
                            client.close();
                        });
                    });
                });
            }
            
                    else {
                        res.writeHead(404, {
                            "Content-Type": "text/html; charset=utf-8"
                        });
                        sortida = "404 NOT FOUND";
                        res.write(sortida);
                        res.end();
                    }
                    
            }
                http.createServer(onRequest).listen(8888);
                console.log("Servidor iniciat http://localhost:8888/login.html");
            }
            
            exports.iniciar = iniciar;
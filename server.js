let http = require("http");
let url = require("url")
let fs = require("fs");
let MongoClient = require('mongodb').MongoClient;
let assert = require('assert');
let ObjectId = require('mongodb').ObjectID;
let crud = {
    afegirDocument: function (alumne, db, err, callback) {

    }
};

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
        }else if (reqUrl.pathname == '/futbol.html') {
            fs.readFile('futbol.html', function (err, sortida) {
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
        }else if (reqUrl.pathname == '/golf.html') {
            fs.readFile('golf.html', function (err, sortida) {
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
        }else if (reqUrl.pathname == '/surf.html') {
            fs.readFile('surf.html', function (err, sortida) {
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
        }else if (reqUrl.pathname == '/scripts/script2.js') {
            fs.readFile('scripts/script2.js', function (err, sortida) {
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
        }else if (reqUrl.pathname == '/scripts/info.js') {
            fs.readFile('scripts/info.js', function (err, sortida) {
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
        }else if (ruta == '/inici') {
                fs.readFile('./surf.html', function (err, sortida) {
                    if (err) {
                        res.writeHead(500, { 'Content-Type': 'text/plain' });
                        res.end('Error llegint fitxer');
                    } else {
                        res.writeHead(200, {
                            "Content-Type": "text/html; charset=utf-8"
                        });
                        res.write(sortida);
                        res.end();
                    }
                });
            }
            else if (ruta == '/desa') {
                MongoClient.connect(cadenaConnexio, function (err, client) {
                    assert.equal(null, err);
                    console.log("Connexió correcta");
                    var db = client.db('database');
                    db.collection('usuaris').insertOne({
                        "nom": reqUrl.searchParams.get('nom')
                    }, function (err, result) {
                        assert.equal(err, null);
                        console.log("Afegit document a col·lecció usuaris");
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
                        
                    }else {
                        res.writeHead(404, {
                            "Content-Type": "text/html; charset=utf-8"
                        });
                        sortida = "404 NOT FOUND";
                        res.write(sortida);
                        res.end();
                    }
        }
        http.createServer(onRequest).listen(8888);
        console.log("Servidor iniciat.");
           
}



exports.iniciar = iniciar;
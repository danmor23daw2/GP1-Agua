let http = require("http");
let url = require("url")
let fs = require("fs");

const server = http.createServer((req, res) => {
        const reqUrl = new URL(req.url, 'http://' + req.headers.host + '/');
        console.log("Petició per a  " + reqUrl.pathname + " rebuda.");

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
        }else if (reqUrl.pathname == '/rugby.html') {
            fs.readFile('rugby.html', function (err, sortida) {
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
        }else if (reqUrl.pathname == '/img/mapa.png') {
            fs.readFile('img/mapa.png', function (err, sortida) {
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
        }else if (reqUrl.pathname == '/img/r2.mp4') {
            fs.readFile('img/r2.mp4', function (err, sortida) {
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
        }        
});

server.listen(8888, () => {
    console.log('Servidor a http://localhost:8888/index.html');
});
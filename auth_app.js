/**
 * Created by Надежда on 23.02.2015.
 */

//const request = require('request');
const https = require('https');
const http = require('http');
const url_module = require('url');
const fs = require('fs');
const server = new http.Server();
const server2 = new http.Server();
var client_id = 'd2e6789c3dfe52c7ff83';
var client_secret = 'eaa129e855389d388a44b4c5a5351380e3a6e303';



server.on('request', (req,res) => {
    var code;
    if (req.headers.referer != undefined) {
        code = url_module.parse(req.headers.referer).query;
        console.log('sdfsdfd' + code);
    }
    console.log('req');
    res.end('thanks!');
    //fs.writeFileSync('key.txt', code);
    if (code != undefined) {
        //server.close();
        //server.listen(12345)
        //server.on(
        //    'request', (req1, res1) => {
        //    console.log('hereerer');
        //    console.log(req1);
        //}
        get_acsess_token(code);
    }
    });




function server_init() {
    server.listen(12345);
}


function auth() {
    //устанавливаем временный сервер, чтобы ключик получить
    https.get('https://github.com/login/oauth/authorize?client_id=' + client_id +
        '&redirect_uri=http://localhost:12345', (res) => {
        //console.log(res);
        //console.log(res.headers.location);
        res.on('data', (d) => {
        console.log('Нажмите на ссылку: ' + res.headers.location);
    //auth(res.headers.location);
});
}

).on('error', e => {
        console.error(e);
});
    //https.get('https://api.github.com/urfu-2015/verstka-tasks-7/readme', (res) => {
    //    //console.log(res.statusCode);
    //    }
    //).on('error', e => {
    //    //console.error(e);
    //});
}

function get_acsess_token(code) {
    server.close();
    console.log('https://github.com' + '/login/oauth/access_token?' +
        'client_id=' + client_id + '&client_secret=' + client_secret + '&' + code);


    //https.get('https://github.com' + '/login/oauth/access_token?' +
    //'client_id=' + client_id + '&client_secret=' + client_secret + '&' + code +
    //    '&redirect_uri=http://localhost:12345',
    //    (res) => {
    //        //console.log(res)
    //    }
    //);
}

server_init();
auth();
/**
 * Created by Надежда on 24.02.2015.
 */

const https = require('https');
const fs = require('fs');
const url = require('url');

const name_js_tasks = 'javascript-tasks-';
const name_verstka_tasks = 'verstka-tasks-';

function get_all_files_data(acsess_token) {
    for (var i = 1; i <= 10; i++) {
        var options = {
            host: 'api.github.com',
            path: '/repos/urfu-2015/' + name_js_tasks + i + '/readme' + '?' + acsess_token,
            headers: {'user-agent': 'Mozilla/5.0'}

        };
        console.log('https://api.github.com/repos/urfu-2015/' + name_js_tasks + i + '/readme' + '&' + acsess_token);
        //https.get('https://api.github.com/repos/urfu-2015/' + name_js_tasks + i + '/readme', (res) => {
        https.get(options, (res) => {
            var output = '';
            var d1 = 0;
            res.on('data', (d) => {
                output += d.toString();
            })

            res.on('end', () => {
                //console.log(d1);
                var data = JSON.parse(output);
                console.log(data);
                if (data.content != undefined) {
                    console.log(new Buffer(data.content, 'base64').toString());
                }
            })
        })
    }
}

fs.readFile('key.txt', function(err, data) {
    if (err) {
        throw err;
    }
    get_all_files_data(data);
    //console.log(data.toString().split('&'))}
});
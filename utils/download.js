var http = require('http'),
    fs = require('fs');

//options = 'http://s3.amazonaws.com/uifaces/faces/twitter/mactopus/128.jpg';

function download(options, callback){
    if (!options || !options.name || !options.url){
        throw new Error('Invalid argument');
    }

    options.path = options.path || './';
    options.url = options.url.replace('https://', 'http://');

    http.get(options.url, function(res){
        var imagedata = '';
        res.setEncoding('binary');

        res.on('data', function(chunk){
            imagedata += chunk;
        });

        res.on('end', function(){
            fs.writeFile(options.path + options.name, imagedata, 'binary', function(err){
                if (err) throw err;
                console.log('File %s saved', options.name);

                if (typeof callback === 'function'){
                    callback();
                }
            });
        });
    });
}

module.exports = download;

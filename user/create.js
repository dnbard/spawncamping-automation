var User = require('./index'),
    download = require('../utils/download');

function process(){
    var user = new User();

    download({
        url: user.avatar,
        name: user.login + '.png',
        path: './avatars/'
    }, function(err, avatarLocalPath){
        if (!err){
            user.avatarLocalPath = avatarLocalPath;
        }
    });
}

if (module.parent){
    module.exports = process;
} else {
    process();
}

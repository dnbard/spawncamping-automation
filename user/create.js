var User = require('./index'),
    download = require('../utils/download');

function process(callback){
    var user = new User();

    download({
        url: user.avatar,
        name: user.login + '.png',
        path: './avatars/'
    }, function(err, avatarLocalPath){
        if (!err){

            user.avatarLocalPath = avatarLocalPath.replace('./', '');
            console.log(user);

            if (typeof callback == 'function'){
                callback(user);
            }
        }
    });

    return user;
}

if (module.parent){
    module.exports = process;
} else {
    process();
}

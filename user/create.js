var User = require('./index'),
    user = new User,
    download = require('../utils/download');

console.log(JSON.stringify(user));

download({
    url: user.avatar,
    name: user.login + '.png',
    path: './avatars/'
}, function(err, avatarLocalPath){
    if (!err){
        user.avatarLocalPath = avatarLocalPath;
    }
});


//TODO: check Node context and export different object based on result
module.exports = user;

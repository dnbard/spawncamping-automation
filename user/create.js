var User = require('./index'),
    user = new User,
    download = require('../utils/download');

console.log(JSON.stringify(user));

download({
    url: user.avatar,
    name: user.login + '.png',
    path: './avatars/'
});

module.exports = {};

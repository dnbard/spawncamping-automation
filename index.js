var webdriverio = require('webdriverio');
var options = { desiredCapabilities: { browserName: 'chrome' } };

var User = require('./user/create');
var user = User();

console.log(user);

webdriverio.remote(options)
    .init()
    .url('http://github.com')
    .setValue('input[name="user[login]"]', user.login)
    .setValue('input[name="user[email]"]', user.email)
    .setValue('input[name="user[password]"]', user.login + 1)
    .submitForm('form[action="/join"]', function(){
        this.url('https://github.com/settings/profile')
        .chooseFile('#upload-profile-picture', 'avatars/' + user.login + '.png')
        .waitFor('#facebox button.primary', 5000)
        .click('#facebox button.primary')
        .end();
    });
    /*.url('https://github.com/dnbard/brackets-extension-rating')
    .title(function(err, res) {
        console.log('Title was: ' + res.value);
    })
    .click('button.star-button[aria-label="Star this repository"]')*/

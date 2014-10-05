var webdriverio = require('webdriverio');
var options = { desiredCapabilities: { browserName: 'chrome' } };

var User = require('./user');
var user = new User();

webdriverio.remote(options)
    .init()
    .url('http://github.com')
    .setValue('input[name="user[login]"]', user.login)
    .setValue('input[name="user[email]"]', user.email)
    .setValue('input[name="user[password]"]', user.login + 1)
    .getValue('input[name="user[login]"]', function(err, value) {
        console.log(value);
    })
    .submitForm('form[action="/join"]')
    .url('https://github.com/dnbard/brackets-extension-rating')
    .title(function(err, res) {
        console.log('Title was: ' + res.value);
    })
    .click('button.star-button[aria-label="Star this repository"]')
    .end();

var faker = require('faker');

function getValidName(){
    var name = null;

    while(!name || (name.match(/ /g)||[]).length !== 1){
        name = faker.name.findName();
    }

    return name;
}

function getLogin(name, replacer){
    replacer = replacer || '-';

    return name.replace(' ', replacer).toLowerCase();
}

function getEmail(name, emailDomain){
    emailDomain = emailDomain || '@mailinator.com';

    if (emailDomain.indexOf('@') === -1){
        throw new Error('Email must have "@" symbol');
    }

    return getLogin(name, '.') + emailDomain;
}

function User(){
    this.name = getValidName();
    this.login = getLogin(this.name);
    this.email = getEmail(this.name);
    this.avatar = faker.image.avatar();
}

module.exports = User;

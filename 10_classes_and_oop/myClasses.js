// Class is a keyword::

class User{
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptyPassword(){
        return `${this.password}abc`;
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`;
    }
}

// Create a user
const chai = new User('Sen', 'abc@google.com', '#124&');
console.log(chai.encryptyPassword());     // return #124&abc
console.log(chai.changeUsername());       // return SEN





// Behind the scene::

//User1 is a function but function is also an object

function User1(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password;
}
User1.prototype.encryptyPassword = function(){
    return `${this.password}abc`;
}
User1.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}

const tea = new User1('Tea','abc@google.com', '*234*');
console.log(tea);
console.log(tea.changeUsername());
console.log(tea.encryptyPassword());
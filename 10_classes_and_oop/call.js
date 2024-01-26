function SetUsername(username){
    // Complex DB calls
    this.username = username;
}

function createUser(username,email,password){
    // SetUsername(username)   // call to hua h but iske andr jo variables set kiye the wo context khtm hote hi udd gye......isliye hum SetUsername.call(username) ka use krenge

    SetUsername.call(this, username)  // For holding reference, pass 'this' keyword of current context to set the values

    this.email = email;
    this.password = password;
}

const obj = new createUser('Suren','gfg@google.com', '123');
console.log(obj);      // set only email and password
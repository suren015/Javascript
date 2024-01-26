class User{
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createID(){          // this method is only applicable for this class only, not for those classes which are inherited by this class and also not for all objects that are created by this user
        return `123`;
    }
    
}

const suren = new User('Suren');
// console.log(suren.createID());     // return error as createID is static
class User{
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}


// teacher have all fuctionality of user
class Teacher extends User{
    // overriding the constructor function
    constructor(username, email, password){
        // this.username = username;   returns error as 'this' keyword doesn't know which username will called (Teacher username or User username)

        // For set the username call super class constructor
        super(username);
        this.email = email;
        this.password = password;
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const obj1 = new User('jike');

const obj = new Teacher('Suren', 'ghj@gmail.com', '&^%432');
console.log(obj);
obj.addCourse();    // return {Suren, ghj@gmail.com, &^%432}

obj.logMe();

console.log(obj1.username);   // return jike
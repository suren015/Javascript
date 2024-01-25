// This is an Object and also an Object literal
const user = {
    username: "Surendra",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        console.log('Get user details from database');
    }
}

console.log(user.username);     // Accesing any member from the Object
user.getUserDetails();

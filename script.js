var database = [
    {
        username: "Austin",
        password: "1234"
    },
    {
        username: "Ingrid",
        password: "9876"
    },
    {
        username: "Sally",
        password: "7777"
    },
];

var newsFeed = [
    {
        username: "Sally",
        timeline: "I think Javascript is Cool"
    },
    {
        username: "Oeh",
        timeline: "I think Javascript is Cooler"
    },
    {
        username: "Neil",
        timeline: "I think Javascript is the Coolest"
    },
];

function isUserValid(username, password) {
    for (var i=0; i < database.length; i++) {
        if(database[i].username === username &&
            database[i].password === password) {
                return true;
            } 
    }
    return false;
}

function signIn(username, password) {
    if (isUserValid(username, password)) {
        console.log(newsFeed);
        } else {
            alert("Sorry, wrong username and password!")
        }
}

var userNamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("What's your password?");

signIn(userNamePrompt, passwordPrompt);
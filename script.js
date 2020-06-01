var database = [
    {
        username: "Austin",
        password: "1234"
    }
];

var newsFeed = [
    {
        username: "Sally",
        timeline: "I think Javascript is Cool"
    },
    {
        username: "Oeh",
        timeline: "I think Javascript is Cooler"
    }
];

var userNamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("What's your password?");

function signIn(username, password) {
    if (username === database[0].username && 
        password === database[0].password) {
            console.log(newsFeed);
        } else {
            alert("Sorry, wrong username and password!")
        }
}

signIn(userNamePrompt, passwordPrompt);
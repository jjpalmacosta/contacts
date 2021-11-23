//Se incluye express
var express = require('express');
//Puerto a utilizar
var port = 3000;

var bodyParser = require('body-parser');

console.log("Starting API Server...");
var BASE_API_PATH = "/api/v1";

var contacts = [
    {"name": "Peter", "phone": "677123456"},
    {"name": "Jhon", "phone": "677098765"}
]


var app = express();
app.use(bodyParser.json());

app.get("/",(req, res)=>{
    res.send("<html><body><h1>My Server</h1></body></html>")
});

app.get(BASE_API_PATH + "/contacts", (req, res) => {
    console.log(Date() + "- GET /contacts" );
    res.send(contacts);  
});

app.post(BASE_API_PATH + "/contacts", (req, res) => {
    console.log(Date() + "- POST /contacts");
    var contact = req.body;
    contacts.push(contact);
    res.sendStatus(201); 
});

app.listen(port);
console.log("Server ready!");

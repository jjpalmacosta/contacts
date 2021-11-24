//Se incluye express
var express = require('express');
//Puerto a utilizar
var port = 3000;
var DataStore = require("nedb");

var bodyParser = require('body-parser');

console.log("Starting API Server...");
var BASE_API_PATH = "/api/v1";
var DB_FILE_NAME = __dirname + "/contacts.json";

var app = express();
app.use(bodyParser.json());

var db = new DataStore({
    filename : DB_FILE_NAME,
    autoload : true
});


app.get("/",(req, res)=>{
    res.send("<html><body><h1>My Server</h1></body></html>")
});

app.get(BASE_API_PATH + "/contacts", (req, res) => {
    console.log(Date() + "- GET /contacts" );
    res.send([]);  
});

app.post(BASE_API_PATH + "/contacts", (req, res) => {
    console.log(Date() + "- POST /contacts");
    var contact = req.body;
    db.insert(contact), (err) =>{
        if(err){
            console.log(Date() + "-" + err)
            res.sendStatus(500);
        }else{
            res.sendStatus(201); 
        }
    };
    res.sendStatus(201); 
});

app.listen(port);
console.log("Server ready!");

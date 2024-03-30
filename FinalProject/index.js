var mysql = require('mysql');
var express = require('express');
var app = express();
const bodyParser = require("body-parser");
const encoder = bodyParser.urlencoded();
var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root123',
    database: 'wp'
});

con.connect(function(error) {
    if (error) throw error;
    else console.log("connected to the database successfully!");
});

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/login.html");
});

app.post("/", encoder, function(req, res) {
    var username = req.body.user;
    var password = req.body.pass;

    con.query("SELECT * FROM login WHERE username = ? AND pass = ?", [username, password], function(error, results, fields) {
        if (error) throw error;
        
        if (results.length > 0) {
            res.redirect("/welcome");
        } else {
            res.redirect("/");
        }
    });
});

// when login is successful
app.get("/welcome", function(req, res) {
    res.sendFile(__dirname + "/welcome.html");
});

// set app port 
app.listen(1100, function() {
    console.log('App listening on port 1100');
});

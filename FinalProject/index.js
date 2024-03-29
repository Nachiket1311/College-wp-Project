// var user=document.inp1.value;
// var pass=document.inp2.value;
var mysql = require('mysql');
            var express = require('express');
            var app= express()
            const bodyParser = require("body-parser");
            const encoder = bodyParser.urlencoded();
            var con =mysql.createConnection({
              Host: 'localhost',
              user: 'root',
              password:'root123',
              database:'wp'
            });

            con.connect(function(error){
                if (error) throw error
                else console.log("connected to the database successfully!")
            });
            app.get("/",function(req,res){
                res.sendFile(__dirname + "/login.html");
            })
            app.post("/",encoder, function(req,res){
                var username = req.body.username;
                var password = req.body.password;
            
                connection.query("select * from loginuser where user_name = ? and user_pass = ?",[username,password],function(error,results,fields){
                    if (results.length > 0) {
                        res.redirect("/welcome");
                    } else {
                        res.redirect("/");
                    }
                    res.end();
                })
            })
        // when login is success
app.get("/welcome",function(req,res){
    res.sendFile(__dirname + "/welcome.html")
})


// set app port 
app.listen(1000);
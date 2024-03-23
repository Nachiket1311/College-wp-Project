// var user=document.inp1.value;
// var pass=document.inp2.value;
var mysql = require('mysql');
            var express = require('express');
            var app= express()
            var con=mysql.createConnection({
              Host: 'localhost',
              user: 'root',
              password:'root123',
            });
            con.connect( function(err) {
                if(err)throw err; 
                console.log("Connected!");
                var qur = "SELECT `proj_login`.`username`,`proj_login`.`pass`FROM `wp`.`proj_login`";
            con.query(qur,function(err,result){
                if(err)throw err; 
                console.log(result);
                var user="70472200139";
                var pass="nachiket11"
                    if(user != result.username || pass != result.pass)
                        {if(err)throw err;}
                    else
                    {console.log("match found");}
                    
                  
                })
      });
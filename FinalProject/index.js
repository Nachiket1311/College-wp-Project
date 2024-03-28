// var user=document.inp1.value;
// var pass=document.inp2.value;
var mysql = require('mysql');
            var express = require('express');
            var app= express()
            const path = require('path'); 
            var pool =mysql.createConnection({
              Host: 'localhost',
              user: 'root',
              password:'root123',
              database:'wp'
            });

            app.use(express.static(path.join(__dirname, 'public')));
            app.post('/login', async (req, res) => {
              const { Username, Password } = req.body;
          
              try {
                  const result = await pool.query('SELECT * FROM `wp`.`proj_login` WHERE username = $1 AND password = $2', [Username, Password]);
                  
                  if (result.rows.length > 0) {
                      res.send('Login successful');
                  } else {
                      res.send('Invalid username or password');
                  }
              } catch (err) {
                  console.error('Error executing query', err);
                  res.status(500).send('Internal Server Error');
              }
          });
          app.get('/', (req, res) => {
            res.sendFile(__dirname + '/index.html');
        });
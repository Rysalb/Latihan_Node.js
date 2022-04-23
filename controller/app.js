var express = require('express');
var app = express();
var user = require('../model/user.js'); 
app.get('/api/user/:Userid', function (req, res) {
 var id = req.params.Userid;
 user.getUser(id, function (err, result) {
 if (!err) {
 res.send(result);
 }else{
    res.status(500).send('Some error');
 }
 });
});

//tampilkan semua
app.get('/api/user/', function (req, res) {
    var id = req.params.Userid;
    user.getUsers(id, function (err, result) {
    if (!err) {
    res.send(result);
    }else{
       res.status(500).send('Some error');
    }
    });
   });


   //insert data
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
app.post('/api/user', urlencodedParser, function (req, res) {
    var username = req.body.Username;
    var email = req.body.Email;
    var role = req.body.Role;
    var password = req.body.Password
 user.addUser(username, email, role, password, function (err, 
result) {
 if (!err) {
 console.log(result);
 res.send(result + ' record inserted');
 } else{
 res.send(err.statusCode);
 }
 });
});

//insert data to web service is in json format
var jsonParser = bodyParser.json();
app.post('/api/user', urlencodedParser,jsonParser, function (req, res) {
    var username = req.body.Username;
    var email = req.body.Email;
    var role = req.body.Role;
    var password = req.body.Password
 user.addUser(username, email, role, password, function (err, 
result) {
 if (!err) {
 console.log(result);
 res.send(result + ' record inserted');
 } else{
 res.send(err.statusCode);
 }
 });
});



//update data
app.put('/api/user/:Userid', urlencodedParser, jsonParser, function (req, res) {
    var email = req.body.Email;
    var password = req.body.Password;
    var userid = req.params.Userid
    
user.updateUser(email,password,userid, function (err, result) {
 if (!err) {
 console.log(result);
 res.send(result + ' Update inserted');
 } else{
 res.send(err.statusCode);
 }
 });
});


//delete data 

app.delete('/api/user/:Userid', function (req, res) {
 
   var userid = req.params.Userid;
   
   user.deleteUser(userid, function (err, result) {
   if (!err) {
   
   res.send(result + ' record deleted');
   }else{
   console.log(err);
   
   res.status(500).send("Some error");
   }
   });
  });

module.exports = app


   
var db = require('./databaseConfig.js');
var userDB = {

 getUser: function (Userid, callback) {
 var conn = db.getConnection();
 conn.connect(function (err) {
 if (err) {
 console.log(err);
 return callback(err,null);
 }
 else {
 console.log("Connected!");
 var sql = 'SELECT * FROM user WHERE Userid = ?';
 conn.query(sql, [Userid], function (err, result) {
 conn.end();
 if (err) {
 console.log(err);
 return callback(err,null);
 } else {
 return callback(null, result);
 }
 });
 }
 });
 },


// memanggil semua


getUsers: function (user, callback) {
    var conn = db.getConnection();
    conn.connect(function (err) {
    if (err) {
    console.log(err);
    return callback(err,null);
    }
    else {
    console.log("Connected!");
    var sql = 'SELECT * FROM user';
    conn.query(sql, [user], function (err, result) {
    conn.end();
    if (err) {
    console.log(err);
    return callback(err,null);
    } else {
    return callback(null, result);
    }
    });
    }
    });
    },

// membuat data
    addUser: function (Username, Email, Role, Password, callback) {
        var conn = db.getConnection();
        conn.connect(function (err) {
        if (err) {
        console.log(err);
        return callback(err,null);
        }
        else {
        console.log("Connected!");
        var sql = 'Insert into user (Username, Email, Role, Password) values(?,?,?,?)';
        conn.query(sql, [Username, Email, Role, Password], 
       function (err, result) {
        conn.end();
       if (err) {
        console.log(err);
       return callback(err,null);
        } else {
        console.log(result.affectedRows);
       return callback(null,result.affectedRows);
        }
        });
        }
        });
        },

    updateUser: function (Email,Password,Userid, callback) {
        var conn = db.getConnection(); 
        conn.connect(function (err) {
            if (err) {
            console.log(err);
            return callback(err,null);
            }
            else {
            console.log("Connected!");
            var sql = 'Update user set Email=?,Password=? where Userid =? ';
            conn.query(sql, [Email, Password,Userid], 
           function (err, result) {
            conn.end();
           if (err) {
            console.log(err);
           return callback(err,null);
            } else {
            console.log(result.affectedRows);
           return callback(null,result.affectedRows);
            }
            });
            }
            });
    },
            

    deleteUser: function (Userid, callback) {
 
        var conn = db.getConnection();
        conn.connect(function (err) {
        if (err) {
        console.log(err);
        return callback(err,null);
        }
        else {
        
        console.log("Connected!");
        
        var sql = 'Delete from user where Userid=?';
        
        conn.query(sql, [Userid], function (err, result) {
        conn.end();
        
        if (err) {
        console.log(err);
       return callback(err,null);
        
        } else {
        
        return callback(null,result.affectedRows);
        
        }
        });
        
        }
        
        }); 
        
        }
}
module.exports = userDB


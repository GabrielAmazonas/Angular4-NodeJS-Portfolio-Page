const mongoose  = require('mongoose'),
bcrypt          = require('bcryptjs'),
config          = require('../config/database');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required:true
    },
    email: {
        type: String,
        required:true
    },
    username:  {
        type: String,
        required:true
    },
    password: {
        type: String,
        required:true
    }
});

const User = module.exports = mongoose.model("User", userSchema); 

//export functions

module.exports.getuserById = function(id, callback){
    User.findById(id, callback);
}

module.exports.getuserByUsername = function(username, callback){
    const query = {username: username}
    User.findOne(query, callback) ;
}


module.exports.addUser = function(newUser, callback){
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser.save(callback);
        })
    })
    const query = {username: username}
    User.findOne(query, callback) ;
}
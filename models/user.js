const mongoose  = require('mongoose'),
config          = require('../config/database');

const userSchema = new mongoose.Schema({
    title: {
        type: String,
        required:true
    },
    image: {
        type: String,
        required:true
    },
    description:  {
        type: String,
        required:true
    }
});

const user = module.exports = mongoose.model("user", userSchema); 

//export functions

module.exports.getuserById = function(id, callback){
    user.findById(id, callback);
}

module.exports.adduser = function(user, callback){
     user.create(user, callback) ;
}
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  //Code goes in here
  username:  String,
  password: String,
  email:   String
});

var User = mongoose.model('User', UserSchema);
module.exports = User;
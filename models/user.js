var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Bcrypt = require("bcryptjs");

//Create a schema
var userSchema = new Schema({
   username: { 
      type: String,
      lowercase: true,
      trim: true, 
      required: true
    },
   password: { type: String, required: true }
},
{
   timestamps: true
});

userSchema.pre("save", function(next) {
   if(!this.isModified("password")) {
       return next();
   }
   this.password = Bcrypt.hashSync(this.password, 10);
   next();
});

//We need to create a model using it
var User = mongoose.model('User', userSchema);

//make this available to our users in our Node applications
module.exports = User;
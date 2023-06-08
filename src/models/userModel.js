const mongoose = require('mongoose');
//Name, Email, Password, Confirm Password, Verification status = false
const userSchema = new mongoose.Schema({
   name:{
    type:String,
    required:true,
   },
   email:{
    type:String,
    required:true
   },
   password:{
    type:String,
    required:true
   },
   confirmPassword : {
    type:String,
    required:true,
   },
   verificationStatus:{
    type: Boolean,
    default:false
   },
},{timestamps:true})

module.exports = mongoose.model('User',userSchema);
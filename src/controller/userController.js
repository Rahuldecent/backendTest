const userModel = require('../models/userModel');
const jwt = require('jsonwebtoken');
// Create user

exports.createUser = async (req, res) => {
    try {
        let data = req.body
        let { name, email, password, confirmPassword } = data
        if(Object.keys(data).length === 0) {
            return res.send({status:false,msg:'Please enter details'})
        }
         if(!name) {
            return res.send({status:false,msg:"Please enter your name"})
         }
         if(!email) {
            return res.send({status:false,msg:"Please enter your email"})
         }
         if(!password) {
            return res.send({status:false,msg:"Please enter your password"})
         }
         if(!confirmPassword) {
            return res.send({status:false,msg:"Please enter your confirmPassword"})
         }
         if(!name) {
            return res.send({status:false,msg:"Please enter your name"})
         }
        const userCreated = await userModel.create(data)
        res.status(201).send({ status: true, msg: "successfully creted", data: userCreated })
    } catch (error) {
        console.log(error)
    }

}

// update user details;

exports.updateUser = async (req,res) => {
    try {
        let id = req.params.id
    let data = req.body
    let { name, email, password, confirmPassword } = data 
    let userUpdate = await userModel.findByIdAndUpdate({_id:id},{$set:{
        name : name,
        email:email
    }},{new:true})
    return res.send({status:true,msg:"user deatils updated",data:userUpdate})
    } catch (error) {
        console.log(error) 
    }    
}

// login user 

exports.loginUser = async (req,res) => {
    let data = req.body
    let {email , password} = data
    if(!email || !password) {
        return res.status(404).send({status:false,msg:"please enter email or password"})
    }
    let findEmail = await userModel.findOne({email})
    if(!findEmail) {
        return res.status(404).send({status:false,msg:'user not exist'})
    }
 const token =  jwt.sign({_id:findEmail._id},"bhdjgjgtji",{expiresIn:'7d'})
    return res.status(200).send({status:true,msg:"logged in successfully" ,token:token})

}
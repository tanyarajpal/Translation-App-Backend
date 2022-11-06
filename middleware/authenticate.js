const mongoose = require('mongoose');

exports.authenticate = async(req,res,next) =>{
    try{
        const user = "tanya"
        const pass = "123"
        userName = "tanya" ;
        password = "123" ;
        if(user == userName && pass == password){
            console.log("user authenticated successfully");
            next();
        }else{
            throw new Error('User not found')
        }
    }catch(err){
        res.status(400).json({message:'token not found'});
        console.log("token not found ")
    }
    
}

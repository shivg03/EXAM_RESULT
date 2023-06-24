const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/UserModel')


const register = async function (req,res){
    try{
        const {name,email,password,type}=req.body;

        const hashedPassword = await bcrypt.hash(password, 10);

        const data = await User.bulkCreate({
            name,
            email,
            password: hashedPassword,
            type
        });
        return res.status(201).json({data:data});
    }catch (error){
        console.log('Error during User registration',error);
        return res.status(500).json({message:'Find Your Mistake'});
    }
}

module.exports={
    register
}
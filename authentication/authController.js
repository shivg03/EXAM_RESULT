const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const db = require("../models");
const User = require("../models/UserModel");


const register = async (req, res) => {
  const { name, email, password, type } = req.body;

  if (!name || !email || !password || !type) {
    return res.status(422).json({ error: "required" });
  }

  try{

     const userExists= await User.findOne({where:{ email }})
   
      if (userExists) {
        return res.status(422).json({ error: "User Already Exists" });
      }

      // const { name, email, password, type } = req.body;

      const hashedPassword = await bcrypt.hash(password, 10);

      const newUser = await User.create({
        name,
        email,
        password: hashedPassword,
        type
      });
      
     res.status(201).json({ message: "User Registered Successfully" });
        
    } catch(err){
      console.log(err);
    }
};


const login = async  (req,res)=>{
  try{
    const {email,password} =req.body;
  

  const user = await User.findOne({where: {email}});
  if (!user) {
    return res.status(401).json({ message: 'Invalid user' });
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return res.status(401).json({ message: 'Invalid password' });
  }

 
  const token = jwt.sign({ userId: user.id, userName: user.name }, "dsdss", { expiresIn: '30min' });



  return res.status(200).json({ user, token });
} catch (error) {
  console.error('Login Error', error);
}
}

module.exports = {
  register,
  login
};

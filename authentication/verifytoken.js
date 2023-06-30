const jwt = require('jsonwebtoken');
const secretKey = "dsdss"

const authentication  = (req,res,next)=>{
    try{
    const token = req.headers.authorization;
    // const token = authHeader && authHeader.split(' ')[1];
    // let user = jwt.verify(token,secretKey)  

    if(!token){
        return res.status(401).json({message:'Token Missing'});
    }

    jwt.verify(token, secretKey,(err,user)=>{
        if(err){
            return res.status(403).json({message:'token invalid'});
        }

        req.user = user;
        next();
        });
    }catch(err){
        console.log("error",err);
    }
};

module.exports={
    authentication
}

const db = require("../models");
const User = db.User;

const getUsers = async (req, res) => {
  const data = await User.findAll({});
  res.status(200).json({ data: data });
};

const postUsers = async(req,res)=>{
    var postData = req.body;
    if(postData.length>1){
        var data = await User.bulkCreate(postData); 
    }else{
        var data = await User.create(postData);
    }
    res.status(200).json({data:data});
}

const deleteUsers = async(req,res)=>{
    const data = await User.destroy({
        where:{
            id: req.params.id
        },
    });
    res.status(200).json({data:data});
}

module.exports = {
  getUsers,
  postUsers,
  deleteUsers
};

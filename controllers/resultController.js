const Result = require('../models/ResultModel')

const getResults = async (req, res) => {
    const data = await Result.findAll({});
    res.status(200).json({ data: data });
  };


const postResults = async(req,res)=>{
    var postData = req.body;
    if(postData.length>1){
        var data = await Result.bulkCreate(postData); 
    }else{
        var data = await Result.create(postData);
    }
    res.status(200).json({data:data});
}

const deleteResults = async(req,res)=>{
    const data = await Result.destroy({
        where:{
            id: req.params.id
        },
    });
    res.status(200).json({data:data});
}




module.exports={
    getResults,
    postResults,
    deleteResults
}
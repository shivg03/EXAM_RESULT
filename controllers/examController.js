const Exam = require('../models/ExamModel')

const allexams = async (req,res)=>{
    const data = await Exam.findAll({})
    res.status(200).json({data:data})
  }



const getExams = async (req, res) => {
    const data = await Exam.findOne({
        where:{
            id: req.params.id
        },
    });
    res.status(200).json({ data: data });
  };


const postExams = async(req,res)=>{
    var postData = req.body;
    if(postData.length>1){
        var data = await Exam.bulkCreate(postData); 
    }else{
        var data = await Exam.create(postData);
    }
    res.status(200).json({data:data});
}

const deleteExams = async(req,res)=>{
    const data = await Exam.destroy({
        where:{
            id: req.params.id
        },
    });
    res.status(200).json({data:data});
}

module.exports={
    allexams,
    postExams,
    deleteExams,
    getExams
}

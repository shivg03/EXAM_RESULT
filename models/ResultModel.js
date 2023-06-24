const ExamModel=require('./ExamModel')

module.exports=(sequelize,DataTypes)=>{
    const Result= sequelize.define('Results',{
        id:{
            type:DataTypes.INTEGER,
            unique:true,
            required:true,
            primaryKey:true,
        },
        studentId:{
            type:DataTypes.INTEGER,
            required:true,
        },
        examId:{
            type:DataTypes.INTEGER,
            References:{
                model:ExamModel,
                key:'id',
            }
        },
        score:{
            type:DataTypes.STRING,
            required:true,
        }
    },{
        tableName: "Results",
    })
    return Result;
}
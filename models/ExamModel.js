module.exports=(sequelize,DataTypes)=>{
    const Exam= sequelize.define('Exams',{
        id:{
            type:DataTypes.INTEGER,
            unique:true,
            required:true,
            primaryKey:true,
        },
        name:DataTypes.STRING,
        date:{
            type:DataTypes.STRING,
            required:true,
        }
    },{
        tableName: "Exams",
    })
    return Exam;
}
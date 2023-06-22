const {Sequelize, DataTypes}= require('sequelize')

const sequelize=new Sequelize('result_exam','root','',{
    host:'localhost',
    dialect:'mysql',
    pool:{max:5,min:0,idle:10000}
})

sequelize.authenticate()
.then(()=>{
    console.log('Connected');
})
.catch(err=>{
    console.log('error'+ err);
});

const db = {};
db.Sequelize=Sequelize;
db.sequelize=sequelize;

db.User=require('./UserModel')(sequelize,DataTypes)
db.Exam=require('./ExamModel')(sequelize,DataTypes)
db.Result=require('./ResultModel')(sequelize,DataTypes)


db.sequelize.sync({force:true});
module.exports=db
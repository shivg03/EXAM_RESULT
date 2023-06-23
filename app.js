const express = require('express');
var bodyParser = require('body-parser')
require('./models')
var userController = require('./controllers/userController.JS')
var examController = require('./controllers/examController')
const app = express();

app.use(bodyParser.json())

const PORT =3000;

app.get('/',(req,res)=>{
    console.log('Hello Guys');
})

app.get('/getUser',userController.getUsers)

app.post('/postUser',userController.postUsers)

app.delete('/deleteUser/:id',userController.deleteUsers)

app.get('/getExam',examController.getExams)

app.post('/postExam',examController.postExams)

app.delete('/deleteExam/:id',examController.deleteExams)

app.listen(PORT,()=>{
    console.log(`App is Running on ${PORT}`);
})
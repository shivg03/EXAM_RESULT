const express = require('express');
var bodyParser = require('body-parser')
require('./models')
var userController = require('./controllers/userController')
var examController = require('./controllers/examController')
var resultController = require('./controllers/resultController')
const authController = require('./authentication/authController')
const app = express();

app.use(bodyParser.json())

const PORT =3000;

app.get('/',(req,res)=>{
    console.log('Hello Guys');
})

app.get('/getUser/:id',userController.getUsers)

app.post('/postUser',userController.postUsers)

app.delete('/deleteUser/:id',userController.deleteUsers)

app.get('/getExam',examController.getExams)

app.post('/postExam',examController.postExams)

app.delete('/deleteExam/:id',examController.deleteExams)

app.get('/getResult',resultController.getResults)

app.post('/postResult',resultController.postResults)

app.delete('/deleteResult/:id',resultController.deleteResults)

app.post('/register',authController.register)

app.post('/login',authController.login)

app.listen(PORT,()=>{
    console.log(`App is Running on ${PORT}`);
})
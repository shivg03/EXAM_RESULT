const express = require('express');
var bodyParser = require('body-parser')
require('./models')
var userController = require('./controllers/userController.JS')
const app = express();

app.use(bodyParser.json())

const PORT =3000;

app.get('/',(req,res)=>{
    console.log('Hello Guys');
})

app.get('/getUser',userController.getUsers)

app.post('/postUser',userController.postUsers)

app.delete('/deleteUser/:id',userController.deleteUsers)


app.listen(PORT,()=>{
    console.log(`App is Running on ${PORT}`);
})
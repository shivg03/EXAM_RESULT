const express = require('express');
var bodyParser = require('body-parser')
require('./models')
const userRouter = require('./routers/userRouter')
const authController = require('./authentication/authController')

const app = express();

app.use(express.json());

const PORT =3000;

app.get('/',(req,res)=>{
    console.log('Hello Guys');
})


app.use('/user',userRouter)


app.post('/register',authController.register)

app.post('/login',authController.login)

app.listen(PORT,()=>{
    console.log(`App is Running on ${PORT}`);
})
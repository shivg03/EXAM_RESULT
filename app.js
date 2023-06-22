const express = require('express');
var bodyParser = require('body-parser')
require('./models')
const app = express();


app.use(bodyParser.json())

const PORT =3000;

app.get('/',(req,res)=>{
    res.send('Hello Connection Successful')
})

app.listen(PORT,()=>{
    console.log(`App is Running on ${PORT}`);
})
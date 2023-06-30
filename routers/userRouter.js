const userController = require('../controllers/userController')


const router = require('express').Router()

const {authentication} = require('../authentication/verifytoken')

router.get('/allUsers',authentication, userController.allUsers)

router.get('/getUser/:id',authentication, userController.getUsers)

router.post('/postUser',userController.getUsers)

router.delete('/deleteUser/:id',authentication, userController.deleteUsers)


module.exports=router;

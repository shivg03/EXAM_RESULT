const examController = require('../controllers/examController')


const router = require('express').Router()

// const {authentication} = require('../authentication/verifytoken')

router.get('/allexams',examController.allexams)

router.get('/getexam/:id',examController.getExams)

router.post('/postExam',examController.postExams)

router.delete('/deleteUser/:id',examController.deleteExams)


module.exports=router;
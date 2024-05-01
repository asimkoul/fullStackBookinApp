const express=require('express')
const router=express.Router()

const controller=require('../controllers/admin')

router.post('/user',controller.postUser)
router.get('/user',controller.getUser)
router.delete('/user/:id',controller.deleteUser);
router.get('/user/:id',controller.getEditUser);
//router.post('/user/:id',controller.postEditUser);


module.exports=router

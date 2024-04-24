const express = require('express')
const userRoute = express.Router()

// controller
const userController = require("../controller/userController")
//user login,registrations
userRoute.post('/register', userController.userRegistration)
userRoute.post('/adminregister', userController.adminRegistration)
userRoute.get('/user/:id/verify/:token', userController.verify)
userRoute.post('/check-email',userController.checkEmail)
userRoute.post('/login',userController.userLogin)
userRoute.get('/check', userController.check)

module.exports = userRoute
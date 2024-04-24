const express = require('express')
const adminRoute = express.Router()
//Controller
const adminController = require("../controller/adminController")

//Admin Login
adminRoute.post('/login', adminController.adminlogin)
adminRoute.get('/users', adminController.listUsers)
adminRoute.get('/listExperts', adminController.listExperts)
adminRoute.post('/user/block/:id', adminController.blockUser)

module.exports = adminRoute
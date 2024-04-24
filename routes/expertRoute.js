const express = require('express')
const expertRoute = express.Router()


//expert controller
const expertController = require('../controller/expertController')

// middlewares
// const authMiddleware = require("../middlewares/auth")
// const expertMiddleware = require("../middlewares/expertAuth")


//experts routes

//expert login,registration
expertRoute.post('/register1', expertController.expertRegistration1)
expertRoute.post('/register2', expertController.expertRegistration2)
expertRoute.post('/register3', expertController.expertRegistration3)
expertRoute.post('/login', expertController.expertLogin)
expertRoute.get('/expert/:id/verify/:token', expertController.verify)

module.exports = expertRoute
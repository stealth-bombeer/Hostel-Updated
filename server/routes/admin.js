const express = require('express')

// controller functions
const { loginAdmin, signupAdmin,getallBlocks } = require('../controllers/adminController')
// const AdminHome = require('../models/announcementSchema')
const { createannouncement,getcomplain,deletenotification } = require('../controllers/notificationController')
const { getacceptedstuds } = require('../controllers/adminController')
const { getrejectedstuds } = require('../controllers/rejectedController')
const router = express.Router()

// login route
router.post('/adminlogin', loginAdmin)

// signup route
router.post('/adminsignup', signupAdmin)
router.get('/ad', getallBlocks)
router.post('/ann', createannouncement)
router.get('/comp', getcomplain)
//to display accepted
router.get('/acceptedstuds', getacceptedstuds)
router.get('/rejectedstuds', getrejectedstuds)
router.delete('/delnotification/:id', deletenotification)

module.exports = router
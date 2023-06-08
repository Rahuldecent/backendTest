const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');

// create a user
router.post('/register',userController.createUser);
//update a user
router.put('/update/:id',userController.updateUser);
// login user
router.post('/login',userController.loginUser);
module.exports = router;
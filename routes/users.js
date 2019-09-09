const express = require('express');
const router = express.Router();
const userController = require('../controllers/users');

router.post('/register', userController.create);            // Register new user
router.post('/authenticate', userController.authenticate);  // Authenticate user

module.exports = router;
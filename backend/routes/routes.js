const express = require('express');
const router = express.Router()
const authController = require("../controllers/authController");
const userController = require("../controllers/userController");
const auth = require("../middleware/authJwt");

router.post('/login', authController.signin);
router.post('/register', userController.create);
router.get('/users', auth,userController.getAll);
router.get('/users/:id', auth, userController.getById);
router.put('/update', auth, userController.update);

module.exports = router;  
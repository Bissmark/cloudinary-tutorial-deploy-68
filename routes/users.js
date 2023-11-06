const express = require('express');
const router = express.Router();
const upload = require('../utilities/multer');
const userController = require('../controllers/users');

// CREATE
router.post('/', upload.single('image'), userController.create);

// SHOW
router.get('/:id', userController.show);

module.exports = router;

const express = require('express');
const userCtrl = require('../../controllers/v1/usersCtrl');

const router = express.Router();

router.post('/create', userCtrl.createUser);
router.post('/update', userCtrl.updateUser);
router.post('/delete', userCtrl.deleteUser);
router.get('/get-all', userCtrl.getUsers);

module.exports = router;

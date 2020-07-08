const express=require('express');
const usersModel = require('../model/usersModel')
const { getUsers, postUsers } = require('../controllers/contUsers')
const router= express.Router();

router.get('/getUsers',getUsers)
router.post('/postUsers',postUsers)

module.exports = router;
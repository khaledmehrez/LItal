const express=require('express');
const usersModel = require('../model/usersModel')
const { getUsers, postUsers } = require('../controllers/contUsers')
const router= express.Router();

router.get('/users',getUsers)
router.post('/users',postUsers)

module.exports = router;
const express = require('express');
const HistoryModel = require('../model/historyModel.js')
const { getHistory, postHistory} = require('../controllers/controhistory')
const router = express.Router();


router.get('/getHistory', getHistory)

router.post('/postHistory', postHistory)



module.exports = router;
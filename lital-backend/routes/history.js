const express = require('express');
const HistoryModel = require('../model/historyModel.js')
const { getHistory, postHistory } = require('../controllers/controhistory')
const router = express.Router();


router.get('/', getHistory)

router.post('/', postHistory)

module.exports = router;
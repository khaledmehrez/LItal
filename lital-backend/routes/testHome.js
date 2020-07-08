const express=require('express');
const router= express.Router();
const path = require('path')
router.get('/',(req,res)=>{
   res.sendFile(__dirname + '/testHome.html')
})



module.exports=router;
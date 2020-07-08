const HistoryModel = require('../model/historyModel')
exports.getHistory =('/',async(req,res)=>{
    const Historydata = await HistoryModel.find()
     res.send(Historydata)
    
});

exports.getHistory= (async (req,res)=>{
    const Historydata = await HistoryModel.find()
     res.send(Historydata)
    
});

exports.postHistory =((req,res)=>{
   const Historydata= new HistoryModel (
        {
            name:req.body.name,
        role:req.body.role,
        nameAction:req.body.nameAction,
  
        date:req.body.date ,
        nameProduct:req.body.nameProduct
            
        }
    );
   
    Historydata.save().then(data=>{
        res.json(data)
    })
    
});
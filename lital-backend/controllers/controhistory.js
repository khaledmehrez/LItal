const ProductModel = require('../model/historyModel')
exports.getHistory =('/',async(req,res)=>{
    const Historydata = await HistoryModel.find()
     res.send(Historydata)
    
});

exports.postHistory =('/',(req,res)=>{
   new HistoryModel (
        {
   
            
        }
    );
   
    Historydata.save().then(data=>{
        res.json(data)
    })
    console.log(req.body)
});
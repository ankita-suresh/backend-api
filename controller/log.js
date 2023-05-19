const log = require('../models/log');

exports.getAllLog = async (req,res,next)=>{
    try{
      const [allLog] = await log.fetchAll();  
    //  console.log(allLog)
      res.status(200).json(allLog)
    

    }catch(err){
      if(!err.statusCode){
        err.statusCode = 500
      }
      next(err);

    }
};


exports.postLog = async (req,res,next)=>{
    try{
      const postResponse = await log.post(req.body);  
      
      res.status(201).json(postResponse);
    

    }catch(err){
      if(!err.statusCode){
        err.statusCode = 500
      }
      next(err);

    }
};
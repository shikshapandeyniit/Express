var express= require('express')
var update= express.Router();
var tour = require('../model/tourSchema')

update.put('/tour/:id',(req,res)=>{
	tour.findOneAndUpdate({ _id:req.params.id},
		{$set:{location:req.body.location}},
		(err,data)=>{
			if(err){
				console.log("error in put method")
			}else{
				console.log("put metod")
				res.json(data)
			}
		}
				)
})
module.exports= update;

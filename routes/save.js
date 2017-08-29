var express = require('express');
var save = express.Router();
var tour = require('../model/tourSchema')

save.post('/tour',(req,res)=>{
	var newTour= new tour();
	newTour.location = req.body.location;
	newTour.price = req.body.price;
newTour.save((err,data)=>{
	if(err)
	{
		console.log("error in post method")
	}
	else
	{
		console.log(data)
		res.json(data);
	}
	})
})
module.exports=save;
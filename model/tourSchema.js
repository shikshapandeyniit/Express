var mongoose= require("mongoose");
var Schema= mongoose.Schema;
var tourschema = new Schema({
	location :String,
	price:Number
})

module.exports = mongoose.model("tour",tourschema)
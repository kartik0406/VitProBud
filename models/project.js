var mongoose    =require("mongoose");
const user = require("./user");

var projectSchema = new mongoose.Schema({
title:String,
descrip:String,
technologies:String,
team:[
    {
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
],
max:Number,
need:Number,
owner:{
    id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    username:String
}
});
module.exports  =mongoose.model("Project",projectSchema);
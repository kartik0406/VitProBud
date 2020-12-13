var mongoose    =require("mongoose");
var appliedprojectSchema = new mongoose.Schema({
  
    id:String,
    title:String,
    name:String,
   userId:String

});

  module.exports  =mongoose.model("appliedproject",appliedprojectSchema);
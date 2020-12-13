var mongoose                 =require("mongoose");
var passportLocalMongoose    =require("passport-local-mongoose");

var userSchema = new mongoose.Schema({

projects:[
    {
        type:mongoose.Schema.Types.ObjectId,
        ref:"Project"
    }
],
appliedProjects:[
    {
        type:mongoose.Schema.Types.ObjectId,
        ref:"Project"
    }
],
username:String,
password:String,
about:String,
email:String,
institute:String,
language:String,
github:String,
linkedIn:String,
img:{image:Buffer,contentType:String,path:String}
});

userSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model("User",userSchema);


const mongoose= require("mongoose");
mongoose.connect("mongodb://localhost:27017/Sample",{useNewUrlParser:true},(err)=>{
    if(!err)
    {
        console.log(" MongoDb connected");
    }
    else{
        console.log("not connected");
    }
}
);
const Course= require("./course.model");
const mongoose= require("mongoose");
var courseSchema= new mongoose.Schema({

    CourseName: {
        type: String,
        requires:"Required"
    },
    CourseId:{
        type: String
    },
    CourseFee:{


        type: String
    }
});
mongoose.model("Course",courseSchema); // created a model for connection
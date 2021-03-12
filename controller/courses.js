
const express=require("express");
const mongoose= require("mongoose");
const router= express.Router();
const courseModel= mongoose.model("Course")// create model for course -> course is already define in model
router.get("/add", (req,res)=>{
    res.render("course-add")
}

);
router.post("/add", (req,res)=>{
    res.render("course-add")
    var course= new courseModel();
    course.CourseName=req.body.CourseName;
    course.CourseFee= req.body.CourseFee;
    
    course.save((err, doc)=>{
        if(!err)
        {
            res.redirect("/course/list");
        }
        else{
            res.send("error")
        }

    })


}

)
router.get("/list", (req, res)=>
{
    //var course= new courseModel();
    //course.CourseName="MSC";
    //course.CourseId="212";
    //course.CouseFee= "£1000";
    //course.save();


    courseModel.find((err, docs)=>{
        if(!err)
        {
            console.log(docs);
            res.render("list",  {data: docs})
    
        }
        else
        {
            res.send("not find data"); 
        }
    })
        
    
  
})
module.exports = router;
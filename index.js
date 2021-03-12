const connection= require("./model");
const express= require("express");
const expresshandlebars= require("express-handlebars");
const bodyparser= require("body-parser");
const path= require("path");
const app= express();
const coursecontroller= require("./controller/courses"); // import course controler
app.use(bodyparser.urlencoded({
    extended: true}));
    app.set('views', path.join(__dirname,'/views/')); //views setup with handlebars
    app.engine('hbs', expresshandlebars({
        extname:"hbs",
        
        defaultLayout: "mainlayout",
        layoutsDir: __dirname + "/views/layouts"


    }));
    app.set("view engine","hbs");

    app.get("/",(req,res)=>{

        //res.send('<h1>Hello Node</h1>');
        res.render("index",{})

    });
    app.use('/Course', coursecontroller);

    app.listen(3000, ()=>{
        console.log("server started");
    })

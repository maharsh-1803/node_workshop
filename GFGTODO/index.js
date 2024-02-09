// const express= require("express");
// const mongoose = require('mongoose');
// const app = express();

// app.listen(5000,(req,res)=>{
//     console.log("Sever is running on 5000");
// })

// mongoose.connect("mongodb://127.0.0.1:27017/glsnode",{
//     useUnifiedTopology:true
// }).then(()=>{
//     console.log("Database is connected")
// }).catch((err)=>{
//     console.log(err)
// })



const express = require('express');
const mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/glsnode");

const app=express();

app.listen(5000,()=>{
    console.log("hey server is up and alive");
});

// middlewares
app.use(express.json())
app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));
app.set("view engine", "ejs");

//routes
app.use(require("./routes/todos"));

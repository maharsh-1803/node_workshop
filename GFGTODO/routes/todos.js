const express = require('express');
const todo = require('../models/todo');
const routes = express.Router();

routes.get("/", async (req, res) => {
    const Todo = await todo.find();
    res.render("home", { todo: Todo })
});

routes.post("/add/todo", (req, res) => {
    const Todo = req.body.todo;
    const newTodo = new todo({ todo: Todo });
    newTodo.save().then(() => {
        console.log("item has been added");
        res.redirect("/");
    });
});

routes.get("/delete/todo/:_id",(req,res)=>{
    const {_id}=req.params;
    todo.deleteOne({_id}).then(()=>{
        console.log("deleted");
         res.redirect("/");
    })
})


module.exports = routes;
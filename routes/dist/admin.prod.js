"use strict";var path=require("path"),rootDir=require("../helper/path"),experss=require("express"),router=experss.Router(),posts=[];router.get("/add-posts",function(t,e,s){e.render("add-posts",{title:"Add Posts",path:"admin/add-posts"})}),router.post("/add-posts",function(t,e,s){posts.push({title:t.body.title}),e.redirect("/")}),exports.routes=router,exports.posts=posts;
const express=require('express')
const path=require('path')
//const ejs=require('ejs');
const mongoose=require('mongoose');
const BlogPost=require('./models/BlogPost');

mongoose.connect('mongodb://127.0.0.1/Blog_DB');

const doc = BlogPost.create({
    title:"처음 포스팅하는 블로그",
    body:"옛날에 금잔디 동산에 메기 같이 앉아서 놀던 곳"
});

console.log(doc);


const app=express();
app.set('view engine','ejs');
app.use(express.static("./public"));
app.listen(8080, ()=>{
    console.log('express server on port 8080...');
})
app.get("/",(req,res)=>{
    res.render("index");
});
app.get("/about",(req,res)=>{
    res.render(("about"));
});
app.get("/contact",(req,res)=>{
    res.render(("contact"));
});
app.get("/post",(req,res)=>{
    res.render(("post"));
});

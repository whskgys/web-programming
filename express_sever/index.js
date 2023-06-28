const express=require('express');
const path=require('path');

const app=express();
app.use(express.static("public"));

app.listen(3000, ()=>{
    console.log("express sever on port 3000");
});
app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"pages/homepage.html"))
    
})
app.get("/about",(req,res)=>{
    res.sendFile(path.join(__dirname,"pages/about.html"))
})
const express=require("express");
const app=express(); 
let port=3000;
app.set("view engine","ejs"); 


app.get("/",(req,res)=>{ 
    res.render("home.ejs");
});

app.listen(port,()=>{ 
    console.log(`listening on port ${port}`);
});
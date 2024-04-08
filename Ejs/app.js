const express=require("express");
const path=require("path"); 
const app=express(); 

const port=8080;  


app.use(express.static(path.join(__dirname,"public")));
app.set("view engine","ejs");
app.set("views", path.join(__dirname,"/views"));

 
app.get("/",(req,res)=>{ 
    res.render("home.ejs");
});  
 

app.get("/instagram/:username",(req,res)=>{  
    let instData=require("./data.json"); 
    let {username}=req.params;
    let data=instData[username];
    res.render("insta.ejs",{data});
});

// app.get("/rolldice",(req,res)=>{ 
//     let dinumber=Math.floor(Math.random()*10)+1;  
//     res.render("rolldice.ejs",{dinumber});

// });


app.listen(port,()=>{ 
    console.log(`Server listening on port ${port}`);
}); 



const express=require("express"); 
const app=express(); 

const port=8080; 

app.get("/register",(req,res)=>{ 
    res.send("Getting your Get response");
});

app.post("/register",(req,res)=>{ 
    res.send("Getting Your Post response");
});

app.listen(port,()=>{  
    console.log(`Listening server at port ${port}`);
});
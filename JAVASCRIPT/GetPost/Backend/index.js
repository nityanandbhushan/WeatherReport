const express=require("express"); 
const app=express();  
const port=8080; 
app.listen(port,()=>{ 
    console.log(`Listening to port ${port}`);
});  


//for any type of url data
app.use(express.urlencoded({extended:true}));  


 //for json file  
 app.use(express.json());



app.get("/register",(req,res)=>{  
    let{user,password}=req.query; 
    res.send(`standard GET response. Welcome ${user} and your password is ${password}`);
    
}); 


app.post("/register",(req,res)=>{  
    console.log(req.body);
    res.send("Standard POST response");
});
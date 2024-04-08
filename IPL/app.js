const express=require("express"); 
const { render } = require("ejs");

const app=express(); 
const path=require("path");



app.use(express.static(path.join(__dirname, 'public')));
app.set("views", path.join(__dirname, 'views'));
app.set("views engine", "ejs");



const port=3000;  

let posts=[
    {    
        id:"1a",
        username:"aman" ,
        content:"hi this is aman"
    },
    {    
        id:"2a",
        username:"kamil" ,
        content:"hi this is kamil"
        
    },
    {   
        id:"3a",
        username:"pirya" ,
        content:"hi this is priya"

    },
    {   
        id:"4a",
        username:"riya" ,
        content:"hi this is aman"

    }
]

app.get("/",(req,res)=>{ 
    // console.log("Perfect!!");
    res.send("request has been accepted");
});

app.get("/show",(req,res)=>{ 
    res.render("show.ejs",{posts});
}); 

app.get("/show/new",(req,res)=>{ 
    res.render("new.ejs");
});

app.post("/show",(req,res)=>{ 
    let { username, content } = req.body;
    push.posts({username,content});
    res.redirect("/show");
}); 

app.get("/show/:id",(req,res)=>{  
    let {id}=req.params; 
    let data=posts.find((p)=>id===p.id);
    res.render("individual.ejs",{data});
}); 

app.get("/show/:id/edit",(req,res)=>{  
    let id=req.params;
   console.log(id);
   res.send("request is accepted");

});

app.listen(port,()=>{  
    console.log(`Listening server at port${port}`); 

});
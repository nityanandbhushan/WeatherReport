const express=require("express"); 
const app=express(); 


let port=8080; 

app.listen(port,()=>{ 
    console.log(`Server listening on port ${port}`);
}); 


app.get("/",(req,res)=>{ 
    res.send("You are Welcome on Root Path");
});  

app.get("/search",(req,res)=>{ 
    let {q}=req.query; 
    console.log(q);
    // <h1>Your search query is: ${p}</h1>
    res.send(q);
});


app.get("/:username/:id",(req,res)=>{ 
    let {username,id}=req.params;  
    let code=`<h1>Welcome to @${username} and your id is ${id} </h1>`;
    res.send(code);
}); 
 

app.get("/apple",(req,res)=>{ 
res.send("You are on the Apple page");
}); 

app.get("/Banana",(req,res)=>{ 
    res.send("Welocome to Banana page");
});

app.get("*",(req,res)=>{ 
  res.send("So Sorry You are on the wrong page");  
});  




// app.use((req,res)=>{     
//     console.log("request has been accepted");
//     let vc='<h1>Simple </h1>';
//     res.send(vc);
// });

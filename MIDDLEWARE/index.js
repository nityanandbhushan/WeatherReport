const express=require("express");
const app=express();  
const ExpressError=require("./ExpressError");
 

//App.use Middleware

// app.use((req,res)=>{ 
//     let{query}=req.query;
//     console.log(query);
//     res.send("middleware finished");
//     console.log("hi, I am a middleware");
// }); 

 
//Using Next

// app.use((req,res,next)=>{ 
//     console.log("Hi, I am a middleware");
//     next();

   
// });

// app.use((req,res,next)=>{ 
//     console.log("hi this is 2nd middleware");
//     res.send("this response has sended by middleware");
//     next();
// });

// app.get("/radheji",(req,res)=>{ 
//     console.log("radhe radhe");
// });

// app.get("/",(req,res,next)=>{ 
//     res.send("Hi, I am root");
//     next();
// });

// app.get("/random",(req,res,next)=>{ 
//     res.send("this is a random page");
//     next();
// }); 


//logger
// app.use((req,res,next)=>{ 
//     req.responseTime=new Date().toUTCString();
//     console.log(req.method,req.path,req.responseTime,req.hostname);
//     next(); 
// });  

// app.use((req,res,next)=>{ 
//     // res.send("hellow my friend");
//     console.log("this is middleware");
//     next();
// });

// app.get("/random",(req,res)=>{ 
//     res.send("this is random route");
// });  

// app.get("/wrong",(res,req)=>{ 
//     res.send("this is wrong route");
// }); 

// app.use((req,res)=>{ 
//     res.send("You entered wrong path");
// });













// app.get("/",(req,res)=>{ 
//     res.send("successfull");
// }) 
// app.get("/wrong",(req,res)=>{ 
//     let max=90;
//     console.log(min);
// });

// app.get("/nice",(req,res)=>{
//     abcd=abcd
// });


// app.use((err,req,res,next)=>{ 
//    res.send(err);
//    console.log(next);
// }); 

// app.get("/err",(req,res)=>{ 
//     abcd=abcd;
// }); 

// app.use((err,req,res,next)=>{ 
//     cons
// })



//token api verification
app.use("/api",(req,res,next)=>{ 
    let{token}=req.query;

    if(token==="nityanand")
    { 
        next();
    }
    else
    { 
        throw new ExpressError(401,'AccessDenied!');
    }
});

app.use("/api",(req,res)=>{ 
    res.send("data");
});  


app.use((err,req,res,next)=>{  
    console.log("---------------Error---------------");
    next(err);

});







// app.use((req,res)=>{ 
//     res.status(400).send("page not found");
//     next();
// });






app.listen(8080,()=>{ 
    console.log("server listening to port 8080");
});
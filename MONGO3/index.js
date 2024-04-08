const express=require("express"); 
const app=express(); 
const mongoose=require("mongoose"); 
const path=require("path");  
const Chat=require("./Models/chat.js");
const methodOverride=require("method-override");
// const { faker } = require('@faker-js/faker');
app.use(methodOverride("_method"));






app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended:"true"}));


main()
.then(()=>{console.log("connection successful")})
.catch(err=>{console.log(err)}); 

async function main(){ 
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
} 

//root 
app.get("/",(req,res)=>{ 
    res.send("successfull");
}); 




//indexing
app.get("/chats", async (req,res)=>{ 
    let chats=await Chat.find();
    res.render("index.ejs",{chats});
}); 


//newchats & create 
app.get("/chats/new",(req,res)=>{ 
    res.render("newchats.ejs");
});   


//create Rout

app.post("/chats",(req,res)=>{ 
    let{from,to,msg}=req.body;
    let newChat=new Chat({ 
        from:from,
        to:to,
        msg:msg,
        created_at:new Date(),
    })
    newChat.save()
    .then((res)=>{ 
        console.log("chat was saved");
    })
    .catch((err)=>{ 
        console.log(err);
    }); 
    res.redirect("/chats");

});

//NEW-SHOW ROUTE
app.get("/chats/:id",async(req,res,next)=>{ 
    let {id}=req.params;
    let chat=await Chat.findById(id); 
    if(!chat){
        return next(new ExpressError(404,"Chat not Found or Deleted"));
    }
    res.render("edit.ejs",{chat});
});





//Edit Chat

app.get("/chats/:id/edit",async(req,res)=>{ 
    let {id}=  req.params;
    const chat= await Chat.findById(id);
    res.render("edit.ejs",{chat});
});  

//addNewChat
app.put("/chats/:id",async (req,res)=>{ 
     let{id}=req.params;
     let{msg}=req.body;
     console.log(msg);
     console.log(id);
     let updateChat=await Chat.findByIdAndUpdate(id,{msg});
     console.log(updateChat);
   
    // ,{runValidators:true,new:true} 
     res.redirect("/chats");
});


//Delete Chat

app.delete("/chats/:id", async (req,res)=>{ 
    let {id}=req.params; 
    await Chat.findByIdAndDelete(id); 
    res.redirect("/chats");
    
});




app.listen(8080,()=>{ 
    console.log("Server is listening on port 8080");
});




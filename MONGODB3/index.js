const express=require("express"); 
const mongoose=require("mongoose");
const path=require("path"); 
const Chat =require("./models/chat.js");
const app=express(); 
const port=3000;   
const methodOverride=require("method-override");


app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({ extended: true }));
app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");





async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/instagram');
};   


main()
.then(() => {console.log("connection is establish")})
.catch((err)=>{ 
console.log(err)
}); 




// let chat1=new Chat({ 
//     from:"NityaNand",
//     to:"Naina",
//     message:"helle naina",
//     creat_at:new Date(),

// }); 

// chat1.save()
// .then(()=>{ 
//     console.log("data has saved");
// }).catch((err)=>{ 
//     console.log(err);
// });


app.get("/",(req,res)=>{  
    res.send("req is accepted");
    console.log("connectin is establish");
}); 

app.get("/chats", async(req,res)=>{ 
    
    let data=await Chat.find(); 
   
    res.render("index.ejs",{data});

    // res.send("request accepted");
}); 

app.get("/chats/new",(req,res)=>{ 
    res.render("new.ejs");

}); 

app.post("/chats/new",(req,res)=>{ 
  let data=[{
    from:req.body.from,
    to:req.body.to,
    message:req.body.message,
    creat_at:new Date(),
  }]; 
  Chat.insertMany(data);
  res.redirect("/chats");

});  

app.get("/chats/:id/edit", async(req,res)=>{ 
    let {id}=req.params; 
    let data=await Chat.findById(id);
    // res.render("update.ejs");
    res.render("up.ejs",{data});
});  


app.patch("/chats/:id",(req,res)=>{ 
  let {msg}=req.body;
  let {id}=req.params;
  Chat.updateOne({id:id,message:msg});
  res.redirect("/chats");
});




app.listen(port,()=>{ 
    console.log(`Server is listening on port ${port}`);
});
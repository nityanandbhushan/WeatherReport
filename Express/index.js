const express=require("express"); 
const app=express();
console.log(app);

let port=3000;

app.listen(port,()=>{ 
    console.log(`app is listening on port ${port}`);
}); 

// app.use((req,res) => {
//     console.log("request was recived");
// }); 

app.get("/",(req,res)=>{ 
    res.send('you contact root path');
}) 
app.get("/apple",(req,res)=>{ 
    res.send('you contact apple path');
})
app.get("/banana",(req,res)=>{ 
    res.send('you contact banana path');
})

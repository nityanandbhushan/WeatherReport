const mongoose=require("mongoose"); 

const Chat =require("./models/chat.js"); 

async function main(){ 
    await mongoose.connect('mongodb://127.0.0.1:27017/instagram');
};

main() 
.then(()=>{ 
    console.log("data inserted into databases");
}).catch((err)=>{ 
    console.log(err);  
});



let chats=[
    {
        from:"aman",
        to:"joya",
        message:"hii zoya this aman",
        creat_at:new Date(),
    },
    { 
        from:"gaurav",
        to:"shruti",
        message:"hii shruti !! this is gaurava",
        creat_at:new Date(),
    },
    { 
        from:"priyanshu",
        to:"bubby",
        message:"hii bubby!! this is priyanshu",
        creat_at:new Date(),
    },
    { 
        from:"mushahid",
        to:"alisha",
        message:"hii alisha!! this is mushahid",
        creat_at:new Date(),
    },
    {
        from:"kashif",
        to:"antra",
        message:"hii antra !! this is kashif",
        creat_at:new Date(),
    },
];
Chat.insertMany(chats);
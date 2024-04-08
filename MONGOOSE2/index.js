const mongoose=require("mongoose"); 

main()
.then(() =>{
    console.log("Connection Stablish");
}).catch((err)=>{ 
    console.log(err);
});

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/flipcart');
}   


const amzbookSchema= new mongoose.Schema({ 
    title:{ 
        type:String,
        required:true,
    },
    author:{ 
        type:String,
        required:true,
    },
    price:{ 
        type:String,
        required:true,
    }
});  

const Book= mongoose.model("Book",amzbookSchema); 
let book1=new Book({ 
    title:"Mathematics XII",
    author:"RD Sharma",
    price:1200
}); 

book1.save()
.then((res)=>{ 
    console.log(res);
}).catch((err)=>{ 
    console.log(err);
});
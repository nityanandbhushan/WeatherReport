const mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/test");



main()
.then(()=>{ 
        console.log("connection successful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
} 



const userSchema=new mongoose.Schema({ 
        name:String,
        email:String,
        age:Number,
}); 

//COLLECTION

const User=mongoose.model("User",userSchema); //collection

// User.insertMany([ 
//         {name:"hulk",email:"hulk@yahoo.in",age:56,city:"califronia"},
//         {name:"natasha",email:"natasha@yahoo.in",age:41,city:"melborn"},
//         {name:"thor",email:"thor@yahoor.com",age:46,city:"asguard"},
// ]).then((res)=>{ 
//         console.log(res);
// });


//DOCUMENTS

// const user2= new User({ 
//         name:"Steve",
//         email:"steve@yahoo.in",
//         age:45,
// }) 
// user2
// .save()
// .then((res)=>{ 
//         console.log(res);
// }).catch((err)=>{ 
//         console.log(err);
// });


// User.find({age:{$gt:50}})
// .then((data)=>{  
//         console.log(data);
// }).catch((err)=>{  
//         console.log(err);
// });

// User.findOneAndUpdate({name:"hulk"},{age:990},{new:true})
// .then((res)=>{
//         console.log(res);
// }); 

User.deleteOne({_id:"654e3f8d676d3b565dc70143"})
.then((res)=>{ 
        console.log(res);
})
.catch((err)=>{ 
        console.log(err);
});

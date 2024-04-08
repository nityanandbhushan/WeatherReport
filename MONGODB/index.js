const mongoose=require('mongoose');  


main()
.then(()=>{ 
console.log("connection succesfull");
})
.catch(err => console.log(err));


async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
  } 

  const userSchema= new mongoose.Schema({ 
    name:String,
    email:String,
    age:Number
  }); 

  const Temp= mongoose.model("temp",userSchema);
//   const temp1=new Temp({name:"nityanand",email:"nitya@gmail.com",age:23}); 
const temp2=new Temp({name:"aman",email:"nitya@gmail.com",age:22}); 


  temp2.save().then((res)=>{ 
    console.log(res);
  }).catch((err)=>{ 
    console.log(err);
  });


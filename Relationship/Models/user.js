const mongoose=require("mongoose"); 
const {Schema}=mongoose;


main()
.then(()=>console.log("connection successful"))
.catch((err)=>console.log(err));

async function main(){ 
    await mongoose.connect('mongodb://127.0.0.1/relationDemo');
}  

const userSchema=new Schema({ 
    username:String,
    address:[ 
        {   id:false,
            location:String,
            city:String,
        },
    ],
});

const User=mongoose.model("User",userSchema);


const addUser=async ()=>{ 
    let user1=new User({
        username:"sherlockholmes",
        address:[{ 
            location:"221b Baker Street",
            city:"London"
        }],
    }); 

    user1.address.push({location:"P32 WallStreet",city:"London"});
    let result=await user1.save();
    console.log(result);
}

addUser();



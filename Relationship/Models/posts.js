const mongoose = require("mongoose");
const { Schema } = mongoose;


main()
    .then(() => console.log("connection successful"))
    .catch((err) => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1/relationDemo');
} 


const userSchema=new Schema({ 
    username:String,
    email:String
}); 

const postSchema=new Schema({ 
    content:String,
    likes:Number,
    user:{ 
        type:Schema.Types.ObjectId,
        ref:"User"
    }
});

const User=mongoose.model("User",userSchema); 
const Post=mongoose.model("Post",postSchema);

const addData=async ()=>{ 
    let user=await User.find({username:"rahul kumar"});
    let post2=new Post({ 
        content:"bye bye",
        likes:34
    }); 

    post2.user=user;
    await post2.save();
};

addData();


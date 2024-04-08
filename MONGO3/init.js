const mongoose = require("mongoose");
const Chat = require("./Models/chat");
// const {faker}=require('@faker-js/faker');


main()
    .then(() => {
        console.log("connection successful");
    })
    .catch((err) => {
        console.log(err);
    });
async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/fakewhatsppp");
} 


let createRandomUser=()=> {
    return [
        
       faker.internet.userName(),
       faker.internet.email(),
       faker.internet.password(),
       
    ];
}; 

// let data=[];
// for(let i=1;i<=100;i++){ 
//     data.push(createRandomUser());
// };

// let allChats=[
//     {
//         from: "nikhil",
//         to: "payal",
//         msg: "send me notes",
//         created_at: new Date(),
//     }, {
//         from: "nihal",
//         to: "roshani",
//         msg: "have you eat food",
//         created_at: new Date(),

//     }
//     , {
//         from: "aman",
//         to: "gaurav",
//         msg: "let play ludo",
//         created_at: new Date(),
//     },
//     {
//         from: "priyanshu",
//         to: "mushahid",
//         msg: "let go to the market",
//         created_at: new Date()
//     },
//     {
//         from: "sumit",
//         to: "kunna",
//         msg: "lets go to play cricket",
//         created_at: new Date()
//     },
//     {
//         from: "manish",
//         to: "kashif",
//         msg: "hii",
//         created_at: new Date()
//     },
//     {
//         from: "vivek",
//         to: "chandan",
//         msg: "call me",
//         created_at: new Date(),
//     },
// ]; 

Chat.insertMany(data);




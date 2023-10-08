// async function printHello(){ 
//     console.log("hello");
// }

async function greet(){ 
    // throw "some random error"; 
    return "hello";
}

// greet() 
// .then((result)=>{ 
//     console.log("data has printed",result);
// }) 
// .catch((err)=>{ 
//     console.log("data has not printed",err);
// }) 
let fun=async ()=>{ 
    // throw "data has not saved";
    return "data has saved";
} 
 
fun()
.then((result)=>{ 
console.log(result);
}) 
.catch((error)=>{ 
    console.log(error);
})
// function savetoDb(data){ 
//     return new Promise((resolve,reject)=>{ 
//         const intspeed=Math.floor(Math.random()*10)+1;
//         if(intspeed>5){ 
//             resolve();
//         }else{ 
//             reject();
//         }
//     })
// } 
// savetoDb("nityanand")
// .then(()=>{ 
//     console.log("data1 saved");
//     savetoDb("bhushan")
//     .then(()=>{ 
//         console.log("data2 saved in two times");
//     })
// }) 
// .catch(()=>{ 
//     console.log("data not saved");
// }) 











// function savetoDb(data){ 
//     return new Promise((resolve,reject)=>{ 
//         const intSpeed=Math.floor(Math.random()*10)+1; 
//         if(intSpeed>4){ 
//             resolve("Data saved in memory");
//         }else{
//             reject("Data not saved in memory");
//         }
//     })
// } 

// const request=savetoDb("nityanand"); 
// request.then((result)=>{ 
//     console.log("Data is saved into the memo",result); 
//     return savetoDb("bhushan")
// })  
// .then((result)=>{ 
//     console.log("second data saved in the memory",result); 
//     return savetoDb("nand");
// }) 
// .then((result)=>{ 
//     console.log("third data saved into the memory",result);
// })
// .catch((result)=>{ 
//     console.log("Data not saved into the memory",result);
// }) 



const head=document.querySelector("h1");
function changeColor(color,delay){ 
    return new Promise((resolve,reject)=>{
        setTimeout(()=> {  
            head.style.color=color; 
            resolve("color change");
        },delay);
    })
} 
changeColor("red",1000)
.then(()=>{ 
    console.log("color change in red"); 
    return changeColor("green",1000)
})  
.then(()=>{ 
    console.log("color change in green"); 
    return changeColor("blue",1000)
}) 
.then(()=>{ 
    console.log("color change in blue");
})
.catch(()=>{ 
    console.log("Data not saved into the memory",result);
}) 

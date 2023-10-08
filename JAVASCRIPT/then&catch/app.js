

// function savetoDb(data){   

//     return new Promise((success,failure)=>{
//         let internetSpeed=Math.floor(Math.random()*10) +1;  
//         if(internetSpeed>5){ 
//             success("data saved");
//         }else{ 
//             failure("Weak connection data not saved");
//         }
//     })         
// }   

// let request=savetoDb("nityanand"); 
// request.then(()=>{ 
//     console.log("promise is completed"); 
//     console.log(request.Promise[1]);
// }) 
// .catch(()=>{ 
//     console.log("Promise are not completed"); 
//     console.log(request);
// }) 

// function savetoDb(data){ 
//     return new Promise((resolve,reject)=>{  
//         const intspe=Math.floor(Math.random*10)+1;  
//         console.log(intspe);
//         if(intspe>4){  
//             resolve("data is saved");  
//         } else{ 
//             reject("data is not save");
//         }
//     });
// } 
// let request=savetoDb("nityanad"); 
// request.then(()=>{ 
//     console.log("successfull saved data");
// }) 
// .catch(()=>{ 
//     console.log("successfull not saved data into the database");
    
// }); 

const hone=document.querySelector("h1"); 

// hone.style.color="red"; 
// setTimeout(()=>{ 
//     hone.style.color="green";
// },2000);
 

// setTimeout(()=>{ 
//     hone.style.color="blue"; 
// },2000);


 

// function changeTheColor(color,delay){  
//     setTimeout(()=>{ 
//         hone.style.color=color;
//     },delay);

// } 
// changeTheColor("red",1000);
// changeTheColor("blue",2000);
// changeTheColor("green",3000);
// changeTheColor("pink",4000);
// changeTheColor("yellow",5000); 

// function changeTheColor(color,delay,nextChangeColor){  
//     setTimeout(()=>{ 
//         hone.style.color=color; 
//         nextChangeColor();
//     },delay);

// }  

// changeTheColor("red",1000,
// ()=>{ 
//     changeTheColor("green",2000,
//     ()=>{ 
//         changeTheColor("yellow",3000);
//     });
// });
  
// function savetoDb(data,success,failure){ 
//     const intspeed=Math.floor(Math.random*10)+1; 
//     if(intspeed>3){ 
//         success();
//     }else{ 
//         failure();
//     }
// } 

// savetoDb("nityanand",()=>{ 
//     console.log("data is save successfully");

// },()=>{ 
//     console.log("data not save successfully");
// })
 

function savetoDb(data){ 
    return new Promise((resolve,reject)=>{ 
        const intSpeed=Math.floor(Math.random()*10)+1; 
        if(intSpeed>4){ 
            resolve();
        }else{ 
            reject();
        }
    })
} 
const request=savetoDb("nityanand"); 
request.then(()=>{ 
    console.log("data save into the memory");
}) 
.catch(()=>{ 
    console.log("data not save successfull into the memory");
})



//CallBack Hell

// h1=document.querySelector("h1"); 

// function changeColor(color,delay,nextColorChange){  
//     setTimeout(()=>{ 
//         h1.style.color=color;
//         if(nextColorChange)nextColorChange();
//     },delay)
   
// }

// changeColor("red",1000,()=>{ 
//     changeColor("blue",1000,()=>{  
//         changeColor("green",1000);

//     }); 

// }); 



//  function saveData(data,success,failure){
//     let interNsped=Math.floor(Math.random)*10 +1; 
//     if(interNsped>4){ 
//         success(data);
//     }else{ 
//         failure();
//     }
//  } 


//  saveData("Apna College",
//  ()=>{ 
//     console.log("success: your data was saved");
//     saveData("hello world",
//     ()=>{  
//         console.log("success2: data2 was saved");
//         saveData("nityanand",
//         ()=>{ 
//             console.log("data saved in nityanad folder")
//         },
//         ()=>{ 
//         console.log("Data not saved nityanand bhushan folder");
//         })
//     },
//     ()=>{ 
//         console.log("failure2: weak connection");
//     })
//  },
//  ()=>{ 
//     console.log("Weak Connection, data not saved");
//  })


// function saveData(data){ 

//     return new Promise((success,failure)=>{ 
//         let interNsped=Math.floor(Math.random)*10 +1;
//         if(interNsped>4){ 
//             success();
//         }else{ 
//             failure();
//         }
//     });
//  } 

 


let jasonRes='{"fact":"One reason that kittens sleep so much is because a growth hormone is released only during sleep.","length":96}'

console.log(jasonRes); 
let validRes=JSON.parse(jasonRes); 
console.log(validRes.length);


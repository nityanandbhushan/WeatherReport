// function savetoDb(data){  
//      let internetSpeed=Math.floor(Math.random()*10 +1); 


//      if(internetSpeed>5){ 
//         console.log(`Your data was saved ${data}`);
//         //console.log("Your data was saved",data);

//      }else{ 
//         console.log("Weak connection data not saved");
//      }
    
// } 
// savetoDb("Nityanand Bhushan"); 

//Above code is the simple code for execute the data  
 


//  function savetoDb(data,success,failure){  
//          let internetSpeed=Math.floor(Math.random()*10 +1); 
    
//          if(internetSpeed>5){  
//             success();
//          }else{  
//             failure();
            
//          }
        
//     }   
    
//     savetoDb("nityanand",
//     ()=>{ 
//         console.log("success1:Your data was saved"); 
//         savetoDb("bhushan",
//         ()=>{ 
//             console.log("success2:data was saved 2 times") 
//             savetoDb("choudhary",
//             ()=>{ 
//                 console.log("Success3:Data had been changed");
//             },()=>{ 
//                 console.log("Failure3:Weak connection data is not save");
//             })
//         },()=>{ 
//             console.log("failure2:Weak connection data not saved");
//         })
//     },()=>{ 
//         console.log("failure1:Weak Connection data was not saved");
//     }); 



function savetoDb(data){   

    return new Promise((success,failure)=>{
        let internetSpeed=Math.floor(Math.random()*10) +1;  
        if(internetSpeed>5){ 
            success("data saved");
        }else{ 
            failure("Weak connection data not saved");
        }
    })         
}   

let request=savetoDb("nityanand"); 
request.then(()=>{ 
    console.log("promise is completed"); 
    console.log(request);
}) 
.catch(()=>{ 
    console.log("Promise are not completed"); 
    console.log(request);
})
 
    // savetoDb("nityanand",
    // ()=>{ 
    //     console.log("success1:Your data was saved"); 
    //     savetoDb("bhushan",
    //     ()=>{ 
    //         console.log("success2:data was saved 2 times") 
    //         savetoDb("choudhary",
    //         ()=>{ 
    //             console.log("Success3:Data had been changed");
    //         },()=>{ 
    //             console.log("Failure3:Weak connection data is not save");
    //         })
    //     },()=>{ 
    //         console.log("failure2:Weak connection data not saved");
    //     })
    // },()=>{ 
    //     console.log("failure1:Weak Connection data was not saved");
    // }); 



 

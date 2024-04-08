

// fetch(url)
// .then((response)=>{  
//     console.log(response);
//     return response.json();
// })  
// .then((res)=>{ 
//     console.log(res.fact);
//     // return 
//     return fetch(url);
// })
// .then((resp)=>{ 
//     return resp.json();
// })
// .then((fac)=>{ 
//     console.log(fac.fact);
// })
// .catch((error)=>{  
//     console.log(error);
// })  

let url="https://catfact.ninja/fact"; 

async function getFetchData(){ 
    try{ 
    let respons=await fetch(url); 
    let data=await respons.json(); 
    console.log(data.fact);

    } 
   catch(error){ 
    console.log(error); 

   } 
   console.log("bii");

    
}  
getFetchData();





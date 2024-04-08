
let bttn=document.querySelector("button"); 
let para=document.querySelector("p");
let bttn2=document.querySelector("#btn2");

let url="https://catfact.ninja/fact"; 

async function getF(){ 

    let res= await axios.get(url); 
    let facts=res.data.fact;
    bttn.addEventListener("click",function(){   
        para.innerText=facts;
    })
    
} 
getF(); 


bttn2.addEventListener("click",function(){ 
    afterRefresh();
})

async function afterRefresh(){  
    para.innerText=" ";
    let res= await axios.get(url); 
    let facts=res.data.fact;
    para.innerText=facts;
    
}


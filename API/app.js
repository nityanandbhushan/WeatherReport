let btton=document.querySelector("button"); 
btton.addEventListener("click" , async ()=>{ 
    let get= await getFacts(); 
    let para=document.querySelector("p"); 
    para.innerText=get; 
});

let url="https://catfact.ninja/docs/api-docs.json"; 

async function getFacts(){  
    try{ 
        let res= await axios.get(url);  
        return res.data.fact;
    } 
    catch(e){ 
        console.log("finding some error",e); 
        return " No fact Found";

    }
}  



const hthree=document.querySelector("h3"); 

hthree.style.color="red"; 

function changeColor(color,delay){ 
    return Promise((resolve,reject)=>{ 
        setTimeout(()=>{ 
            hthree.style.color=color;
        },delay) 
        resolve();
        
    }) 
}  

await changeColor("green",1000);
await changeColor("pink",2000)
let bttn=document.querySelector("#btn1"); 
let bttn2=document.querySelector("#btn2");

let img=document.querySelector("img");

let url="https://dog.ceo/api/breeds/image/random"; 


bttn.addEventListener("click",function(){ 
    getF();    
})

async function getF(){ 
    try{ 
        let res= await axios.get(url); 
        let facts=res.data.message;
        img.setAttribute("src",facts);

    }catch(error){  
        console.log(error);
    } 
} 
bttn2.addEventListener("click",function(){ 
    afterRefresh();
})

async function afterRefresh(){  
    try{ 
        let res= await axios.get(url); 
        let facts=res.data.message;
        img.setAttribute("src",facts);

    }
    catch(error){ 
        console.log(error);
    }
}



let url="http://universities.hipolabs.com/search?name="; 
let country="nepal";  


let input=document.querySelector("#input");

let button=document.querySelector("button"); 

button.addEventListener("click", async ()=>{ 
    let country=input.value;
    getName(country);

})

async function getName(country){ 
    let res= await axios.get(url +country); 
    console.log(res);
}

getName();
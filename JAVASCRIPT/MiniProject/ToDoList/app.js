let ul=document.querySelector('ul');
let inpt=document.querySelector('input'); 
let bttn=document.querySelector('button'); 
bttn.addEventListener('click',function(){ 

    let item=document.createElement("li");
    item.innerText=inpt.value;
    
      
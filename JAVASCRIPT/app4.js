let bttn=document.querySelector('button'); 
// bttn.addEventListener('dblclick',function(){  
//     console.log('nitya');

// }); 
// bttn.addEventListener('click',changeColor);
// function changeColor(){ 
//     color='red';
// } 
// bttn.addEventListener('click',function(){  
//     bttn.style.color='red';

// }); 
// let box=document.querySelector('.box'); 
// box.addEventListener('mouseenter',function(){  
//     console.log('hover on box');

// });  
// bttn.addEventListener('click',function(){ 
//     this.style.backgroundColor='red';

// }) 
// let inpt=document.querySelector("ipt"); 
// inpt.addEventListener('click',function(){
//     console.log('button clicked'); 

// })  
// let input=document.querySelector("input");

// input.addEventListener('keydown',function(){  
//     // console.log(event);
//     console.log('button clicked');
// }) 
let form =document.querySelector("form"); 
form.addEventListener("submit",function(event){ 
    event.preventDefault();
    let inpt=document.querySelector("#typehere");
    let para=document.querySelector('p');

    // let pass=document.querySelector("#password");
    // console.log(pass.value);  
    para.innerText=inpt.value;

    console.log(inpt.value);
})

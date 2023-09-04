// <!-- ------------Generating RANDOM COLOR COMBINATION----------- -->
let bttn=document.querySelector("button");
bttn.addEventListener("click",function(){  
  let h3=document.querySelector("h1"); 
  let randomColor=getRandomColr();
  h3.innerText=randomColor;
  let parag=document.querySelector('p'); 
  parag.style.backgroundColor=randomColor;
}); 
function getRandomColr(){ 
  let red=Math.floor(Math.random()*255);
  let green=Math.floor(Math.random()*255);
  let blue=Math.floor(Math.random()*255);
  let color=`rgb(${red},${green},${blue})`;
  return color;
} 



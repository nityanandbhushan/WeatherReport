setTimeout(()=>{ 
    console.log("THIRD ");
},2000)  

//This setTimeout Functoin will go firstly on browser stack 
//after end of the delay browser send this setTimeout function to the top of the stack and 
//js call stack execute the top of the function

console.log("FIRST");
//Firstly execute this line by javascript 

setTimeout(()=>{ 
    console.log("FOURTH");
},2000)  
//This setTimeout Functoin will go firstly on browser stack 
//after end of the delay browser send this setTimeout function to the top of the stack and 
//js call stack execute the top of the function


console.log("SECOND");
//Firstly execute this line by javascript 


let hthree=document.querySelector('h3'); 
let bdy=document.querySelector('body');  
let colrAry=["red","yellow","blue","green"];

let gameSeq=[]; 
let userSeq=[];

let level=0;
let start=false;

bdy.addEventListener('click',function(){ 
    if(start==false){ 
        start=true; 
        levelUp();
    }  
}) 

function bttnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){ 
        btn.classList.remove("flash");
    },150)
} 
function levelUp()
{   
    level++; 
    hthree.innerText=`Level ${level}`;

    let randColId=Math.floor(Math.random() *3);  
    let randColor=colrAry[randColId];
    let randmBtn=document.querySelector(`.${randColor}`)
    gameSeq.push(randColor);
    console.log(gameSeq);
    bttnFlash(randmBtn);
}   


function userPreBtnFla(btn){
    btn.classList.add("usrFlash");
    setTimeout(function(){ 
        btn.classList.remove("usrFlash");
    },150)
} 


function bttnPress(){ 
    let btn=this;
    // console.log(this); 
    userPreBtnFla(btn); 
   let  usrColor=btn.getAttribute("id");
   console.log(usrColor);
   userSeq.push(usrColor);
   checkAns();
   


} 

let allBtn=document.querySelectorAll('.box'); 

for(btn of allBtn){ 
    btn.addEventListener('click',bttnPress);
}  


function checkAns(){ 
    // console.log("Curr Level is:",level); 
    let idx=level-1;
    if(userSeq[idx]===gameSeq[idx]){ 
        console.log("Same Value");
    }else{ 
        hthree.innerText="Game over! Press any key to start.";
    }
}


let hthree=document.querySelector("h3"); 
let body=document.querySelector("body");  
let colrAry=["red","yellow","blue","green"];

let gameSeq=[]; 
let userSeq=[];

let level=0;
let start=false;
document.addEventListener('click',function(){ 
    if(start==false){ 
        start=true; 
        levelUp();
    } else{ 
        reset();
    }  
});  

function levelUp()
{ 
    userSeq=[];
    level++; 
    hthree.innerText=`Level ${level}`;


    let randColId=Math.floor(Math.random()*3);  
    let randColor=colrAry[randColId];
    // let randmBtn=document.querySelector(`.${randColor}`); // testing period
    gameSeq.push(randColor);
    console.log(gameSeq);
    bttnFlash(randmBtn);
}   


function bttnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){ 
        btn.classList.remove("flash");
    },150);
}   


function bttnPress(){  
    let btn=this;
    userPreBtnFla(btn); 
   usrColor=btn.getAttribute("id");
   userSeq.push(usrColor);
   checkAns(userSeq.length-1);
} 



function userPreBtnFla(btn){
    btn.classList.add("usrFlash");
    setTimeout(function(){ 
        btn.classList.remove("usrFlash");
    },150);
} 

function checkAns(idx){ 
    if(userSeq[idx]===gameSeq[idx]){ 
        if(userSeq.length == gameSeq.length){  
            setTimeout(levelUp,1000)
        }
    }else{ 
        hthree.innerHTML=`Game Over! Your score was ${level} <b> Press any Key to Start the game! </b>`; 
        
        document.querySelector('body').style.backgroundColor='red';
        setTimeout(function(){ 
            document.querySelector('body').style.backgroundColor='white';
        },150);    
        
    }  
} 

let allBtn=document.querySelectorAll(".box"); 
for(btn of allBtn){ 
    btn.addEventListener("click",bttnPress);
}  


function reset(){  
    start=false;
    gameSeq=[]; 
    userSeq=[]; 
    level=0;
}


let body=document.querySelector("body"); 
let h3=document.querySelector("h3");
let colorArr=["red","blue","yellow","green"];
let red=document.querySelector('.red');

let gameSeq=[]; 
let userSeq=[];

 
let level=0;
let start=false;
body.addEventListener('keypress',()=>{ 

    if(start==false){ 
        start==true;
        levelup();
        
       
    }
});  

function flashBttn(color){ 
    color.classList.add("flash");
    setTimeout(function(){  
        color.classList.remove("flash");
    },300)
}

function levelup(){  
    level++;
    h3.innerText=`Level ${level}`;

    let flashColr=Math.floor(Math.random()*3); 
    let colorIndex=colorArr[flashColr];
    let randbtn=document.querySelector(`.${colorIndex}`);
    gameSeq.push(colorIndex);
    flashBttn(randbtn);
}  



function bttnFlashByuser(usrFlash)
{ 
    usrFlash.classList.add("userFlash");
    setTimeout(function(){  
        usrFlash.classList.remove("userFlash")
    },300);
}

function checkAns(){ 
    let indx=level-1; 
    if(userSeq[indx]===gameSeq[indx]){ 
        
    }


}

function btnPress(){
    let btn=this; 
    bttnFlashByuser(btn);
    usrColor=btn.getAttribute("id");
    userSeq.push(usrColor);

    checkAns();
} 

let allBtns=document.querySelectorAll(".box"); 
for(btn of allBtns){ 
    btn.addEventListener("click",btnPress);
}
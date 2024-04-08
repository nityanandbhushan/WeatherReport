let clutter = " ";
let score = 10;

let colorArr = ["red", "yellow", "green", "blue"];
let colorInx = " ";

for (let i = 1; i < 181; i++) {
    let rv = Math.floor(Math.random() * 10 + 1);
    clutter += `<div class="bubble"> 
    <h1>${rv}</h1></div>`;

}



document.querySelector(".btop").innerHTML = clutter;
let bubble = document.querySelector(".bubble");



document.querySelector("#btop").addEventListener("click",function(dets){ 
    console.log(dets.target);
})



let tcount=60; 
function runTimer(){ 
    let time=setInterval(function(){ 
        if(tcount>0){ 
            tcount--; 
            document.querySelector("#TimeCoutn").textContent=tcount;
        } else{ 
            clearInterval(time);
        }
   
    },1000);
      
    

} 
runTimer();





//ScoreIncreasing 

function increasing(){ 
    score+=10; 
    document.querySelector("#score").textContent=score;

} 

//Hit Case 

function hitNum() {

    let htrn = Math.floor(Math.random()*10+1);
    document.querySelector("#hitnum").textContent = htrn;
}

hitNum();




































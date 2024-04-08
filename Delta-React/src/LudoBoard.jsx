import { useState } from "react";
export default function LudoBoard(){ 
    let [moves,setMoves]=useState({blue:0,yellow:0,green:0,red:0});
    console.log("re-render");
    let update=()=>{
        setMoves((preMoves)=>{ 
            return {...preMoves,blue:preMoves.blue+1};
        });  
    };
   return( 
    <div>
    <div><p >Blue Moves={moves}</p>
     <button onClick={update} style={{backgroundColor:"blue"}}>+1</button></div>
     <div><p> Yellow Moves=2</p>
     <button style={{backgroundColor:"yellow"}}>+1</button></div>
     <div><p>Green Moveves=2</p>
     <button style={{backgroundColor:"green"}}>+1</button></div>
     <div>
     <p>Red Moves=2</p>
     <button style={{backgroundColor:"red"}}>+1</button>
     </div>
    </div>
   ) 
}
import { useState } from "react";

export default function LikeButton(){ 
    let [like,setLike]=useState(false); 

    function isLike(){ 
        setLike(!like);
    }
    let styles={ 
        color:"purple",
    }
    return( 
         <div> 
            <p onClick={isLike}>
           {like?(<i style={styles} className="fa-regular fa-heart"></i>):(<i style={styles} className="fa-solid fa-heart"></i>)}
            </p>
         </div>
    );
} 

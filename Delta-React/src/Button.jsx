
function work(event){ 
    console.log(event); 
        console.log("hellow"); 
}
function printBye(){ 
    console.log("Bye!!");
}
export default function Button(){ 
    return( 
        <>
        <button onClick={work}>Click Me!</button>
        <p onMouseOver={printBye}>Lorem ipsum dolor sit amet consectetur 
        adipisicing elit. Iusto itaque, architecto, accusantium iure eveniet necessitatibus, 
        tempore delectus nisi maiores laborum quibusdam sint repellat sapiente iste.</p>
        </>
    )
}
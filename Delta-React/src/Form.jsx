
function handling(event){ 
    console.log("Form has submitted");
    event.preventDefault();
}

export default function Form(){ 
    return( 
        <form>
            <input  onSubmit={handling} type="text" placeholder="enter something here" />
            <button >Submit</button>
        </form>
    )
}
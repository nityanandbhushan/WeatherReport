import Product from "./Product";
import "./ProductTab.css";

function ProductTab(){
    return( 
        <div >
         <h1><b>Blockbuster Deals | Shop Now</b></h1>
         <div className="productTab">
         <Product idx={0}/>
         <Product idx={1}/>
         <Product idx={2}/>   
         </div>
        </div>
    );
} 

export default ProductTab;
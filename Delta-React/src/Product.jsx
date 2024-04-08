import "./Product.css";
import ProductPrice from "./ProductPrice";
function Product(idx){ 
    let title=["Logistic MX Master","Apple Pencil(2nd Gen)","Zebronics"];
    let description=["8,000","inituitive Surface","designed for iPad Pro"];
    let oldP=[2323,3434,3434];
    let newP=[1223,2345,2344];
   
    return( 
        <div className="product">
          <p>{title[idx]}</p>
          <p>{description[idx]}</p>
           <ProductPrice oldPrice={oldP[idx]}  newPrice={newP[idx]}/>
        </div>
    )
} 
export default Product;
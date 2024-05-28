import React from "react";
import WomensProduct from "./WomensProduct";
import ProductCard from "./ProductCard";


export default function Womens(){
    const map = WomensProduct.map(product => {
        return <ProductCard key={product.id}  product={product} />;
     })
     console.log(WomensProduct)
    return(
        <div>
            <h1 className="headline">Womens</h1>
            <div className="products">
                {map}
            </div>
        </div>
    )
}
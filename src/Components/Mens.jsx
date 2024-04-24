import React from "react";
import "../Styles/Mens.css"
import ProductCard from "./ProductCard";
import MensProduct from "./MensProduct";

export default function Mens() {

 const map = MensProduct.map(product => {
    return <ProductCard key={product.id}  product={product} />;
 })
    

 return (
    <div>
      <h1 className="headline">Mens</h1>
      <div className="products">{map}</div>
        
    
    </div>
 )
}
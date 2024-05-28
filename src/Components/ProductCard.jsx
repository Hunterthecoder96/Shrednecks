import React,{useContext,useState} from "react";
import {UserContext} from "../Context/UserProvider";
import "../Styles/ProductCard.css"

export default function ProductCard(props){
const {name, image, description,price}= props
const [showAddedToCart, setShowAddedToCart] = useState(false);

const{addToCart}=useContext(UserContext)
const handleAddToCart =()=>{
    addToCart(props)
    setShowAddedToCart(true);
    
}


    return (
        
            <div className="product-container">
            <div className="product-card">
     <div className="product-image">
         <img className="product-image" src={props.product.image} alt="product image" />
     </div>
     <div className="product-details">
         <h2 className="product-title">{props.product.name}</h2>
         <p className="product-description">{props.product.description}</p>
         <p className="product-price">${props.product.price}</p>
         <button className="add-to-cart-button" onClick={handleAddToCart}>Add to Cart</button>
         {showAddedToCart && (
            <p className="added-to-cart-message">Added to Cart</p>
          )}
     </div> 
    </div>
    </div>
        )
     
}
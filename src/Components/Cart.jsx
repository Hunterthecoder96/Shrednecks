import React,{useContext} from "react";
import { UserContext } from "../Context/UserProvider";
import "../Styles/Cart.css"


export default function Cart(props){
    const {cartItems,setCartItems}= useContext(UserContext);
    const{name}=props;

 const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + parseFloat(item.product.price), 0);
  };

  const totalPrice = calculateTotal();
  console.log('Total price:', totalPrice);

  console.log(cartItems)
  
    return (
        <div className="cart-container">
          <div>
            <h1>Cart</h1>
          </div>
          <div className="cart">
            {cartItems.map((item,index) => (
              <div key={index}>
                <h3>{item.product.name}</h3>
                <p>Price: ${item.product.price}</p>
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            ))}
          </div>
          <div>
            <h2>Total: ${calculateTotal()}</h2>
          </div>

          <div>
            <button>Checkout</button>
          </div>
          </div>
     )
}

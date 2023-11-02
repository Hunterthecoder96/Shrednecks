import React,{useState} from "react";

export const UserContext=React.createContext()

export default function UserProvider({children}){
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (item) => {
        setCartItems([...cartItems, item]);
     };

     return(
        <UserContext.Provider
        value={{
        cartItems,
        addToCart
        }}
        >
         {children}
        </UserContext.Provider>
     )
}
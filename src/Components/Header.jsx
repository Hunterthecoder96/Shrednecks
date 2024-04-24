import { Link } from "react-router-dom";
import "../Styles/Header.css"
import Logo from "../assets/IMG_0536.jpg"
import {RiShoppingCart2Fill} from "react-icons/ri"


export default function Header(){

    return(
        <div className="Header-container">
            <Link className="link" to="/accessories">
                <p>Accessories</p>
            </Link>
            
            <Link className="link"to="/mens">
            <p>Mens</p>
            </Link>
            <Link to="/"><img className="logo" src={Logo} alt="Logo"/></Link>
            
            <Link className="link"to="/womens"> 
            <p>Womens</p>
            </Link>
           <Link className="link" to ="/cart">
            <p>Cart</p>
            </Link>
            <RiShoppingCart2Fill />
            

        </div>
    )
}
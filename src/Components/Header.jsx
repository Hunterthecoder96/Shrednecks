import { Link } from "react-router-dom";
import "../Styles/Header.css"
import Logo from "../assets/IMG_0536.jpg"
import { RiShoppingCart2Fill } from "react-icons/ri"

export default function Header() {
    return (
        <div className="Header-container">
            <div className="nav-links">
                <Link className="link" to="/accessories">
                    <p>Accessories</p>
                </Link>
                <Link className="link" to="/mens">
                    <p>Mens</p>
                </Link>
                <Link className="link" to="/womens">
                    <p>Womens</p>
                </Link>
                <Link className="link" to="/Recipes">
                    <p>Recipes</p>
                </Link>
                <Link className="link" to="/cart">
                    <RiShoppingCart2Fill className="cart-icon" />
                    <p>Cart</p>
                </Link>
            </div>
            <Link to="/"><img className="logo" src={Logo} alt="Logo" /></Link>
        </div>
    )
}

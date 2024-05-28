import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Recipes.css";

export default function Recipes() {
    return (
        <div className="container">
            <h1>Recipes</h1>
            <div className="recipe-selection">
                <div className="menu-container">
                    <Link to="/MeatRecipes"><h2>Meat</h2></Link>
                </div>
                <div className="menu-container">
                    <Link to="/SeafoodRecipes"><h2>Seafood</h2></Link>
                </div>
            </div>
        </div>
    );
}

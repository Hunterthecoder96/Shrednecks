import React from "react";
import { Link } from "react-router-dom";
import "../Styles/FoodList.css"; 

export default function Seafood() {
    return (
        <div className="recipe-container">
            <h1>Seafood Recipes</h1>
            <div className="cards-container">
                <div className="card">
                    <Link to="/RedfishFilla">
                        <img src="https://via.placeholder.com/300x200" alt="Redfish Filla" className="card-image" />
                        <h2>Redfish Filla</h2>
                        <p>Delicious and easy to prepare redfish recipe.</p>
                    </Link>
                </div>
                <div className="card">
                    <Link to="/TroutCakes">
                        <img src="https://via.placeholder.com/300x200" alt="Trout Cakes" className="card-image" />
                        <h2>Trout Cakes</h2>
                        <p>Try these amazing trout cakes for a tasty meal.</p>
                    </Link>
                </div>
                <div className="card">
                    <Link to="/FishDip">
                        <img src="https://via.placeholder.com/300x200" alt="Fish Dip" className="card-image" />
                        <h2>Smoked Fish Dip</h2>
                        <p>Perfect appetizer or snack</p>
                    </Link>
                    </div>

                    <div className="card">
                    <Link to="/Cobia">
                        <img src="https://via.placeholder.com/300x200" alt="Fish Dip" className="card-image" />
                        <h2>Miso Butter-Basted Cobia with Summer Succotash</h2>
                        <p>For the sight casters who want to wow their friends while showing photos of their catch</p>
                    </Link>
                    </div>
            </div>
        </div>
    );
}

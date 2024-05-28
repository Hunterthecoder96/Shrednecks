import React from "react";
import "../MeatRecipes/SeperateRecipes.css"

export default function PorkTenderloin(){

    return(

        <div className="recipe-container">
            <header className="recipe-header">
                <h1>Redfish-Filla</h1>
                <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh9hu4cLWUzZYbMFMX-swVyF19tmY9ihRrEM6zh7P4HsvWhuukBjJV_4xKijyz1SmUtLd_Y5MnubZWfMPACme4Shd-cih_Ky3aNJ78qTkhLvYOHxQc6zWJokZDqvng1u7ozwaAXSZR1DYM/s1600/fish+nuggets+2.jpg" className="recipe-image"></img>
            </header>
            <p>This recipe is very simple and so delicious, and is able to be used on a variety of different fish.  In our area it is preffered to be used on redfish since that is the most common fish in our area.  This recipe can be served as nuggets or the preffered method is fish tacos.  This recipe is garunteed to wow whoever you feed it to.</p>
            <div className="recipe-content">
                <section className="recipe-info">
                    <h2>Ingredients</h2>
                    <ul>
                        <li>fillets of redfish </li>
                        <li>4-6 eggs</li>
                        <li>Chef Pauls Redfish Magic Blackening seasoning</li>
                        <li>2 cups flour</li>
                        <li>Panko of choice</li>
                        <li>Vegetable or Peanut oil</li>
            
                    </ul>
                </section>
                <section className="recipe-steps">
                    <h2>Instructions</h2>
                    <ol>
                        <li>Make egg bath with a panko and Redfish Magic and a seperate bowl with flour.  Make sure to set bowls starting from egg to flour back to egg then into the panko mix</li>
                        <li>Cut fish fillet into desired nugget size</li>
                        <li>prepare oil(vegetable oil or peanut oil prefered)</li>
                        <li>halfway into dipping fish into egg bath prepare oil in pot </li>
                        <li>Once all fish is prepped submerge fish in oil for 2-4 minutes</li>
                        <li>Once fish is done remove from oil and place on paper towel to drain oil</li>
                    </ol>
                </section>
            </div>
        </div>
    )
}
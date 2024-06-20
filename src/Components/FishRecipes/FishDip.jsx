import React from "react";

export default function FishDip(){

    return(
        <div className="recipe-container">
            <header className="recipe-header">
                <h1>Smoked Fish Dip</h1>
                <img src="https://juliaeats.com/wp-content/uploads/2019/05/smoked-mahi-dip-with-pineapple-1.jpg?w=1024" alt="Chocolate Cake" className="recipe-image" />
            </header>
            <div className="recipe-content">
                <section className="recipe-info">
                    <h2>Ingredients</h2>
                    <ul>
                        <li>1 cup smoked fish, skin and bones removed, flaked</li>
                        <li>¼ cup labneh, plain whole fat greek yogurt, or sour cream</li>
                        <li>2 tbsp. lemon juice</li>
                        <li>Zest of 1 lemon</li>
                        <li>2 tbsp. EVOO</li>
                        <li>1 tsp. chives, minced</li>
                        <li>¼ tsp. celery seed</li>
                        <li>1 tsp. fresh dill, minced</li>
                        <li>White pepper and salt to taste</li>
                        
                    </ul>
                </section>
                <section className="recipe-steps">
                    <h2>Instructions</h2>
                    <ol>
                        <li>Combine all ingredients except fish, whisk to mix.</li>
                        <li>Fold in fish with a fork, mix until evenly coated and texture is “kind of chunky.”</li>
                        <li>Season with salt and white pepper, store in an airtight container and refrigerate.</li>
                        <li>Serve with toast, crackers, or crudite.</li>
                
                    </ol>
                </section>
            </div>
        </div>
    )
}
import React, { useState } from "react";
import "../Styles/Home.css"
import toofer from "../assets/toofer.jpg";
import deer from "../assets/deerfrisco.jpg";
import turkey from "../assets/turkeyCarry.jpg";
import woody from "../assets/woody.png";
import babyMomma from "../assets/babymomma.png";
import emptyperfection from "../assets/Emptyperfection.jpg";
import ducksama from "../assets/ducksamapinladin.png";
import SmallCard from "../Components/SmallCard"




export default function Home() {

    const [dropdownVisible, setDropdownVisible] = useState(false);

    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
    }

    return (
        <div>
            <div className="hero">
                <img src={toofer} className="toofer" alt="To" />

            </div>

            <div className="below-hero">
                <h1 className="blog-title">Tales from the Field</h1>
                <button className="dropdown-btn" onClick={toggleDropdown}>
                    View Photos
                </button>
                <div className={`blogcard-container ${dropdownVisible ? "show" : ""}`}>
                    <img src={deer} className="interchange-posts" alt="post-1" />
                    <img src={turkey} className="interchange-posts" alt="post-2" />
                    <img src={woody} className="interchange-posts" alt="post-3" />
                    <img src={babyMomma} className="interchange-posts" alt="post-3" />
                    <img src={emptyperfection} className="interchange-posts" alt="post-3" />
                </div>
                <div className="midsection">
                    <div className="about">
                        <h1 className="about-content">What were all about.</h1>
                        <p>We are forming a brand based upon the good times around the campfire, telling the tales of our hunt from the day or the amazing surf session we had.  Our product will be created from these campfire tales.  We hope to have you all around that campfire soon!  </p>
                    </div>
                    <div className="vid-section">
                        <img src={ducksama} className="vid" />
                    </div>
                </div>
                <div className="foody-container">
                    <h1 > Featured Recipes</h1>
                    <div>

                        <p className="food-text">We take pride in not just harvesting food, but making memorable meals.....view our recipes so you can wow your friends and family </p>
                       
                        <div className="featured-food">
                            <SmallCard
                                image="https://images.ctfassets.net/pujs1b1v0165/6iOvCSqVxx1ySxA5BCIhwK/5df931e96730008fc8fa3af1817a1489/DuckPineappleBurger_52.jpg?w=1200&fit=fill&fm=webp"
                                title="Teriyaki Duck Pineapple Burger"
                                description="American Classic with wild game twist"
                                link="/DuckPineappleBurger"
                            />
                            <SmallCard
                                image="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh9hu4cLWUzZYbMFMX-swVyF19tmY9ihRrEM6zh7P4HsvWhuukBjJV_4xKijyz1SmUtLd_Y5MnubZWfMPACme4Shd-cih_Ky3aNJ78qTkhLvYOHxQc6zWJokZDqvng1u7ozwaAXSZR1DYM/s1600/fish+nuggets+2.jpg"
                                title="Redfish Fillet"
                                description="Crispy Fish Nuggets with Spicy Aioli"
                                link="/RedfishFilla"
                            />
                            <SmallCard 
                                image="https://images.ctfassets.net/pujs1b1v0165/44FnG96p5HHRj4HdiCCFN2/73042a04c45589f08943981b86d5701e/award_winning_chili_recipe.jpg?w=1800&fit=fill&fm=webp"
                                title="Award Winning Chili"
                                description="Wild Game Chili with a Twist"
                                link="/Chili"
                            />
                            <SmallCard 
                                image="https://juliaeats.com/wp-content/uploads/2019/05/smoked-mahi-dip-with-pineapple-1.jpg?w=1024"
                                title="Smoked Fish Dip"
                                description="Tropical Twist on a Classic"
                                link="/FishDip"
                            />


                        </div>
                    </div>

                </div>
            </div>




        </div>
    )

}
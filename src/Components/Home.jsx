import React from "react";
import "../Styles/Home.css"
import toofer from "../assets/toofer.jpg";
import deer from "../assets/deerfrisco.jpg";
import turkey from "../assets/turkeyCarry.jpg";
import woody from "../assets/woody.png";
import babyMomma from "../assets/babymomma.png";
import emptyperfection from "../assets/Emptyperfection.jpg";
import ducksama from "../assets/ducksamapinladin.png"


export default function Home(){

    return(
        <div>
            <div className="hero">
                <img src={toofer} className="toofer" alt="To"/>
                
            </div>

            <div className="below-hero">
                <h1 className="blog-title">Tales from the Field</h1>
                <div className="blogcard-container">
                    <img src={deer} className="interchange-posts" alt="post-1"/>
                    <img src={turkey} className="interchange-posts" alt="post-2"/>
                    <img src={woody} className="interchange-posts" alt="post-3"/>
                    <img src={babyMomma} className="interchange-posts" alt="post-3"/>
                    <img src={emptyperfection} className="interchange-posts" alt="post-3"/>
                </div>
                <div className="midsection">
                    <div className="about">
                        <h1 className="about-content">What were all about.</h1>
                        <p>We are forming a brand based upon the good times around the campfire, telling the tales of our hunt from the day or the amazing surf session we had.  Our product will be created from these campfire tales.  We hope to have you all around that campfire soon!  </p>
                    </div>
                    <div className="vid-section">
                        <img src={ducksama} className="vid"/>
                    </div>
                </div>
            </div>
            
            
        </div>
    )

}
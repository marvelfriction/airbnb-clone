import React from "react";
import GroupImg from "./assets/Hero.png"



export default function Hero(){
    return(
        <section className="hero">
            <img src={GroupImg} alt="" className="hero--photo" />
            <h1 className="hero--header">Online Experience</h1>
            <p className="hero-text">Join unique interactive activities led by 
            one-of-a-kind hosts-all without leaving home.</p>
        </section>
    )
}
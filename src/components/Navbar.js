import React from "react"
import airbnbLogo from "./assets/airbnb-1.png"


export default function Navbar(){
    return (
        <div>
            <nav>
                <img src={airbnbLogo} alt="" className="nav--logo" />
            </nav>
        </div>
    )
}
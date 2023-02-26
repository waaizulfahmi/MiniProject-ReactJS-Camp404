import React from "react";
import image from "./images/about us.jpg";

function About(){
    return(
        <div className="card shadow mt-5 mx-5">
            <div className="row ">
                <div className="col-6 px-5 py-5" >
                    <h1>About Us</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum, asperiores nesciunt dolore assumenda consequatur necessitatibus quibusdam officia similique illum repellat?</p>
                </div>
                <div className="col-6">
                    <img src={image} alt="" srcset="" width="623px" className="rounded"/>
                </div>

            </div>
            
        </div>
    )
}

export default About;
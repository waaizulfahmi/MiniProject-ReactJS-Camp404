import React from "react";
import sepatuGambar from "./images/sepatu.jpg";

function Beranda(){
    return(
        <div className="container-fluid px-0">
            <img className="img-fluid" src={sepatuGambar} alt="" width="auto" height="auto"  srcset="" />
            <h1 className="text-center centered">Welcome !</h1>    
            <h1 className="text-center centered2">Nike Official Store</h1> 
            <button className="btn btn-primary centered3">Belanja Sekarang !</button>   
            {/* <h1>skdaksdakd</h1> */}
        </div>

    )
}

export default Beranda;
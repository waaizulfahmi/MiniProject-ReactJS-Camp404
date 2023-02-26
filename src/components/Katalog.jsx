import React from "react";
import Logo from "./images/logo.png";

function Katalog(){
    return(
        <div className="card shadow mt-5 mx-5 px-5 py-5 ">
            <h3 className="text-center pt-4 pb-5">Katalog Produk </h3>
            <div className="row">
                <div className="col-3">
                    <div className="card">
                        <div className="row"><img src={Logo} alt="" srcset="" height="200px"  width="200px"/></div>
                        <div className="row"><h2 className="mt-3 ms-2">Sepatu Indoor 2</h2></div>
                        <div className="row"><p >Lorem ipsum dolor sit amet consectetur.</p></div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="card">
                        <div className="row"><img src={Logo} alt="" srcset="" height="200px"  width="200px"/></div>
                        <div className="row"><h2 className="mt-3">Sepatu Indoor 2</h2></div>
                        <div className="row"><p >Lorem ipsum dolor sit amet consectetur.</p></div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="card">
                        <div className="row"><img src={Logo} alt="" srcset="" height="200px"  width="200px"/></div>
                        <div className="row"><h2 className="mt-3">Sepatu Indoor 2</h2></div>
                        <div className="row"><p >Lorem ipsum dolor sit amet consectetur.</p></div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="card">
                        <div className="row"><img src={Logo} alt="" srcset="" height="200px"  width="200px"/></div>
                        <div className="row"><h2 className="mt-3">Sepatu Indoor 2</h2></div>
                        <div className="row"><p >Lorem ipsum dolor sit amet consectetur.</p></div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Katalog;
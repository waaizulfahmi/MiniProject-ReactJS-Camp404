import React from "react";
import logo from "./logo.png";
import { Link } from "react-router-dom";

  

function Navbar(){
    return(
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary shadow">
            <div className="container-fluid">
                <a className="navbar-brand ms-3" href="#"><img src={logo} alt="" srcset="" width="65px"  /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="ms-3 navbar-nav">
                    <li className="nav-item">
                        {/* <a class="nav-link" href="#">Home</a> */}
                        <Link to="/" className="nav-Link  ms-3" aria-current="page" >Beranda</Link>
                    </li>
                    <li className="nav-item">
                        {/* <a class="nav-link" href="#">Product</a> */}
                        <Link to="/katalog" className="nav-Link  ms-3" aria-current="page">Katalog</Link>
                    </li>
                    <li className="nav-item">
                        {/* <a class="nav-link" href="/about">About</a> */}
                        <Link to="/about"  className="nav-Link ms-3" >About</Link>
                    </li>
                </ul>
                <div className="ms-auto me-5">
                    <ul className="navbar-nav ">
                        <li className="nav-item">
                            <Link to="/manajemen"  className="nav-link btn btn-primary btn-sm text-white mx-2" >Login</Link>
                            {/* <a className="nav-link btn btn-primary btn-sm text-white mx-2" href="/manajemen">Login</a> */}
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Register</a>
                        </li>
                    </ul>
                </div>
                </div>
            </div>
            </nav>
        </div>

    );
}

export default Navbar;
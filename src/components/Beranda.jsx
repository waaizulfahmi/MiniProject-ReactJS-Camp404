import React from "react";
import sepatuGambar from "./images/sepatu.jpg";
import sepatu1 from "./images/sepatu1.jpg";
import sepatu2 from "./images/sepatu2.jpg";

function Beranda() {
  return (
    <div className="container-fluid px-0 background-custom">
      <img
        className="img-fluid center-block"
        src={sepatuGambar}
        alt=""
        width="auto"
        height="auto"
        srcset=""
      />
      <h1 className="text-center centered headline-color">Welcome !</h1>
      <h1 className="text-center centered2 headline-color">
        Nike Official Store
      </h1>
      <button className="btn btn-primary centered3">Belanja Sekarang !</button>
      <div className="container  mt-5 mb-5 px-4 py-1">
        <div className="row ">
          <div className="col-4">
            <img
              src="https://img.icons8.com/external-ddara-lineal-ddara/64/094067/external-courier-delivery-services-ddara-lineal-ddara.png"
              height="60px"
            />
            <h5 className="headline-color">Pengiriman Cepat</h5>
          </div>
          <div className="col-4 headline-color">
            <img
              src="https://img.icons8.com/windows/64/094067/verified-badge.png"
              height="60px"
            />
            <h5>Barang Original</h5>
          </div>
          <div className="col-4 headline-color">
            <img
              src="https://img.icons8.com/ios/64/094067/free-shipping.png"
              height="60px"
            />
            <h5>Gratis Ongkir*</h5>
          </div>
        </div>
        <div className="row mt-5  ">
          <small className="text-center headline-color">
            *Syarat & Ketentuan Berlaku
          </small>
        </div>
      </div>

      <div className="bg-light">
        <div className="container  p-1">
          <h5 className="text-black text-start mb-4 mt-5">Featured</h5>
          <div className="row mb-5">
            <div className="col-6">
              <div className="card container-image">
                <img
                  src={sepatu1}
                  className="card-img-top image"
                  alt=""
                  srcset=""
                  height="auto"
                />
                <div className="middle">
                  <div className="text">BUY</div>
                </div>
                <div className="card-body">
                  <h5 className="card-title">
                    <p className="card-text text-start text-black">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Facilis asperiores veniam dignissimos.
                    </p>
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="card container-image">
                <img
                  src={sepatu2}
                  className="card-img-top image"
                  alt=""
                  srcset=""
                  height="auto"
                />
                <div className="middle">
                  <div className="text">BUY</div>
                </div>

                <div className="card-body">
                  <h5 className="card-title">
                    <p className="card-text text-start text-black">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Facilis asperiores veniam dignissimos.
                    </p>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-light">
        <div className="container  p-1">
          <h5 className="text-black text-start mb-4 mt-5">
            Nike Commercial Video
          </h5>
          <div className="row mb-5">
            <div className="col">
              <iframe
                width="853"
                height="480"
                src="https://www.youtube.com/embed/PZIqV7wNyyU?autoplay=1&mute=1"
                title="Never Settle, Never Done | Nike"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* <h1>skdaksdakd</h1> */}

      <footer className="bg-info">
        <div className="container">
          <div className="row p-5">
            <div className="col-lg-6 text-start">
              <h4 className="text-uppercase">nike official store</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex
                iusto nesciunt similique minus, quasi dolore!
              </p>
            </div>
            <div className="col-lg-6">
              <h5 className="text-uppercase">links</h5>
            </div>
          </div>
        </div>
        <div className="text-center p-3 text-white"> © 2023 Copyright</div>
      </footer>
    </div>
  );
}

export default Beranda;

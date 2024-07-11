import React from "react";

export default function Footer() {
  return (
    <div className="footer-div">
      <div className="container">
        <div className="row d-flex  justify-content-around">
          <div className="left-content col-lg-5 col-md-5  col-4">
            <img src="./foto/logo.png"></img>
            <div className="text">
              <h2>Kontakt</h2>
              <a href="tel:070-000000">Telefon: 070-000000</a>
              <a href="">Address: hejpå dig 56 </a>
            </div>
          </div>
          <div className="right-content   col-3 col-md-7 col-lg-7 d-flex justify-content-center justify-content-lg-end justify-content-md-end">
            <div className="right-section">
              <h5>Genvägar</h5>
              <p>tpoic</p>
              <p>tpoic</p>
              <p>tpoic</p>
              <p>tpoic</p>
              <p>tpoic</p>
            </div>
            <div className="left-section">
              <h5>Kontact</h5>
              <p>tpoic</p>
              <p>tpoic</p>
              <p>tpoic</p>
              <p>tpoic</p>
              <p>tpoic</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

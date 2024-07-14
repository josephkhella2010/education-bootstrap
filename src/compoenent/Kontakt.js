import React from "react";
import { KontaktGrupp } from "./KontaktGrupp";
import FörstGrupp from "./FörstGrupp";
import AndraGrupp from "./AndraGrupp";

export default function Kontakt() {
  console.log(KontaktGrupp);
  const förstgrupp = KontaktGrupp[0].grupp1;
  const andragrupp = KontaktGrupp[0].grupp2;
  console.log(förstgrupp, andragrupp);
  return (
    <div className="kontkt-wrapper">
      <div className=" row container-wrapper m-0 d-flex justify-content-between">
        <div className="left-content col-lg-9  col-md-9 col-12 d-flex justify-content-center alig-items-center flex-column">
          <div className="frist-container col-12">
            <div className="top-section d-flex justify-content-center align-items-center flex-column">
              <img src="./foto/kontakt-frist.png"></img>
              <p>Rektor</p>
              <a href="mailto:hjernberg@jenseneducation.se">
                hjernberg@jenseneducation.se
              </a>
              <a href="tel:0737 73 18 05">0737 73 18 05</a>
            </div>
            <div className="bottom-section d-flex">
              <div className="line-one"></div>
              <div className="location-section  col-6 d-flex justify-content-center align-items-center flex-column">
                <img src="./foto/kontakt-location.png"></img>
                <h5>Adress</h5>
                <p>Hejpå dig 56 </p>
              </div>
              <div
                className="telefon-section col-6  d-flex align-items-center flex-column"
                style={{ display: "flex", gap: "5px" }}
              >
                <img src="./foto/kontakt-telefone.png"></img>
                <h5 style={{ marginBottom: "3px" }}>Telefonnummer</h5>
                <a href="tel:070-000000" style={{ marginBottom: "3px" }}>
                  070-000000{" "}
                </a>
              </div>
            </div>
          </div>
          <div className="second-container">
            <div className="row top-content m-0 d-flex justify-content-between flex-lg-row flex-md-row flex-column align-items-center">
              <div className="line-one"></div>
              <FörstGrupp name={förstgrupp} />
              <div className="line-two"></div>
            </div>

            <div className="row  bottom-content m-0 d-flex justify-content-between flex-lg-row flex-md-row flex-column align-items-center">
              <AndraGrupp name={andragrupp} />
            </div>
          </div>
        </div>
        <div className="right-content col-lg-3  col-md-3 col-12 d-flex  align-items-lg-center align-items-md-center align-items-start">
          <div className="section d-flex justify-content-center align-items-center flex-column">
            <h4>Logga in </h4>
            <button
              onClick={() => {
                window.location.href = "./Loggin";
              }}
            >
              Campus login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";

export default function Skolan() {
  return (
    <div className="skolan-wrapper">
      <div className="frist-container d-flex align-items-center">
        <div className="content ">
          <p
            className="d-flex align-items-center justify-content-center "
            style={{ width: "100%", height: "100%" }}
          >
            Få en unik upplevelse av våran skola från insidan{" "}
          </p>
        </div>
      </div>
      <div className="second-container w-100">
        <img src="./foto/skolan-page.png" className="w-100 h-100"></img>
      </div>
      <div className="third-container d-flex align-items-center">
        <div className="content">
          <p
            className="d-flex align-items-center justify-content-center "
            style={{ width: "100%", height: "100%" }}
          >
            Få en unik upplevelse av våran skola från insidan{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

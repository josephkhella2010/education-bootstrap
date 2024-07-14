import React from "react";

export default function Jobbmedoss() {
  return (
    <div className="jobbmedoss-wrapper">
      <div className="container frist-container d-flex flex-column">
        <h2>Lediga jobb på rosendalskolan </h2>
        <h5>Gör en Spontanansökan</h5>
        <p className="col-lg-7 col-md-7 col-sm-8 col-9">
          Är du intresserad av att jobba hos oss, skicka gärna en spontansökan? 
          Bifoga CV och personligt brev och märk den Spontanansökan¨ Skicka den
          till rektor {" "}
          <a
            href=" mailto:Rektor@rosendalskolan.se"
            style={{ color: " #F87B35", textDecoration: "none" }}
          >
            Rektor@rosendalskolan.se
          </a>
        </p>
        <p>Tjänster</p>
      </div>
      <div className="line"></div>
      <div className="second-container d-flex justify-content-center align-items-center">
        <div className="line">
          <p>INGA TJÄNSTER </p>
          <p>FINNS ÄN.</p>
        </div>
      </div>
    </div>
  );
}

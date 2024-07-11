import React from "react";
import { SecondArrayHome } from "./SecondArrayHome";

export default function Koanmal() {
  const arrtwo = SecondArrayHome;
  const secondList = arrtwo.map((item, index) => {
    return (
      <div className="content col-lg-6 col-md-6" key={index}>
        <div className="section">
          <h3 className="col-1" style={{ fontSize: "3rem" }}>
            {item.id}
          </h3>
          <div className="text col-10">
            <h4>{item.head}</h4>
            <p>{item.text}</p>
          </div>
        </div>
      </div>
    );
  });
  return (
    <div className="koanmal-wrapper">
      <div className=" frist-container">
        <div className="row gx-5 m-0">
          <div className="left-content col-lg-4 col-md-5 col-5">
            <h2 className="col-lg-7 col-md-7 col-sm-10">
              Bli elev på rosendalskolan
            </h2>
          </div>
          <div className="right-content col-lg-6 col-md-7 col-7">
            <div className="text">
              Vill du gå på rosendalskolan i Västerås? Här kan du läsa mer om
              hur du går till väga för att få mer information om besöksdagar och
              göra en intresseanmälan.
            </div>
          </div>
        </div>
      </div>
      <div className="second-container d-flex justify-content-center align-items-center">
        <img src="./foto/frist-koanmal.png"></img>
      </div>
      <div className="third-container container">
        <div className="row m-0">
          <div className="left-content col-lg-7 col-md-7 col-sm-7">
            <h3 className=" mb-4">Ställ ditt barn i kö till rosendalskolan</h3>
            <p>
              Vi är glada att du överväger att välja vår skola för din students
              utbildning. På rosendalskolan strävar vi efter att skapa en
              inkluderande och stödjande lärandemiljö där varje elev ges
              möjlighet att växa och uppnå sitt fulla potential.
            </p>
            <p>
              Vi är glada att du överväger att välja vår skola för din students
              utbildning. På rosendalskolan strävar vi efter att skapa en
              inkluderande och stödjande lärandemiljö där varje elev ges
              möjlighet att växa och uppnå sitt fulla potential.
            </p>
          </div>
          <div className="right-content col-5 col-md-5 col-sm-5 col-12">
            <button className="">STÄLL DITT BARN I KÖ</button>
          </div>
        </div>
      </div>
      <div className="fourth-container container">
        <div className="row m-0 d-flex align-items-center">
          <div className="left-content  col-lg-6 col-md-6 col-sm-6">
            <img src="./foto/second-koanmal.png"></img>
          </div>
          <div className="right-content col-lg-6 col-md-6 col-sm-6">
            <h3 className="col-lg-7 col-md-7 col-sm-7 col-9">
              Prova på en dag på Hitachigymnasiet i Västerås
            </h3>
            <p className="col-lg-10 col-md-10 col-sm-10">
              Besök en klass under en halvdag för att testa på vårt arbetssätt
              och uppleva hur det är att gå på vår skola. Allmänna
              prova-på-dagar anordnar vi normalt i perioden december-februari. 
            </p>
          </div>
        </div>
      </div>
      <div className="fifth-container container py-5 d-flex justify-content-center flex-column">
        <h2
          className="d-flex justify-content-center align-items-center"
          style={{ height: "100px" }}
        >
          Ansöknings processen - i steg{" "}
        </h2>
        <div className="row gy-3 m-0 py-5">{secondList}</div>
        <div className="button d-flex justify-content-center align-items-center">
          <button className="">STÄLL DITT BARN I KÖ</button>
        </div>
      </div>
    </div>
  );
}
/* 

      <div className="fifth-container container py-5 d-flex justify-content-center flex-column">
        <h2
          className="d-flex justify-content-center align-items-center"
          style={{ height: "100px" }}
        >
          Ansöknings processen - i steg{" "}
        </h2>
        <div className="row gy-3 m-0 py-5">{secondList}</div>
        <div className="button d-flex justify-content-center align-items-center">
          <button className="">STÄLL DITT BARN I KÖ</button>
        </div>
      </div>


*/

{
  /*  
      <div className="fifth-container container py-5 d-flex justify-content-center flex-column">
        <h2
          className="d-flex justify-content-center align-items-center"
          style={{ height: "100px" }}
        >
          Ansöknings processen - i steg{" "}
        </h2>
        <div className="row gy-3 m-0 py-5">
          <div className="content col-lg-6 col-md-6 col-sm-6">
            <div className="section">
              <h3 className="col-1" style={{ fontSize: "3rem" }}>
                1
              </h3>
              <div className="text col-10">
                <h4>Läs på om skolan</h4>
                <p>
                  Innan du söker till skolan kan det vara en bra idé att läsa
                  lite mer om oss och hur vi jobbar på rosendalskolan.
                </p>
              </div>
            </div>
          </div>

          <div className="content col-lg-6 col-md-6 col-sm-6">
            <div className="section">
              <h3 className="col-1" style={{ fontSize: "3rem" }}>
                2
              </h3>
              <div className="text col-10">
                <h4>Besök oss</h4>
                <p>
                  Besök oss på öppet hus eller gå på någon av våra visningar för
                  att få en uppfattning om hur förskolan eller skolan fungerar.
                </p>
              </div>
            </div>
          </div>
          <div className="content col-lg-6 col-md-6 col-sm-6">
            <div className="section">
              <h3 className="col-1" style={{ fontSize: "3rem" }}>
                3
              </h3>
              <div className="text col-10">
                <h4>Ställ dig i kö</h4>
                <p>
                  När du känner dig redo fyller du i vårt ansöknigsformulär
                  Skicka in det för att ansöka till skolan.
                </p>
              </div>
            </div>
          </div>
          <div className="content col-lg-6 col-md-6 col-sm-6">
            <div className="section">
              <h3 className="col-1" style={{ fontSize: "3rem" }}>
                4
              </h3>
              <div className="text col-10">
                <h4>Antagningsbesked</h4>
                <p>
                  Vi återkommer med erbjudande om plats, som du sedan får tacka
                  ja till. Kom ihåg att du måste tacka ja inom en viss tid för
                  att få platsen
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="button d-flex justify-content-center align-items-center">
          <button className="">STÄLL DITT BARN I KÖ</button>
        </div>
      </div>
      */
}

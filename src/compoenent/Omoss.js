import React from "react";

export default function Omoss() {
  const OmossArr = [
    {
      url: "./foto/second-omoss.png",
      head: "Där kunskap och kreativt skapande möts",
      text: "Entréskolan drivs av en vilja att utveckla lärandet och de estetiska uttrycksformerna där varje elev får vara kreativ och aktiv i sitt lärande."
    },
    {
      url: "./foto/third-omoss.png",
      head: "Följer den svenska läroplanen",
      text: "Entréskolan är politiskt och religiöst obunden fristående skola. Vårt arbetssätt och pedagogiska tankar grundar sig på den svenska läroplanen och skollagen. Vi genomför de nationella proven och sätter betyg utifrån det svenska betygssystemet.Skolinspektionen kontrollerar vår verksamhet regelbundet för att säkerställa Entréskolans kvalitet och resultat."
    },
    {
      url: "./foto/fourth-omoss.png",
      head: "Vision",
      text: " vision med Entréskolan är att utveckla lärandet och skolan i ett långsiktigt perspektiv för att skapa en lärmiljö där eleverna får växa och utvecklas till handlingskraftiga och kreativa individer med en framtidstro på sig själva."
    }
  ];
  const listArr = OmossArr.map((item, index) => {
    return (
      <div
        className="section col-lg-4 col-md-4 col-sm-8 col-12 d-flex flex-column align-items-center"
        key={index}
      >
        <img src={item.url} alt=" not found" />
        <div className="text d-flex flex-column align-items-center text-center">
          <h5>{item.head}</h5>
          <p>{item.text}</p>
        </div>
      </div>
    );
  });
  return (
    <div className="omoss-wrapper">
      <div className="orange-line d-lg-block d-md-block d-none "></div>
      <div className="frist-container row m-0 d-flex">
        <div className="frist-content">
          <div className="left-content col-lg-8 col-md-8 col-sm-10 col-10">
            <div className="top-section col-9">
              <h3>Om Rosendalskolan</h3>
              <p className="col-lg-9 col-md-9">
                rosendalskolan är den personliga skolan med den stora ambitionen
                belägen i Västerås.
              </p>
            </div>

            <div className="bottom-section col-lg-9 col-md-9 col-12">
              <h3>Det här är Rosendalskolan</h3>
              <p className="col-lg-9 col-md-9 col-12">
                Skolan startade höstterminen 2008 och har sedan dess vuxit både
                i kvantitet och kvalitet. Idag är vi en väletablerad grundskola
                med 500 elever från förskoleklass till årskurs 9. Vi bedriver
                skolan i helt nyrenoverade lokaler och har en trevlig skolgård
                utrustad efter elevernas önskemål. År 2020 bytte vi namn till
                Noblaskolan och i samband med det utökades skolan även med ett
                högstadium.
              </p>
            </div>
          </div>
          <div className="right-content d-flex justify-content-center align-items-center flex-column col-lg-4 col-md-4 col-sm-6  col-sm-10 col-10">
            <div className="section">
              <p>Våra bloggar</p>
              <div className="foto d-flex justify-content-center">
                <img src="./foto/frist-omoss.png" alt="non found" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="second-container">
        <h3
          className=" d-flex justify-content-center align-items-center"
          style={{ height: "60px", fontWeight: "700" }}
        >
          Rosendalskolan{" "}
        </h3>
        <div className="row m-0 p-2 d-flex justify-content-center">
          {listArr}
        </div>
      </div>
      <div className="omoss-third-container">
        <div className="omoss-content">
          <img src="./foto/femth-omoss.png"></img>
          <button
            onClick={() => {
              window.location.href = "/Kontakt";
            }}
          >
            Kontakta Oss
          </button>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import { FristArrayHome } from "./FristArrayHome";
import { SecondArrayHome } from "./SecondArrayHome";
export default function Home() {
  let arrone = FristArrayHome;

  let fristList = arrone.map((item, index) => {
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
    <div className="home-wrapper">
      <div className=" container frist-container">
        <div className="row m-0 g-5 d-flex justify-content-around flex-column-reverse flex-lg-row flex-md-row flex-sm-row">
          <div className="left-content col-lg-5 col-md-5 col-sm-5 p-lg-3 p-md-3">
            <div className="section p-3 d-flex flex-column justify-content-around">
              <h2>En tryggare </h2>
              <h2 className="d-flex justify-content-end">utbildning för </h2>
              <h2>
                dina <span>barn</span>
              </h2>
            </div>
          </div>
          <div className="right-content col-lg-7 col-md-7 col-sm-7 p-lg-3 p-md-3">
            <div className="section">
              <img src="./foto/home-frist.png"></img>
            </div>
          </div>
        </div>
      </div>
      <div className="container second-container">
        <div className="row m-0">
          <h3 className="col-lg-7 col-md-7 col-sm-7 col-10">
            Vi har modet att föreställa oss framtiden och engagera oss i de
            betydande frågorna.{" "}
          </h3>
          <p className="col-lg-7 col-md-7 col-sm-7 col-10">
            Vi tar på oss ansvaret att ge nästa generation de kunskaper och
            verktyg de behöver för att modigt och energiskt möta framtidens
            utmaningar. Vi ser utbildningen av eleverna som vår uppgift, och för
            att säkerställa deras framgång tror vi på en balans av olika
            element. Det handlar om både struktur och stöd, både lek och allvar,
            både kreativitet och färdighetsträning, både lust och krav. Hos oss
            får eleverna en helhetsupplevelse från början till slut.
          </p>
        </div>
      </div>
      <div className="third-container d-flex justify-content-center align-items-center">
        <p className="col-lg-8 col-md-8 col-10 text-center">
          “Vi vill bidra med kompetens och kreativitet i att utveckla
          samhället.”
        </p>
      </div>
      <div className="fouth-container">
        <h2
          className=" d-flex justify-content-center align-items-center"
          style={{ height: "60px", fontWeight: "700" }}
        >
          att studera på rosendalskolan
        </h2>
        <div className="row m-0 p-2 d-flex justify-content-center">
          {fristList}
        </div>
      </div>
      <div className="fifth-container"></div>

      <div className="sixth-container container py-5 d-flex justify-content-center flex-column">
        <h2
          className="d-flex justify-content-center align-items-center"
          style={{ height: "100px" }}
        >
          Ansöknings processen - i steg{" "}
        </h2>
        <div className="row gy-3 m-0 py-5">{secondList}</div>
        <div className="button d-flex justify-content-center align-items-center">
          <button
            className=""
            onClick={() => {
              window.location.href = "/Koanmal";
            }}
          >
            STÄLL DITT BARN I KÖ
          </button>
        </div>
      </div>
    </div>
  );
}

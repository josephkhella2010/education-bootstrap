import React from "react";
import { FristArrayHome } from "./FristArrayHome";
import { SecondArrayHome } from "./SecondArrayHome";
export default function Home() {
  let arrone = FristArrayHome;

  let fristList = arrone.map((item, index) => {
    return (
      <div className="content col-lg-4 col-md-4 col-sm-6" key={index}>
        <div className="section d-flex justify-content-center align-items-center flex-column">
          <img src={item.url}></img>
          <div className="text d-flex flex-column align-items-center text-center">
            <h4>{item.head}</h4>

            <p>{item.text}</p>
          </div>
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
      <div className=" container fouth-container">
        <h2>att studera på rosendalskolan</h2>
        <div className="row m-0 g-3">{fristList}</div>
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
          <button className="">STÄLL DITT BARN I KÖ</button>
        </div>
      </div>
    </div>
  );
}

{
  /*  
          <div className="content col-lg-4 col-md-4 col-sm-4">
            <div className="section d-flex justify-content-center align-items-center flex-column">
              <img src="./foto/home-utbilding.png"></img>
              <div className="text d-flex flex-column align-items-center text-center">
                <h4>Utbilding</h4>

                <p>
                  För att uppnå de högre betygsstegen är djup kunskap om ämnet
                  en viktig förutsättning. Därför fokuserar vi på att
                  tillhandahålla läromedel och litteratur som lärarna väljer med
                  omsorg.
                </p>
              </div>
            </div>
          </div>

          <div className="content col-lg-4 col-md-4 col-sm-4">
            <div className="section d-flex justify-content-center align-items-center flex-column">
              <img src="./foto/home-larare.png"></img>
              <div className="text d-flex flex-column align-items-center text-center">
                <h4>Engagerade lärare</h4>

                <p>
                  På Rosendalskolan är våra förväntningar höga, både på elever
                  och lärare. Vårt mål är att erbjuda lektioner som är både
                  tempofyllda och utmanande, anpassade för alla nivåer.
                </p>
              </div>
            </div>
          </div>
          <div className="content col-lg-4 col-md-4 col-sm-4">
            <div className="section d-flex justify-content-center align-items-center flex-column">
              <img src="./foto/home-aktivitet.png"></img>
              <div className="text d-flex flex-column align-items-center text-center">
                <h4>våra aktiviteter</h4>

                <p>
                  På vår skola får eleverna redan i årskurs 7 välja den profil
                  som bäst passar dem. Vi tror på att en kombination av fysisk
                  aktivitet och studier kan underlätta förståelsen och leda till
                  bättre resultat för eleverna.
                </p>
              </div>
            </div>
          </div>
          <div className="content col-lg-4 col-md-4 col-sm-4">
            <div className="section d-flex justify-content-center align-items-center flex-column">
              <img src="./foto/home-halsa.png"></img>
              <div className="text d-flex flex-column align-items-center text-center">
                <h4>elevens hälsa</h4>

                <p>
                  Vi erbjuder omfattande stöd för eleverna, som sträcker sig
                  från tillgång till kuratorer till tillhandahållande av
                  specialassistenter. Vi prioriterar regelbundet elevernas
                  välmående och hälsa för att säkerställa att de får den support
                  de behöver.
                </p>
              </div>
            </div>
          </div>
          <div className="content col-lg-4 col-md-4 col-sm-4">
            <div className="section d-flex justify-content-center align-items-center flex-column">
              <img src="./foto/home-leaderskap.png"></img>
              <div className="text d-flex flex-column align-items-center text-center">
                <h4>tydligt ledarskap</h4>

                <p>
                  En av nycklarna till framgångsrik utbildning är ett medvetet
                  och tydligt ledarskap. Vi är omsorgsfulla i ledarskapet på
                  alla nivåer; från lärarens ledarskap i klassrummet till
                  rektors ledarskap för hela skolan.
                </p>
              </div>
            </div>
          </div>
          <div className="content col-lg-4 col-md-4 col-sm-4">
            <div className="section d-flex justify-content-center align-items-center flex-column">
              <img src="./foto/home-join.png"></img>
              <div className="text d-flex flex-column align-items-center text-center">
                <h4>bli en av oss</h4>

                <p>
                  Kulturen på vår skola är av yttersta vikt för oss. Vi strävar
                  efter att skapa en miljö där alla känner sig välkomna och
                  trygga. Vi omfamnar mångfald och välkomnar alla individer med
                  öppna armar.
                </p>
              </div>
            </div>
          </div>
          */
}

{
  /*  
          <div className="content col-lg-6 col-md-6 col-sm-6">
            <div className="section bg-secondary ">
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
            <div className="section bg-secondary">
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
            <div className="section bg-secondary">
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
            <div className="section bg-secondary">
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
          */
}

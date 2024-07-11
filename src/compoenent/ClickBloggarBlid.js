import React from "react";

export default function ClickBloggarBlid() {
  return (
    <div className="click-bloggarBild-wrapper me-0 ms-0">
      <div className="row frist-container d-flex justify-content-center align-items-center flex-lg-row flex-md-row flex-sm-row flex-column m-0">
        <div className="line col-1"></div>
        <div className="row sub-main-container m-0 col-11">
          <div className="left-section col-lg-5 col-md-5 col-sm-5">
            <img src="./foto/clickbloggar-frist.png"></img>
          </div>
          <div
            className="right-section col-lg-7  col-md-7 col-sm-7 py-3 d-flex align-items-center flex-column"
            style={{ gap: "20px" }}
          >
            <div
              className="top-content col-6 d-flex justify-content-center align-items-center"
              style={{
                border: "2px solid black",
                height: "50px",
                gap: "10px",
                borderRadius: "20px"
              }}
            >
              <img
                src="./foto/clickbloggar-liam.png"
                alt="non found"
                style={{ height: "80%" }}
              />
              <p className="m-0">Liam sten</p>
            </div>
            <div
              className="middle-content col-10"
              style={{
                border: "2px solid black",
                minHeight: "100px",
                borderRadius: "20px"
              }}
            >
              <p
                className="d-flex justify-content-center align-items-center"
                style={{ height: "100%" }}
              >
                Tack skolan för en riktig härlig skol upplevelse, detta har vart
                jätte kul en rikit dream come true.{" "}
              </p>
            </div>

            <div
              className="bottom-content d-flex justify-content-center align-items-center flex-column w-100"
              style={{ gap: "15px" }}
            >
              <div
                className="line col-10"
                style={{
                  backgroundColor: "#3C4870",
                  height: "10px"
                }}
              ></div>
              <div
                className="text d-flex  align-items-center"
                style={{ width: "100%", minHeight: "50px", gap: "15px" }}
              >
                <img
                  src="./foto/clickbloggar-liam-second.png"
                  alt="non found"
                />
                <div
                  className="letter col-9"
                  style={{
                    border: "2px solid black",
                    borderRadius: "20px",
                    minHeight: "50px"
                  }}
                >
                  <p className="m-0"> håller med liam vi hadde riktigt kul </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="second-container">
        <div className="row m-0">
          <div className="container col-11 d-flex flex-column justify-content-center">
            <h5>Se mer</h5>
            <div className="foto-container d-flex justify-content-center align-items-center">
              <div className="line"></div>
              <div className="foto-section d-flex justify-content-between align-items-center flex-lg-row flex-md-row flex-sm-row flex-column">
                <img
                  src="./foto/bloggar-aktivi-second.png"
                  className="col-lg-4 col-md-4 col-sm-4"
                ></img>

                <img
                  src="./foto/bloggar-aktivi-third.png"
                  className="col-lg-4 col-md-4 col-sm-4"
                ></img>
                <img
                  src="./foto/bloggar-skolan-frist.png"
                  className="col-lg-4 col-md-4 col-sm-4"
                ></img>
                <img
                  src="./foto/bloggar-studier-fourth.png"
                  className="col-lg-4 col-md-4 col-sm-4"
                ></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

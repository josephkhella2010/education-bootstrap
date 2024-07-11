import React from "react";
import BloggarImg from "./BloggarImg";
import { BiSolidDownArrow } from "react-icons/bi";

export default function ElevBloggar() {
  return (
    <div className="elevbloggar-wrapper">
      <div className="frist-container d-flex align-items-center">
        <div className="content">
          <p
            className="d-flex align-items-center justify-content-center "
            style={{ width: "100%", height: "100%" }}
          >
            Vår skol miljö
          </p>
        </div>
      </div>
      <div className=" container second-container">
        <div className="row m-0">
          <BloggarImg />
        </div>
      </div>
      <div
        className="container arrow d-flex justify-content-center align-items-center"
        style={{ height: "100px" }}
      >
        <BiSolidDownArrow
          title="klicka här"
          style={{ cursor: "pointer" }}
          onClick={() => {
            window.location.href = "./ClickBloggarBlid";
          }}
        />
      </div>
      <div className="third-container d-flex align-items-center">
        <div className="content"></div>
      </div>
    </div>
  );
}

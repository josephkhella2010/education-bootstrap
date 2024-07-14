import React from "react";
import { BrowserRouter as Main, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Skolan from "./Skolan";
import Koanmal from "./Koanmal";
import Jobbmedoss from "./Jobbmedoss";
import Omoss from "./Omoss";
import Kontakt from "./Kontakt";
import Home from "./Home";
import ElevBloggar from "./ElevBloggar";
import ClickBloggarBlid from "./ClickBloggarBlid";
import Loggin from "./Loggin";
import LarareLoggin from "./LarareLoggin";
import StudentLoggin from "./StudentLoggin";
import GlomFigur from "./GlomFigur";
import LogginAnvandnamn from "./LogginAnvandnamn";
import GlomLosenord from "./GlomLosenord";
import FaceId from "./FaceId";
export default function Pages() {
  return (
    <div>
      <Main>
        <Navbar />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Skolan" element={<Skolan />} />
          <Route exact path="/Koanmal" element={<Koanmal />} />
          <Route exact path="/ElevBloggar" element={<ElevBloggar />} />
          <Route
            exact
            path="/ClickBloggarBlid"
            element={<ClickBloggarBlid />}
          />

          <Route exact path="/Jobbmedoss" element={<Jobbmedoss />} />
          <Route exact path="/Omoss" element={<Omoss />} />
          <Route exact path="/Kontakt" element={<Kontakt />} />
          <Route exact path="/Loggin" element={<Loggin />} />
          <Route exact path="/LarareLoggin" element={<LarareLoggin />} />
          <Route exact path="/StudentLoggin" element={<StudentLoggin />} />
          <Route exact path="/GlomFigur" element={<GlomFigur />} />
          <Route
            exact
            path="/LogginAnvandnamn"
            element={<LogginAnvandnamn />}
          />
          <Route exact path="/GlomLosenord" element={<GlomLosenord />} />
          <Route exact path="/FaceId" element={<FaceId />} />
        </Routes>
        <Footer />
      </Main>
    </div>
  );
}

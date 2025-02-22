import React from 'react'
import Navbar1 from "./Navbar1";
import Navbar2 from "./Navbar2";
import Aboutme from "./Aboutme";
import Whatido from "./Whatido";
import Resume from "./Resume";
import Hireme from "./Hireme";
import Faq from "./Faq";
import Contact from "./Contact";
import Footer from "./Footer";
import Experience from "./Experience";
import Project from './Project';

export default function Home() {
  return (
    <>
      <div id="home">
        <Navbar1></Navbar1>
        <Navbar2></Navbar2>
        <Aboutme></Aboutme>
        <Whatido></Whatido>
        <Resume></Resume>
        <Project></Project>
        <Experience></Experience>
        <Hireme></Hireme>
        <Faq></Faq>
        <Contact></Contact>
        <Footer></Footer>
      </div>
    </>
  );
}

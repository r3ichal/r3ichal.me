import React from "react";
import Landing from "@components/Landing/Landing";
import Skills from "@components/Skills/Skills";
import Contact from "@components/Contact/Contact";
import Divider from "@components/Divider/Divider";


const HomePage = () => {
  return (
    <>
      <Landing></Landing>
      <Divider title={"About"}></Divider>
      <Skills></Skills>
      <Divider title={"Contact"}></Divider>
      <Contact></Contact>
    </>
  );
};

export default HomePage;

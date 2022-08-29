import React from "react";

import Landing from "./landing";
import Entry from "./entry";
import NavBar from "./navbar";
import Contact from "./contact";
import About from "./about";

export default function Main() {
  return (
    <>
      <NavBar />
      <Entry />
      <Landing />
      <About />
      <Contact />
    </>
  );
}

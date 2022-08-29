import React from "react";

import Landing from "./landing";
import Entry from "./entry";
import NavBar from "./navbar";

export default function Main() {
  return (
    <>
      <NavBar />
      <Entry />
      <Landing />
    </>
  );
}

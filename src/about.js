import React, { useState, useEffect } from "react";
import styled from "styled-components";

export default function About() {
  let redx = 100;
  let redy = 200;
  const redd = {
    top: `${redx}px`,
    left: `${redy}px`,
  };

  return (
    <Community>
      {/* <Circle style={redd} /> */}
      <p>
        <Red>STUDENT PRESS</Red> will exist as a collective which <br />
        <Red>
          <sup>1 </sup>COMMUNICATES FOR THE STUDENTS
        </Red>{" "}
        while <br />
        building a{" "}
        <Red>
          <sup>2 </sup>SENSE OF COMMUNITY
        </Red>
      </p>
    </Community>
  );
}

const Community = styled.div`
  position: relative;
  margin-top: -100vh;
  background-color: #1e1e1e;
  display: flex;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  p {
    font-family: baskerville-urw, serif;
    font-weight: 400;
    font-style: italic;
    font-size: 3vw;
    color: white;
    transition: all 200ms ease-in;
    &:hover {
      transform: scale(1.01);
    }
  }
`;
const Red = styled.span`
  font-family: urw-din, sans-serif;
  font-weight: 500;
  font-style: normal;
  color: #ff5252;
  sup {
    color: white;
    font-size: 1.2vw;
  }
`;

const Circle = styled.span`
  height: 250px;
  width: 250px;
  background-color: #bbb;
  border-radius: 50%;
  position: absolute;
  /* top: 100px;
  left: 100px; */
`;

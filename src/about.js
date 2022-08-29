import React from "react";
import styled from "styled-components";

export default function About() {
  return (
    <Community>
      <p>
        <Red>STUDENT PRESS</Red> will exist as a collective which both <br />
        <Red>COMMUNICATES FOR THE STUDENTS</Red> while <br />
        building a <Red> SENSE OF COMMUNITY</Red>
      </p>
    </Community>
  );
}

const Community = styled.div`
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
  }
`;
const Red = styled.span`
  font-family: urw-din, sans-serif;
  font-weight: 500;
  font-style: normal;
  color: #ff5252;
`;

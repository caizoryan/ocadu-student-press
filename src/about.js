import React from "react";
import styled from "styled-components";

export default function About() {
  return (
    <Community>
      <p>
        <Red>STUDENT PRESS</Red> will exist as a&nbsp;collective&nbsp;which{" "}
        <br />
        <Red>
          <sup>1&nbsp;</sup>COMMUNICATES&nbsp;FOR THE&nbsp;STUDENTS
        </Red>{" "}
        while <br />
        building a
        <Red>
          <sup> 2&nbsp;</sup>SENSE&nbsp;OF&nbsp;COMMUNITY
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
    @media only screen and (max-width: 800px) {
    }
    @media only screen and (max-width: 600px) {
      font-size: 22px;
      padding: 20px;
      br {
        display: none;
      }
    }
  }
`;
const Red = styled.span`
  font-family: urw-din, sans-serif;
  font-weight: 500;
  font-style: normal;
  color: #ff5252;
  sup {
    font-size: 1.2vw;
  }
`;

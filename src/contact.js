import React from "react";
import styled from "styled-components";
// import "./App.css";

function Contact() {
  return (
    <Main>
      <a href=''>
        <Change>
          <h4>get notified</h4>
        </Change>
      </a>
      <a href=''>
        <Change>
          <h4>contact us</h4>
        </Change>
      </a>
    </Main>
  );
}

export default Contact;

const Main = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  background-color: white;
  h4 {
    font-family: urw-din-condensed, sans-serif;
    text-align: center;
    font-size: 25pt;
  }

  a {
    color: #1e1e1e;
    text-decoration: none;
  }
`;
const Change = styled.div`
  width: 50vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: #1e1e1e;
    color: #ff5252;
    transition: all 250ms ease;
  }
`;

import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { animate, motion } from "framer-motion";

export default function Landing() {
  const speed = 100;
  function textFn(myArray) {
    let myText = "";
    for (let i = 0; i < myArray.length; i++) {
      myText = myText + myArray[i];
    }
    return myText;
  }
  const [text1, setText1] = useState({
    name: "&420s",
    dName: "VOICE",
    reveal() {
      var one = this.name.split("");
      var two = this.dName.split("");
      for (let i = 0; i < one.length; i++) {
        setTimeout(function () {
          one[i] = two[i];
          const newText = textFn(one);
          setText1((t) => ({
            ...t,
            name: newText,
          }));
        }, i * speed);
      }
    },
  });
  const [text2, setText2] = useState({
    name: "69",
    dName: "OF",

    reveal() {
      var one = this.name.split("");
      var two = this.dName.split("");
      for (let i = 0; i < one.length; i++) {
        setTimeout(function () {
          one[i] = two[i];
          const newText = textFn(one);
          console.log(newText);
          setText2((t) => ({
            ...t,
            name: newText,
          }));
        }, i * speed);
      }
    },
  });
  const [text3, setText3] = useState({
    name: "7e&r(eyi",
    dName: "STUDENTS",

    reveal() {
      var one = this.name.split("");
      var two = this.dName.split("");
      for (let i = 0; i < one.length; i++) {
        setTimeout(function () {
          one[i] = two[i];
          const newText = textFn(one);
          console.log(newText);
          setText3((t) => ({
            ...t,
            name: newText,
          }));
        }, i * speed);
      }
    },
  });

  useEffect(() => {
    setTimeout(() => {
      text1.reveal();
    }, 3100);
    setTimeout(() => {
      text2.reveal();
    }, 3100 + text1.name.length * speed);
    setTimeout(() => {
      text3.reveal();
    }, 3100 + (text1.name.length + text2.name.length) * speed);
  }, []);

  const animation = {
    hide: {
      y: 0,
    },
    show: {
      y: "-100vh",
      transition: {
        ease: "easeOut",
        duration: 0.7,
        delay: 2.3,
      },
    },
  };
  return (
    <Wrapper variants={animation} animate='show' initial='hide'>
      <HeaderContainer>
        <Header>
          {text1.name} <br></br>
          <OfSpan></OfSpan> {text2.name} <br></br> <StudentSpan></StudentSpan>
          {text3.name}
        </Header>
      </HeaderContainer>
    </Wrapper>
  );
}

let secondaryColor = "#FF5252";
let primaryColor = "#1E1E1E";
const OfSpan = styled.span`
  padding-left: 8vw;
`;
const StudentSpan = styled.span`
  padding-left: 3.7vw;
`;
const Wrapper = styled(motion.div)`
  overflow: hidden;
  display: flex;
  position: absolute;
  top: 100vh;
  left: 0;
  justify-content: center;
  align-items: center;
  color: ${primaryColor};
  background-color: ${secondaryColor};
  width: 100vw;
  height: 100vh;
`;
const HeaderContainer = styled.div`
  display: flex;
`;
const Header = styled(motion.h1)`
  font-size: 11vw;
  line-height: 0.9em;
  font-family: urw-din-condensed, sans-serif;
  font-weight: 700;
`;

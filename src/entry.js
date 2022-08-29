import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { animate, motion } from "framer-motion";

export default function Entry() {
  // let height;
  // useEffect(() => {
  //   height = window.innerHeight;
  //   console.log(height);
  // });
  const animation = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const childAnimation = {
    show: {
      y: 0,
      transition: {
        duration: 0.85,
        ease: "easeOut",
      },
    },
    hidden: {
      y: 200,
    },
  };

  const cleanAnimation = {
    hidden: {
      y: 0,
    },
    show: {
      y: `-100vh`,
      transition: {
        ease: "easeOut",
        duration: 0.6,
        delay: 1.5,
      },
    },
  };
  return (
    <>
      <Wrapper>
        <TextContainer variants={animation} initial='hidden' animate='show'>
          <HeadWrapper>
            <Header variants={childAnimation}>OCAD U</Header>
          </HeadWrapper>
          <HeadWrapper>
            <Header variants={childAnimation}>STUDENT</Header>
          </HeadWrapper>
          <HeadWrapper>
            <Header variants={childAnimation}>PRESS</Header>
          </HeadWrapper>
        </TextContainer>
      </Wrapper>
      <CleanUp
        variants={cleanAnimation}
        initial='hidden'
        animate='show'></CleanUp>
    </>
  );
}
let secondaryColor = "#FF5252";
let primaryColor = "#1E1E1E";
const CleanUp = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  z-index: 90;
  background: ${secondaryColor};
`;
const TextContainer = styled(motion.div)`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
`;
const Wrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  width: 100vw;
  height: 100vh;
  background: ${secondaryColor};
  color: white;
`;

const HeadWrapper = styled(motion.div)`
  overflow: hidden;
`;
const Header = styled(motion.div)`
  font-family: urw-din-condensed, sans-serif;
  font-weight: 500;
  font-size: 8vw;
  line-height: 0.9em;
`;

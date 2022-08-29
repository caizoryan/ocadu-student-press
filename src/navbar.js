import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
export default function NavBar() {
  const animation = {
    hide: {
      y: "-200px",
    },
    show: {
      y: "0px",
      transition: {
        ease: "easeOut",
        delay: 2,
        // duration: 1,
      },
    },
  };
  return (
    <Wrapper variants={animation} animate='show' initial='hide'>
      <Logo>
        OCADU <br></br>
        STUDENT <br></br>
        PRESS
      </Logo>
    </Wrapper>
  );
}

const Wrapper = styled(motion.div)`
  z-index: 100;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  width: 100vw;
  height: 170px;
  color: white;
  background: rgb(0, 0, 0, 0);
`;

const Logo = styled.h1`
  padding: 50px 0 0 100px;
  font-family: urw-din-condensed, sans-serif;
  font-weight: 500;
  font-size: 2vw;
  line-height: 0.9em;
`;

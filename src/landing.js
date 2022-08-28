import React from "react";
import styled from "styled-components";

export default function Landing() {
  return (
    <Wrapper>
      <HeaderContainer>
        <Header>
          VOICE <br></br>
          <OfSpan></OfSpan> OF <br></br> <StudentSpan></StudentSpan> STUDENTS
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
const Wrapper = styled.div`
  display: flex;
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
const Header = styled.h1`
  font-size: 11vw;
  line-height: 0.9em;
  font-family: urw-din-condensed, sans-serif;
  font-weight: 700;
`;

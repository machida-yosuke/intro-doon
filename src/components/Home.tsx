import React from "react";
import logo from "images/logo.svg";

import styled from "styled-components";
const HomeWrap = styled.div`
  text-align: center;
`;

const HomeHeader = styled.div`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const HomeLogo = styled.img`
  height: 40vmin;
  pointer-events: none;

  @keyframes Home-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  animation: Home-logo-spin infinite 20s linear;
`;

const HomeLink = styled.a`
  color: #61dafb;
  font-weight: 700;
`;

function Home() {
  return (
    <HomeWrap>
      <HomeHeader>
        <HomeLogo src={logo} alt="logo" />
        <p>
          Edit <code>src/Home.tsx</code> and save to reload.
        </p>
        <HomeLink
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </HomeLink>
      </HomeHeader>
    </HomeWrap>
  );
}

export default Home;

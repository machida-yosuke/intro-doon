import React from "react";
import logo from "./logo.svg";
import styled from "styled-components";

const AppWrap = styled.div`
  text-align: center;
`;

const AppHeader = styled.div`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const AppLogo = styled.img`
  height: 40vmin;
  pointer-events: none;

  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  animation: App-logo-spin infinite 20s linear;
`;

const AppLink = styled.a`
  color: #61dafb;
  font-weight: 700;
`;

function App() {
  return (
    <AppWrap>
      <AppHeader>
        <AppLogo src={logo} alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <AppLink
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </AppLink>
      </AppHeader>
    </AppWrap>
  );
}

export default App;

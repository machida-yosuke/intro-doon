import React from "react";
import logo from "images/logo.svg";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { setName } from "stores/user";
import { useEffect } from "react";
import { RootState } from "stores";
import wait from "scripts/utiles/wait";

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

const Name = styled.div`
  color: #61dafb;
  font-weight: 700;
`;

function Home() {
  const dispatch = useDispatch();

  const name = useSelector((state: RootState) => state.user.name);

  useEffect(() => {
    const f = async () => {
      await wait(1000);
      dispatch(setName("machida"));
    };
    f();
    return;
  });

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
        <Name>{name}</Name>
      </HomeHeader>
    </HomeWrap>
  );
}

export default Home;

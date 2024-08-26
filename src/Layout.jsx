import * as React from "react";
import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";

export const RoutingStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #181818;
  border-bottom: 1px solid #282828;
  a {
    color: #fff;
    margin-right: 5px;
    text-decoration: none;
    font-weight: bold;
  }
`;
const ContentStyled = styled.div`
  padding: 2rem;
  background: #121212;
  height: calc(100vh - 4rem);
  overflow-y: scroll;
  p,
  h1,
  h3 {
    color: #fff !important;
    text-align: center;
  }
`;
const Layout = () => {
  return (
    <div>
      <RoutingStyled>
        <Link to={"/"}>All question</Link>
        <Link to={"/random"}>Random</Link>
        <Link to={"/allAnswer"}>All</Link>
      </RoutingStyled>
      <ContentStyled>{<Outlet />}</ContentStyled>
    </div>
  );
};

export default Layout;

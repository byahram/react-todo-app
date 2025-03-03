import React, { ReactNode } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { Header } from "../components/layout/Header";

interface LayoutProps {
  children: ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();

  const pageTitles: { [key: string]: string } = {
    "/": "Ahram's TodoList",
    "/register": "Sign Up",
    "/login": "Sign In",
  };
  const title = pageTitles[location.pathname] || "N/A";

  const isAuthPage =
    location.pathname === "/register" || location.pathname === "/login";

  return (
    <>
      {!isAuthPage ? <Header title={title} /> : ""}
      <MainContainer>{children}</MainContainer>
    </>
  );
};

const MainContainer = styled.main`
  position: relative;
  width: 100%;
  height: 100%;
`;

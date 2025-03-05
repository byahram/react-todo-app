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
      {!isAuthPage ? (
        <MainContainer>{children}</MainContainer>
      ) : (
        <AuthWrapper>
          <AuthContainer>{children}</AuthContainer>
        </AuthWrapper>
      )}
    </>
  );
};

const MainContainer = styled.main`
  position: relative;
  width: 100%;
  height: 100%;
`;

const AuthWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #8daece;
`;

const AuthContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
  height: 500px;
  margin: 0 auto;
  padding: 2rem 3rem;
  background: white;
  border-radius: 30px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

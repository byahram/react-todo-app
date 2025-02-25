import React, { ReactNode } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { Title } from "../components/layout/Title";

interface LayoutProps {
  children: ReactNode;
}

interface LayoutWrapperProps {
  $isAuthPage: boolean;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();

  const pageTitles: { [key: string]: string } = {
    "/": "Ahram's TodoList",
    "/register": "Sign Up",
    "/login": "Sign In",
  };
  const pageTitle = pageTitles[location.pathname] || "N/A";

  const isAuthPage =
    location.pathname === "/register" || location.pathname === "/login";

  return (
    <LayoutWrapper>
      <MainContainer $isAuthPage={isAuthPage}>
        <Title pageTitle={pageTitle} />
        {children}
      </MainContainer>
    </LayoutWrapper>
  );
};

const LayoutWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const MainContainer = styled.main<LayoutWrapperProps>`
  position: relative;
  width: ${({ $isAuthPage }) => ($isAuthPage ? "400px" : "80vw")};
  height: ${({ $isAuthPage }) => ($isAuthPage ? "500px" : "75vh")};
  margin: 0 auto;
  padding: 2rem 3rem;
  background: white;
  border-radius: 30px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;

  @media (max-width: 768px) {
    width: 85vw;
    height: 85vh;
    padding: 15px;
  }
`;

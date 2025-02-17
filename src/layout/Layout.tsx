import React, { ReactNode } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

interface LayoutProps {
  children: ReactNode;
}

interface LayoutWrapperProps {
  $isAuthPage: boolean;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const isAuthPage =
    location.pathname === "/register" || location.pathname === "/login";

  return (
    <Container>
      <LayoutWrapper $isAuthPage={isAuthPage}>{children}</LayoutWrapper>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LayoutWrapper = styled.main<LayoutWrapperProps>`
  width: ${({ $isAuthPage }) => ($isAuthPage ? "400px" : "60vw")};
  height: ${({ $isAuthPage }) => ($isAuthPage ? "500px" : "75vh")};
  margin: 0 auto;
  padding: 20px;
  background: white;
  border-radius: 30px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    width: 85vw;
    height: 85vh;
    padding: 15px;
  }
`;

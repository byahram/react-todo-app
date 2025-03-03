import React from "react";
import styled from "styled-components";
import { ThemeBtn } from "./ThemeBtn";

interface HeaderProps {
  title: string;
}

export const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <HeaderContainer>
      <TitleTxt>{title}</TitleTxt>
      <ThemeBtn />
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 3rem;
  color: #333;
  height: 4.5rem;
  text-align: center;
  box-shadow: 0 4px 6px -2px rgba(0, 0, 0, 0.1);
`;

const TitleTxt = styled.p`
  font-size: 1.8rem;
  font-weight: bold;
`;

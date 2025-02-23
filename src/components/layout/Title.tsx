import React from "react";
import styled from "styled-components";
import { ThemeBtn } from "./ThemeBtn";

interface TitleProps {
  pageTitle: string;
}

export const Title: React.FC<TitleProps> = ({ pageTitle }) => {
  return (
    <TitleContainer>
      <TitleTxt>{pageTitle}</TitleTxt>
      <ThemeBtn />
    </TitleContainer>
  );
};

const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  color: #333;
  padding: 0 0 1rem 0;
  text-align: center;

  @media (max-width: 1024px) {
    justify-content: space-between;
  }
`;

const TitleTxt = styled.p`
  font-size: 1.8rem;
  font-weight: bold;
`;

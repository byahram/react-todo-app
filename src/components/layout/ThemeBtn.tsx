import { useState } from "react";
import { AiOutlineMoon, AiOutlineSun } from "react-icons/ai";
import styled from "styled-components";

export const ThemeBtn = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };
  return (
    <Button onClick={toggleTheme}>
      {isDarkMode ? <AiOutlineMoon size={24} /> : <AiOutlineSun size={24} />}
    </Button>
  );
};

const Button = styled.button`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  width: 50px;
  height: 50px;
  padding: 0;
  border-radius: 50%;
  background: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 1024px) {
    position: static;
    position: static;
    width: auto;
    height: auto;
    border-radius: unset;
    box-shadow: none;

    &:hover {
      box-shadow: none;
    }
  }
`;

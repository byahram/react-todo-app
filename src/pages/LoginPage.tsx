import React from "react";
import styled from "styled-components";

export default function LoginPage() {
  return (
    <LoginContainer>
      <Box></Box>
    </LoginContainer>
  );
}

const LoginContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #9aa6b2;
`;

const Box = styled.div`
  position: relative;
  width: 400px;
  height: 60vh;
  margin: 0 auto;
  padding: 2rem 3rem;
  background: white;
  border-radius: 30px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

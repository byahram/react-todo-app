import React from "react";
import styled from "styled-components";
import { CateContainer } from "../components/category/CateContainer";

const TodoPage: React.FC = () => {
  return (
    <TodoContainer>
      <CateContainer />
    </TodoContainer>
  );
};

export default TodoPage;

const TodoContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

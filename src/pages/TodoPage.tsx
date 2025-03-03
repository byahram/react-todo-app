import React from "react";
import styled from "styled-components";
import { CateContainer } from "../components/category/CateContainer";
import { TodoContainer } from "../components/todo/TodoContainer";

const TodoPage: React.FC = () => {
  return (
    <Wrapper>
      <CateContainer />
      <TodoContainer />
    </Wrapper>
  );
};

export default TodoPage;

const Wrapper = styled.div`
  display: flex;
  gap: 2rem;
  height: 100%;
  margin: 0 3rem;
  padding: 3rem 0;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

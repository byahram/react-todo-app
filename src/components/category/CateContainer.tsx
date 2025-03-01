import styled from "styled-components";
import { CateList } from "./CateList";
import { AddCategory } from "./AddCategory";

export const CateContainer = () => {
  return (
    <CateWrapper>
      <CateTitle>Category</CateTitle>
      <CateList />
      <AddCategory />
    </CateWrapper>
  );
};

const CateWrapper = styled.div`
  width: 15%;
  height: fit-content;
  padding: 1rem;
  background: #f1f3f5;
  border-right: 2px solid #dee2e6;
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (max-width: 1024px) {
    width: calc(100% - 2rem);
    display: block;
  }
`;

const CateTitle = styled.h2`
  font-size: 18px;
  font-weight: bold;
  color: #343a40;
  padding-bottom: 8px;
  border-bottom: 2px solid #ced4da;

  @media (max-width: 1024px) {
    margin-bottom: 0.5rem;
    font-size: 1.1rem;
  }
`;

import React from "react";
import styled from "styled-components";
import { CateList } from "./CateList";
import { AddCategory } from "./AddCategory";

export const CateContainer = () => {
  return (
    <CateWrapper>
      <CateTitle>카테고리</CateTitle>
      <CateList />
      <AddCategory />
    </CateWrapper>
  );
};

const CateWrapper = styled.div`
  width: 15%;
  height: fit-content;
  padding: 20px;
  background: #f1f3f5;
  border-right: 2px solid #dee2e6;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const CateTitle = styled.h2`
  font-size: 18px;
  font-weight: bold;
  color: #343a40;
  padding-bottom: 8px;
  border-bottom: 2px solid #ced4da;
`;

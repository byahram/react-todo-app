import { useTodoStore } from "../../utils/zustand";
import styled from "styled-components";
import { CateItem } from "./CateItem";

export const CateList = () => {
  const categories = useTodoStore((state) => state.categories);
  return (
    <CategoryList>
      {categories.length > 0 ? (
        categories.map((category) => (
          <CateItem key={category.id} category={category} />
        ))
      ) : (
        <NoData>No Data</NoData>
      )}
    </CategoryList>
  );
};

const CategoryList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const NoData = styled.div`
  text-align: center;
  color: #868e96;
  font-size: 16px;
  padding: 12px;
  background: #f8f9fa;
  border-radius: 8px;
`;

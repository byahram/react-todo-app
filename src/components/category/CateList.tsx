import { useTodoStore } from "../../utils/zustand";
import styled from "styled-components";
import { CateItem } from "./CateItem";

export const CateList = () => {
  const categories = useTodoStore((state) => state.categories);

  return (
    <CategoryList>
      {categories.map((category) => (
        <CateItem key={category.id} category={category} />
      ))}
    </CategoryList>
  );
};

const CategoryList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media (max-width: 1024px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

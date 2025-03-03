import React from "react";
import styled from "styled-components";

interface FilteredBtnsProps {
  filter: string;
  setFilter: (value: string) => void;
}

export const FilteredBtns: React.FC<FilteredBtnsProps> = ({
  filter,
  setFilter,
}) => {
  const status = ["all", "todo", "doing", "done", "pending"];

  return (
    <FilterWrapper>
      {status.map((status) => (
        <FilterButton
          key={status}
          active={filter === status}
          onClick={() => setFilter(status)}
        >
          {status.toUpperCase()}
        </FilterButton>
      ))}
    </FilterWrapper>
  );
};

const FilterWrapper = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 0.5rem;
`;

const FilterButton = styled.button<{ active: boolean }>`
  padding: 8px 12px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background: ${({ active }) => (active ? "#121619" : "#e0e0e0")};
  color: white;
  font-size: 0.8rem;
`;

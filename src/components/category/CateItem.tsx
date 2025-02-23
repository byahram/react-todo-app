import React, { useState } from "react";
import styled from "styled-components";
import { FaListUl } from "react-icons/fa6";
import { MdEdit, MdDelete, MdMoreVert } from "react-icons/md";

interface Category {
  id: number;
  value: string;
}

interface CateItemProps {
  category: Category;
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
}

export const CateItem: React.FC<CateItemProps> = ({
  category,
  onEdit,
  onDelete,
}) => {
  const [showMoreBtn, setShowMoreBtn] = useState(false);
  const [showActionBtns, setShowActionBtns] = useState(false);

  const handleMouseEnter = () => {
    setShowMoreBtn(true);
  };

  const handleMouseLeave = () => {
    setShowMoreBtn(false);
  };

  const handleShowActionBtns = () => {
    setShowActionBtns((prev) => !prev);
  };

  return (
    <CateItemWrapper>
      <CategoryItem
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div>
          <FaListUl size={14} />
          <p>{category.value}</p>
        </div>
        {showMoreBtn && <MdMoreVert onClick={handleShowActionBtns} />}
      </CategoryItem>
      {showActionBtns && (
        <ActionButtons>
          <Button onClick={() => onEdit(category.id)}>
            <MdEdit />
          </Button>
          <Button onClick={() => onDelete(category.id)}>
            <MdDelete />
          </Button>
        </ActionButtons>
      )}
    </CateItemWrapper>
  );
};

const CateItemWrapper = styled.li`
  position: relative;
  list-style-type: none;
  /* margin-bottom: 10px; */
`;

const CategoryItem = styled.div`
  padding: 12px;
  cursor: pointer;
  background-color: #f0f0f0;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: background-color 0.3s ease;
  z-index: 1;

  &:hover {
    background-color: #e0e0e0;
  }

  > div {
    display: flex;
    align-items: center;
    p {
      margin-left: 6px;
    }
  }
`;

const ActionButtons = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  padding: 12px;
  background-color: #ff5c5c;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin: 5px 0;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e04f4f;
  }
`;

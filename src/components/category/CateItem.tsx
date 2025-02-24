import React, { useState } from "react";
import styled from "styled-components";
import { FaListUl } from "react-icons/fa6";
import { MdClose, MdMoreVert } from "react-icons/md";
import { useTodoStore } from "../../utils/zustand";

interface Category {
  id: number;
  value: string;
}

interface CateItemProps {
  category: Category;
}

export const CateItem: React.FC<CateItemProps> = ({ category }) => {
  const { editCategory, deleteCategory } = useTodoStore();
  const [showMoreBtn, setShowMoreBtn] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [newCategoryValue, setNewCategoryValue] = useState(category.value);

  const handleMouseEnter = () => setShowMoreBtn(true);
  const handleMouseLeave = () => setShowMoreBtn(false);
  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const handleEdit = () => {
    editCategory(category.id, newCategoryValue);
    setShowModal(false);
  };

  const handleDelete = () => {
    deleteCategory(category.id);
    setShowModal(false);
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
        {showMoreBtn && <MdMoreVert onClick={handleShowModal} />}
      </CategoryItem>

      {/* Modal */}
      {showModal && (
        <ModalOverlay onClick={handleCloseModal}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <ModalHeader>
              <Title>카테고리 수정</Title>
              <CloseButton onClick={handleCloseModal}>
                <MdClose size={20} />
              </CloseButton>
            </ModalHeader>
            <ModalInput
              type="text"
              value={newCategoryValue}
              onChange={(e) => setNewCategoryValue(e.target.value)}
            />
            <ButtonGroup>
              <ModalButton danger onClick={handleDelete}>
                삭제
              </ModalButton>
              <ModalButton onClick={handleEdit}>수정</ModalButton>
            </ButtonGroup>
          </ModalContent>
        </ModalOverlay>
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
  padding: 10px 12px;
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

// Modal Styles
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 5px;
  min-width: 300px;
  position: relative;
`;

const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
`;

const Title = styled.h3`
  margin: 0;
  font-size: 18px;
  font-weight: bold;
  color: #504b38;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: #504b38;
  cursor: pointer;
  padding: 0;
`;

const ModalInput = styled.input`
  width: calc(100% - 18px);
  padding: 8px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 8px;

  > * {
    width: 100%;
  }
`;

const ModalButton = styled.button<{ danger?: boolean }>`
  padding: 10px 15px;
  background-color: ${(props) => (props.danger ? "#504B38" : "#EBE5C2")};
  color: ${(props) => (props.danger ? "#F8F3D9" : "#504B38")};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) => (props.danger ? "#908a6b" : "#F8F3D9")};
  }
`;

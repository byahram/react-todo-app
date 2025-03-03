import React from "react";
import styled from "styled-components";

interface TodoInputProps {
  inputValue: string;
  setInputValue: (value: string) => void;
  handleAddTodo: () => void;
  categoryName: string;
}

export const TodoInput: React.FC<TodoInputProps> = ({
  inputValue,
  setInputValue,
  handleAddTodo,
  categoryName,
}) => {
  return (
    <InputWrapper>
      <InputBox
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder={`Create a new task for ${categoryName}'s To-Do List`}
      />
      <AddButton onClick={handleAddTodo}>Save</AddButton>
    </InputWrapper>
  );
};

const InputWrapper = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 1rem;
  height: 2.8rem;
`;

const InputBox = styled.input`
  flex: 1;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const AddButton = styled.button`
  padding: 8px 12px;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

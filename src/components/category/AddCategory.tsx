import React, { useRef } from "react";
import styled from "styled-components";
import { useTodoStore } from "../../utils/zustand";
import { FaPlus } from "react-icons/fa6";

export const AddCategory = () => {
  const addCateInputRef = useRef<HTMLInputElement>(null);
  const addCategory = useTodoStore((state) => state.addCategory);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const value = addCateInputRef.current?.value;
    if (!value || value === "") return;

    const newCategory = {
      id: Date.now(),
      value,
    };
    addCategory(newCategory);

    if (addCateInputRef.current) {
      addCateInputRef.current.value = "";
    }
  };

  return (
    <>
      <Form onSubmit={onSubmit}>
        <FaPlus size={18} />
        <Input type="text" ref={addCateInputRef} placeholder="Add Category" />
      </Form>
    </>
  );
};

const Form = styled.form`
  display: flex;
  align-items: center;
  padding: 12px;
  border-radius: 5px;
  opacity: 0.7;

  &:hover,
  &:focus-within {
    opacity: 1;
    background-color: #e0e0e0;
  }
`;

const Input = styled.input`
  flex: 1;
  margin-left: 6px;
  border: none;
  outline: none;
  background-color: transparent;
  font-size: 0.9rem;
`;

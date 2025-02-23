import React, { useRef } from "react";
import styled from "styled-components";
import { useTodoStore } from "../../utils/zustand";

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
    <Form onSubmit={onSubmit}>
      <Input type="text" ref={addCateInputRef} />
    </Form>
  );
};

const Form = styled.form`
  display: flex;
  margin-top: 10px;
  padding: 10px 15px;
  border-radius: 5px;
  opacity: 0.5;

  /* &:hover,
  &:focus-within {
    opacity: 1;
    background-color: ${({ theme }) => theme.hoverBgColor};
  } */
`;

const Input = styled.input`
  flex: 1;
  margin-left: 15px;
`;

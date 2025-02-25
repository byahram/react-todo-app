import React, { useState } from "react";
import styled from "styled-components";
import { useTodoStore } from "../../utils/zustand";

export const TodoContainer = () => {
  const { selectedCategory, todos, addTodo } = useTodoStore();
  const [inputValue, setInputValue] = useState("");

  const categoryName = selectedCategory?.value || "N/A";

  const todoList = todos.filter((todo) => todo.status === "todo");
  const doingList = todos.filter((todo) => todo.status === "doing");
  const doneList = todos.filter((todo) => todo.status === "done");
  const pendingList = todos.filter((todo) => todo.status === "pending");

  const handleAddTodo = () => {
    if (inputValue.trim() === "") return;

    const newTodo = {
      id: Date.now(),
      categoryId: selectedCategory?.id || 1,
      title: inputValue,
      status: "todo",
    };

    addTodo(newTodo);
    setInputValue("");
  };

  return (
    <TodoWrapper>
      <InputWrapper>
        <TodoInput
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Add a new task"
        />
        <AddButton onClick={handleAddTodo}>Save</AddButton>
      </InputWrapper>
      <KanbanBoard>
        <Column>
          <h3>Todo</h3>
          {todoList.map((task, index) => (
            <Task key={index}>
              <Checkbox type="checkbox" />
              {task.title}
            </Task>
          ))}
        </Column>
        <Column>
          <h3>Doing</h3>
          {doingList.map((task, index) => (
            <Task key={index}>
              <Checkbox type="checkbox" />
              {task.title}
            </Task>
          ))}
        </Column>
        <Column>
          <h3>Done</h3>
          {doneList.map((task, index) => (
            <Task key={index}>
              <Checkbox type="checkbox" />
              {task.title}
            </Task>
          ))}
        </Column>
        <Column>
          <h3>Pending</h3>
          {pendingList.map((task, index) => (
            <Task key={index}>
              <Checkbox type="checkbox" />
              {task.title}
            </Task>
          ))}
        </Column>
      </KanbanBoard>
    </TodoWrapper>
  );
};

const TodoWrapper = styled.div`
  width: 100%;
`;

const InputWrapper = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 1rem;
  height: 2.8rem;
`;

const TodoInput = styled.input`
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

const KanbanBoard = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  width: 100%;
  height: calc(100% - 9.5rem);
  overflow-y: scroll;
`;

const Column = styled.div`
  padding: 16px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background: #f8f9fa;
  display: flex;
  flex-direction: column;
  gap: 4px;
  height: calc((100% - 1rem) / 2); /* Ensures columns take equal height */
`;

const Task = styled.div`
  display: flex;
  align-items: center;
  padding: 4px 8px;
  gap: 8px;

  &:hover {
    background: white;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
`;

const Checkbox = styled.input`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

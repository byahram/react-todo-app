import { useState } from "react";
import styled from "styled-components";
import { useTodoStore } from "../../utils/zustand";
import { TodoInput } from "./TodoInput";
import { FilteredBtns } from "./FilteredBtns";
import { useModal } from "../hook/useModal";
import { Modal } from "../modal/Modal";

export const TodoContainer = () => {
  const { selectedCategory, categories, todos, addTodo, updateTodoStatus } =
    useTodoStore();
  const [inputValue, setInputValue] = useState("");
  const [filter, setFilter] = useState("all");
  const [editingId, setEditingId] = useState(null);
  const [editingValue, setEditingValue] = useState("");
  const { showModal, handleShowModal, handleCloseModal } = useModal();

  const selectedCategoryObj = categories.find(
    (c) => c.id === selectedCategory?.id
  );
  const categoryName = selectedCategoryObj ? selectedCategoryObj.value : "N/A";
  const newId =
    todos.length > 0 ? Math.max(...todos.map((todo) => todo.id)) + 1 : 1;

  const handleAddTodo = () => {
    if (inputValue.trim() === "") return;

    const newTodo = {
      id: newId,
      categoryId: selectedCategory?.id || 1,
      title: inputValue,
      status: "todo",
    };

    addTodo(newTodo);
    setInputValue("");
  };

  const handleEditTodo = (id, title) => {
    setEditingId(id);
    setEditingValue(title);
  };

  const handleSaveEdit = (id) => {
    if (editingValue.trim() === "") return;

    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, title: editingValue } : todo
    );

    useTodoStore.setState({ todos: updatedTodos });
    setEditingId(null);
  };

  const filteredTodos =
    filter === "all" ? todos : todos.filter((todo) => todo.status === filter);

  return (
    <TodoWrapper>
      <TodoInput
        inputValue={inputValue}
        setInputValue={setInputValue}
        handleAddTodo={handleAddTodo}
        categoryName={categoryName}
      />

      <FilteredBtns filter={filter} setFilter={setFilter} />

      <TodoList>
        {filteredTodos.map((todo) => (
          <TodoItem key={todo.id}>
            <TodoCheckbox type="checkbox" />
            {editingId === todo.id ? (
              <TodoEditInput
                type="text"
                value={editingValue}
                onChange={(e) => setEditingValue(e.target.value)}
                onBlur={() => handleSaveEdit(todo.id)}
                autoFocus
              />
            ) : (
              <TodoText onClick={() => handleEditTodo(todo.id, todo.title)}>
                {todo.title}
              </TodoText>
            )}
          </TodoItem>
        ))}
      </TodoList>

      {/* {showModal && (
        <Modal
          newCategoryValue={newCategoryValue}
          setNewCategoryValue={setNewCategoryValue}
          handleCloseModal={handleCloseModal}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        />
      )} */}
    </TodoWrapper>
  );
};

const TodoWrapper = styled.div`
  width: 100%;
`;

const TodoList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  /* 스크롤 커스텀 */
  &::-webkit-scrollbar {
    width: 6px; /* 스크롤바 너비 */
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1; /* 스크롤바 배경 */
    border-radius: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background: #bbb; /* 스크롤 핸들 색상 */
    border-radius: 8px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #888; /* 호버 시 색상 변경 */
  }
`;

const TodoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background: white;
`;

const TodoCheckbox = styled.input`
  cursor: pointer;
`;

const TodoText = styled.span`
  flex: 1;
  cursor: pointer;
`;

const TodoEditInput = styled.input`
  flex: 1;
  padding: 4px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

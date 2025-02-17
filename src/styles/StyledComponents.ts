import styled from "styled-components";

export const ErrorText = styled.p`
  color: red;
`;

export const LogoutButton = styled.button`
  cursor: pointer;
`;

export const TodoItem = styled.div`
  border: 1px solid lightblue;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TodoContent = styled.div`
  padding: 1em;
`;

export const AddItemRow = styled.div`
  margin-top: 50px !important;
  margin-bottom: 30px;
`;

export const InputBox = styled.input`
  padding: 10px;
  width: 100%;
  border: 1px solid lightblue;

  &:focus {
    outline: none;
  }
`;

export const Button = styled.button`
  background-color: lightblue;
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;

  &:hover {
    background-color: white;
    color: lightblue;
    border: 2px solid lightblue;
  }
`;

export const AddButton = styled(Button)`
  height: 40px;
  width: 100%;
`;

export const DeleteButton = styled(Button)`
  background-color: white;
  border: 2px solid lightblue;
  color: lightblue;
  margin: 10px;

  &:hover {
    background-color: lightblue;
    color: white;
  }
`;

export const ItemComplete = styled.div`
  background-color: gainsboro;
  color: white;
`;

export const LoginBox = styled.div`
  border: 1px solid lightblue;
  max-width: 600px;
  width: 100%;
  background-color: white;
  padding: 20px;
`;

export const Label = styled.label`
  font-weight: 700;
`;

export const DisplayCenter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const ButtonBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ButtonPrimary = styled(Button)`
  background-color: lightblue;
  color: white;
`;

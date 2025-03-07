import React, { useState } from "react";
import styled from "styled-components";
import api from "../utils/api";

interface ErrorMessageProps {
  bottom?: boolean;
}

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [chkPassword, setChkPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [chkPasswordError, setChkPasswordError] = useState("");

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setEmail(value);
    setEmailError(validateEmail(value) ? "" : "Invalid email format.");
  };

  const validatePassword = (password: string) => {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setPassword(value);
    setPasswordError(
      validatePassword(value)
        ? ""
        : "Password must be at least 8 characters long and include lowercase, uppercase, number, and special character."
    );
  };

  const handleChkPasswordChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;
    setChkPassword(value);
    setChkPasswordError(value === password ? "" : "Passwords do not match.");
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    try {
      const response = api.post("/users", { name, email, password });
      console.log("response :: ", response);
    } catch (error) {
      setError(
        error instanceof Error ? error.message : "An unexpected error occurred"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <RegisterPageContainer>
      <RegisterForm onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
        <p>Join us today and unlock exclusive features!</p>

        <FormGroup>
          <input
            type="text"
            placeholder="Full Name"
            onChange={(event) => setName(event.target.value)}
            required
          />
        </FormGroup>

        <FormGroup>
          <input
            type="email"
            placeholder="Email Address"
            onChange={handleEmailChange}
            required
          />
          {emailError && <ErrorMessage>{emailError}</ErrorMessage>}
        </FormGroup>

        <FormGroup>
          <input
            type="password"
            placeholder="Password"
            onChange={handlePasswordChange}
            required
          />
          {passwordError && <ErrorMessage>{passwordError}</ErrorMessage>}
        </FormGroup>

        <FormGroup>
          <input
            type="password"
            placeholder="Confirm Password"
            onChange={handleChkPasswordChange}
            required
          />
          {chkPasswordError && <ErrorMessage>{chkPasswordError}</ErrorMessage>}
        </FormGroup>

        {error && <ErrorMessage bottom>{error}</ErrorMessage>}

        <RegisterButton type="submit">Register</RegisterButton>
      </RegisterForm>
    </RegisterPageContainer>
  );
}

const RegisterPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  /* background-color: #f9f9f9;
  border: 1px solid #69665c;
  border-radius: 15px;
  padding: 20px; */
`;

const RegisterForm = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  width: 100%;
  max-width: 500px;

  h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    font-weight: 600;
  }

  p {
    font-size: 1.1rem;
  }
`;

const FormGroup = styled.div`
  width: 100%;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;

  &:first-of-type {
    margin-top: 2rem;
  }

  label {
    margin-bottom: 5px;
    font-weight: bold;
    color: #69665c;
  }

  input {
    width: auto;
    padding: 12px;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 1rem;
  }

  input:focus {
    border-color: #3e3c36;
    outline: none;
  }
`;

const ErrorMessage = styled.div<ErrorMessageProps>`
  color: red;
  font-size: 0.9rem;
  margin-bottom: ${(props) => (props.bottom ? "1rem" : "0")};
  margin-top: ${(props) => (props.bottom ? "0" : "4px")};
  padding-left: ${(props) => (props.bottom ? "0" : "0.5rem")};
`;

const RegisterButton = styled.button`
  width: 60%;
  padding: 12px;
  background-color: #9aa6b2;
  margin-top: 1rem;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1.2rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #707881;
  }
`;

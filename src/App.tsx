import { Route, Routes } from "react-router-dom";
import TodoPage from "./pages/TodoPage";
import GlobalStyle from "./GlobalStyle";
import { useCallback, useEffect } from "react";
import api from "./utils/api";
import { useTodoAppStore } from "./utils/zustand";
import Layout from "./layout/Layout";
import PrivateRoute from "./route/PrivateRoute";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";

function App() {
  const setCurrentUser = useTodoAppStore((state) => state.setCurrentUser);

  const getUser = useCallback(async () => {
    try {
      const token = sessionStorage.getItem("token");
      if (token) {
        const response = await api.get("/users/getUser");
        console.log("setCurrentUser : ", response.data.user);
        setCurrentUser(response.data.user);
      }
    } catch (error) {
      console.error("Error occurred while fetching getUser : ", error);
      setCurrentUser(null);
    }
  }, [setCurrentUser]);

  useEffect(() => {
    getUser();
  }, [getUser]);

  return (
    <>
      <GlobalStyle />
      <Layout>
        <Routes>
          <Route
            path="/"
            element={
              <PrivateRoute>
                <TodoPage />
              </PrivateRoute>
            }
          />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;

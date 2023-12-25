import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { router } from "./App";
import GlobalStyle from "./styles";
import { store } from "./store";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastContainer autoClose={1500} />
      <GlobalStyle />
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

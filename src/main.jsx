import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import GlobalStyle from "./styles/globalStyles";
import { ToastContainer } from "react-toastify";

import AppProvider from "./hooks";
import { Router } from "./routes";

import { standardTheme } from "./styles/themes/standard";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={standardTheme}>
      <AppProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>

        <GlobalStyle />

        <ToastContainer
          autoClose={2000}
          theme="colored"
        />
      </AppProvider>
    </ThemeProvider>
  </StrictMode>
);
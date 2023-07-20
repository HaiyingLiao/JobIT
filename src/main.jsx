<<<<<<< Updated upstream
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import theme from './theme';
import App from './app';
import './index.css';
import { ThemeProvider } from '@emotion/react';
const root = createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
=======
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import App from "./app.jsx";
import "./index.css";

const root = createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <App />
    <Toaster />
>>>>>>> Stashed changes
  </BrowserRouter>,
);

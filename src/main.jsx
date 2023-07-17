import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';

import theme from './theme';
import { App } from './app.jsx';
import './index.css';

const root = createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
   <ThemeProvider theme={theme}>
    <App />
    </ThemeProvider>
  </BrowserRouter>,
);

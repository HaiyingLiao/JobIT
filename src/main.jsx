import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
import { Toaster } from 'react-hot-toast';

import theme from './theme';
import App from './app.jsx';
import './index.css';

const root = createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <App />
      <Toaster />
    </ThemeProvider>
  </BrowserRouter>
);

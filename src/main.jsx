import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import ColorModeProvider from './Utils/ColorMode';
import { Toaster } from 'react-hot-toast';

import App from './app.jsx';
import './index.css';

const root = createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <ColorModeProvider>
      <App />
      <Toaster />
    </ColorModeProvider>
  </BrowserRouter>,
);

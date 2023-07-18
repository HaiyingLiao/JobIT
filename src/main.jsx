import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import theme from './theme';
import App from './app.jsx';
import './index.css';
console.log(theme);

const root = createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);

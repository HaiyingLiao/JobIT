import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import ColorModeProvider from './Utils/ColorMode';

import App from './app.jsx';
import './index.css';
import { store } from './App/store';

const root = createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <ColorModeProvider>
        <App />
      </ColorModeProvider>
    </BrowserRouter>
  </Provider>
);

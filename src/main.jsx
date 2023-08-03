import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import ColorModeProvider from './Utils/ColorMode';
import { Provider } from 'react-redux';

import App from './app.jsx';
import './index.css';
import { store } from './App/store';

const root = createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <ColorModeProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </ColorModeProvider>
  </BrowserRouter>
);

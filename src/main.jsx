import { Provider } from 'react-redux';
import ColorModeProvider from './Utils/ColorMode';
import { BrowserRouter } from 'react-router-dom';
import { store } from './App/store';
import { createRoot } from 'react-dom/client';

import App from './app.jsx';
import './index.css';

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

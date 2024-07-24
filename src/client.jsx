import { hydrateRoot } from 'react-dom/client';

import Html from './components/Html';
import App from './components/App';
import './style.css';

hydrateRoot(
  document,
  <Html>
    <App />
  </Html>
);

import { hydrateRoot } from 'react-dom/client';

import Html from '../components/Html';
import Counter from '../components/Counter';
import '../style.css';

hydrateRoot(
  document,
  <Html>
    <Counter />
  </Html>
);

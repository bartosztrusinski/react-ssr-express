import { hydrateRoot } from 'react-dom/client';

import Html from '../components/Html';
import SuspendedApp from './SuspendedApp';
import '../style.css';

hydrateRoot(
  document,
  <Html>
    <SuspendedApp tab='posts' />
  </Html>
);

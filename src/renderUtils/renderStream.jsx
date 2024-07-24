import { renderToPipeableStream } from 'react-dom/server';

import Html from '../components/Html';
import App from '../components/App';

export default async function renderStream(callback) {
  const { pipe } = renderToPipeableStream(
    <Html>
      <App />
    </Html>,
    {
      bootstrapScripts: ['bundle.js'],
      onShellReady() {
        callback(pipe);
      },
    }
  );
}

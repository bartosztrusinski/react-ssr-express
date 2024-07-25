import { renderToPipeableStream } from 'react-dom/server';

import Html from '../components/Html';
import SuspendedApp from '../components/SuspendedApp';

export default async function renderStream(callback) {
  const { pipe } = renderToPipeableStream(
    <Html>
      <SuspendedApp />
    </Html>,
    {
      bootstrapModules: ['client.js'],
      onShellReady() {
        callback(pipe);
      },
    }
  );
}

import { renderToPipeableStream } from 'react-dom/server';

import Html from './Html';

export default async function renderStream(callback) {
  const { pipe } = renderToPipeableStream(<Html />, {
    bootstrapModules: ['bundle.js'],
    onShellReady() {
      callback(pipe);
    },
  });
}

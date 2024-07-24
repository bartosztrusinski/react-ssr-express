import { renderToPipeableStream } from 'react-dom/server';

import Html from '../components/Html';

export default async function renderStream(callback) {
  const { pipe } = renderToPipeableStream(<Html />, {
    bootstrapScripts: ['bundle.js'],
    onShellReady() {
      callback(pipe);
    },
  });
}

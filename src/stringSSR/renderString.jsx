import { renderToString } from 'react-dom/server';

import Html from '../components/Html';
import Counter from '../components/Counter';

export default function renderString(callback) {
  const renderedHtml =
    '<!DOCTYPE html>' +
    renderToString(
      <Html>
        <Counter />
      </Html>
    ).replace('</head>', '<script src="client.js" defer></script></head>');

  callback(renderedHtml);
}

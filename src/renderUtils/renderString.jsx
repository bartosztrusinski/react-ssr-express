import { renderToString } from 'react-dom/server';

import Html from '../components/Html';
import App from '../components/App';

export default function renderString(callback) {
  const renderedHtml =
    '<!DOCTYPE html>' +
    renderToString(
      <Html>
        <App />
      </Html>
    ).replace('</head>', '<script src="bundle.js" defer></script></head>');

  callback(renderedHtml);
}

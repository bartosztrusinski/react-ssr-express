import { renderToString } from 'react-dom/server';

import Html from './Html';

export default function renderString() {
  const renderedHtml =
    '<!DOCTYPE html>' +
    renderToString(<Html />).replace(
      '</head>',
      '<script type="module" src="bundle.js"></script></head>'
    );

  return renderedHtml;
}

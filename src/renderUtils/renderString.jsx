import { renderToString } from 'react-dom/server';

import Html from '../components/Html';

export default function renderString(callback) {
  const renderedHtml =
    '<!DOCTYPE html>' +
    renderToString(<Html />).replace(
      '</head>',
      '<script src="bundle.js" defer></script></head>'
    );

  callback(renderedHtml);
}

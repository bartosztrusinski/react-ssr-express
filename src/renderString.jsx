import { renderToString } from 'react-dom/server';

import Html from './Html';

export default function renderString() {
  const app = renderToString(<Html />).replace(
    '</head>',
    `<link rel="stylesheet" href="bundle.css" />
    <script type="module" src="bundle.js"></script>
    </head>`
  );
  const html = `<!DOCTYPE html>${app}`;

  return html;
}

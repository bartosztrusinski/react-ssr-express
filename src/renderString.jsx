import fs from 'fs/promises';
import path from 'path';

import { renderToString } from 'react-dom/server';
import App from './App';

export default async function renderString() {
  const htmlFile = await fs.readFile(
    path.resolve('./public/index.html'),
    'utf-8'
  );
  const renderedApp = htmlFile.replace(
    '<div id="root"></div>',
    `<div id="root">${renderToString(<App />)}</div>`
  );

  return renderedApp;
}

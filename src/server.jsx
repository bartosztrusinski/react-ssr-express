import fs from 'fs/promises';
import path from 'path';
import express from 'express';

import { renderToString } from 'react-dom/server';
import App from './App';

const app = express();
const PORT = 3000;

app.get('/', async (req, res) => {
  try {
    const htmlFile = await fs.readFile(
      path.resolve('./public/index.html'),
      'utf-8'
    );
    const renderedApp = htmlFile.replace(
      '<div id="root"></div>',
      `<div id="root">${renderToString(<App />)}</div>`
    );

    res.send(renderedApp);
  } catch (error) {
    console.error(error);
    res.status(500).send('<h1>500</h1>Internal Server Error');
  }
});

app.use(express.static(path.join(__dirname, '..', 'dist')));

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

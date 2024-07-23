import path from 'path';
import express from 'express';

import renderString from './renderString';

const app = express();
const PORT = 3000;

app.get('/', async (req, res) => {
  try {
    const html = renderString();
    res.send(html);
  } catch (error) {
    console.error(error);
    res.status(500).send('<h1>500</h1>Internal Server Error');
  }
});

app.use(express.static(path.join(__dirname, '..', 'dist')));

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

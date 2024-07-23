import path from 'path';
import express from 'express';

import renderString from './renderString';

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  renderString((html) => res.send(html));
});

app.use(express.static(path.join(__dirname, '..', 'dist')));

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

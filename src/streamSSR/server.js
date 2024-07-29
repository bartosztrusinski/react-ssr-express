import path from 'path';
import express from 'express';

import renderStream from './renderStream';

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  renderStream((pipe) => {
    res.setHeader('content-type', 'text/html');
    pipe(res);
  });
});

app.use(express.static(path.join(__dirname, '..', 'dist')));

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

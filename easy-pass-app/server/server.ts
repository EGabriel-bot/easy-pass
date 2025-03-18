const express = require('express');

const app = express();
const port = 3000

app.get('/', (req, res, next) => {
  res.send('hello')
  next();
});

app.listen(3000, () => console.log('Example app is listening on port 3000.'));
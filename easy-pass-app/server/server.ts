const express = require('express');

const app = express();
const port = process.env.PORT || 8080;

app.get('/', (req, res, next) => {
  res.send('hello')
  next();
});

app.listen(3000, () => console.log('Example app is listening on port 3000.'));
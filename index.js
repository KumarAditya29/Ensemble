// index.js
const express = require('express');
var app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello World! This code has some issues.');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
});

// index.js (corrected)

const express = require('express');
const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello World! This code has some issues.');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
const express = require('express');
const PORT = 80;
const app = express();

app.get('/', (req, res) => {
  res.send('HeLLo World2');
});

app.listen(PORT, () => {
  console.log(`Listening to request on ${PORT}`);
});

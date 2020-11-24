const express = require('express');
const app = express();
const path = require('path');
require('./pusher')

const PORT = 3000;

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(PORT, () => console.log(`Realtime chart app listening on port 3000! http://localhost:${PORT}`));
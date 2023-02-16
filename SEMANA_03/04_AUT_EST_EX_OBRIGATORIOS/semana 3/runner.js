const express = require('express'); 
const runner = express();

const hostname = '127.0.0.1';
const port = 3020;
runner.use(express.static("."));

runner.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
import express from 'express';

const server = express();
server.get('/', (req, res) => {
  res.send("<h1>hello World</h1>");
})

export default server;
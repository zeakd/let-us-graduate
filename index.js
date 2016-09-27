import server from './app/server';
const port = 3000;
server.listen(port, () => {
  console.log(`listen on ${port}...`);
})
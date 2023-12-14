const jsonServer = require('json-server');
const cache = require('apicache').middleware;
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(cache('5 minutes')); // Cache for 5 minutes
server.use(router);
server.listen(3000, () => {
  console.log('JSON Server is running');
});

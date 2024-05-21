const jsonServer = require("json-server"); // importing json-server label
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const port = process.env.Port || 8080; // chose port from here like 

server.use(middlewares);
server.use(router);

server.Listen(port);

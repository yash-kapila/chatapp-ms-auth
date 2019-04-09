const http = require('http');

const routes = require('./src/routes/index');

const PORT = process.env.PORT || 3000;

const server = http.createServer(routes);

server.listen(PORT, err => {
  if (err) {
    return console.log(`Couldn't create server at specified port`);
  }

  console.log(`Server is now listening at port ${PORT}`);
});

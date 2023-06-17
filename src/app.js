const http = require("http");
const getUsers = require("./modules/users");
const url = require("url");
const hostname = "127.0.0.1";
const port = 3003;

const server = http.createServer((request, response) => {
  const query = url.parse(request.url, true).query;

  if (query.hello !== undefined) {
    if (query.hello === "") {
      response.status = 400;
      response.write("Enter a name");
      response.end();
    } else {
      response.status = 200;
      response.write(`Hello, ${query.hello}!`);
      response.end();
    }
  } else if (query.users) {
    response.status = 200;
    response.statusMessage = "OK";
    response.header = "Content-Type: application/json";
    response.write(getUsers());
    response.end();
  } else if (!query) {
    response.status = 200;
    response.write("Hello, World!");
    response.end();
  } else {
    response.status = 500;
    response.write("");
  }
});

server.listen(
  (port,
  hostname,
  () => {
    console.log(`HTTP Server listening at http://${hostname}:${port}/`);
  })
); 
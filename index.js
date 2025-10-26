const http = require("http");
const host = '127.0.0.1';
const port = 3002;

// request = data masuk dari luar
// response = data keluar dari sistem

const server = http.createServer(function (request, response) {
  response.end("Hello World!");
});

server.listen(port, host, function () {
  console.log(`Server berjalan pada http://${host}:${port}`);
});

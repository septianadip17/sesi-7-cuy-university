const http = require("http");
const host = "127.0.0.1";
const port = 3002;
const rupiah = require("rupiah-format");

// request = data masuk dari luar
// response = data keluar dari sistem

const server = http.createServer(function (request, response) {
  const nama = "iay kane";
  const uang = 50000000;
  const jajan = 15000000;
  const sisa = uang - jajan;

  const sisaRupiah = rupiah.convert(sisa)

  const hasil = `Halo nama saya ${nama}. Saya jajan sebanyak Rp ${jajan}. sisa uang jajan saya adalah Rp ${sisaRupiah}`;

  response.statusCode = 200;
  response.end(hasil);
});

server.listen(port, host, function () {
  console.log(`Server berjalan pada http://${host}:${port} `);
});

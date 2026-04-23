const http = require('http');

const server = http.createServer((req, res) => {
  res.write(" Node.js DevOps Project Running");
  res.end();
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
  console.log("Server running on port 3000");
});

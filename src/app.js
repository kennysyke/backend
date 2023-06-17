const http = require("http");

const server = http.createServer(requestListener:(request:, response:) => {

})

server.listen(port: 3000, hostname: () => {
    console.log("Server is created on http://127.0.0.1:3000")
})
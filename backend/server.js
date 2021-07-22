const http = require('http')
const app = require('./app')
const rtc = require('./middleware/rtc')
const server = http.createServer(app)
const io = require("socket.io")(server, {
	cors: {
	  origin: '*',
	  methods: ["GET", "POST"],
	}
  });
const port = 3001
const { useDatabase } = require("./database");
const { NODE_EXTERNAL_PORT, HOSTMONGO, MONGOBD } = require("./config");

useDatabase(HOSTMONGO, MONGOBD)

io.on("connection",(socket) => rtc(socket, io) );


server.listen(NODE_EXTERNAL_PORT, () => { console.log(`Server is running on port: ${NODE_EXTERNAL_PORT}\n`) });


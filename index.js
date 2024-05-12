require('dotenv').config()
const express = require('express')
const cors = require('cors')
// const http = require('http');
// const socketIo = require('socket.io');
const router =require('./Routes/router')
require('./DB/connection')

//creating express server
const EAserver = express()

// const server = http.createServer(EAserver);
// const io = socketIo(server,{
//     cors:{
//         origin:"*"
//     }
// });
// cors 
EAserver.use(cors())
EAserver.use(express.json())
EAserver.use(router)
EAserver.use('/uploads',express.static('./uploads'))

const PORT = 3000 || process.env.PORT

EAserver.listen(PORT,()=>{
    console.log(`Profect Failr server started at port ${PORT}`);
})
// const SPORT = process.env.SPORT || 5000;
// server.listen(SPORT, () => {
//     console.log(`Server running on port ${SPORT}`);
// });

//websocket
// io.on('connection',(socket)=>{
//     console.log("a user is connected");
//     socket.on("currentBid",(data)=>{
//         console.log(data);
//         io.emit("bidValue",data)
//     })
// })

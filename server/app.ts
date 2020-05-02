import express from 'express'
import http from 'http'
import createIO from 'socket.io'

const port = process.env.PORT || 3000
const index = require('./routes/index')

const app = express()
app.use(index)

const server = http.createServer(app)
server.listen(port)

const io = createIO(server)

io.on('connection', socket => {
    socket.emit('news', { data: 'server req' })
    socket.on('my other event', data => {
        console.log(data)
    })
})

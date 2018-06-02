const port = 3000
const uuid = require('uuid/v1')
const express = require('express')
const path = require('path')
var app = express()
app.use(express.static(path.join(__dirname, 'static')))

var server = require('http').createServer(app)
var io = require('socket.io')(server)

const veryBadCodeThatCannotBeChanged = function (requestId, input, cb) {
  if (input.length > 200000) {
    return cb(null, {requestId: requestId})
  }

  let temp = input.map(function (element) {
    return element + element
  })

  setTimeout(function () {
    veryBadCodeThatCannotBeChanged(requestId, input.concat(temp), cb)
  }, 100)
}

io.on('connection', function (socket) {
  socket.on('start', function () {
    let requestId = uuid()
    console.log('recieved request', requestId)
    console.time(requestId)
    veryBadCodeThatCannotBeChanged(requestId, ['some random data in here - some random data in here - some random data in here - some random data in here - some random data in here - some random data in here - some random data in here - some random data in here - some random data in here - some random data in here - some random data in here - some random data in here - '], function (err, result) {
      if (err) {
        console.log('error', err)
      }
      console.log('emitting request', result.requestId)
      console.timeEnd(result.requestId)
      socket.emit('completed', 'hello')
    })

    socket.emit('received', requestId)
  })
})

server.listen(port, function () {
  console.log('server listetning on port', port)
})

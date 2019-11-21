const http = require('http')
const url = require('url')

http.createServer(function (req, res) {
  res.setHeader('Access-Control-Request-Method', '*')
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.writeHead(200, { 'Content-Type': 'application/json' })
  res.write(url.URL(req).query)
  res.end()
}).listen(2202)

const http = require('http')
const url = require('url')
const fs = require('fs')

http.createServer(function (req, res) {
  res.setHeader('Access-Control-Request-Method', '*')
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.writeHead(200, { 'Content-Type': 'application/json' })
  const requestURL = new url.URL(req.url, 'http://localhost:2202')

  if (requestURL.searchParams.get('action') === 'feed') {
    let file = fs.readFileSync('data/log.json')
    console.log(file)
    file = JSON.parse(file)
    console.log(file)
    if (requestURL.searchParams.get('name')) {
      file.push({ name: requestURL.searchParams.get('name'), text: requestURL.searchParams.get('text') })

      fs.writeFile('data/log.json', JSON.stringify(file), (err) => {
        if (err) {
          console.log(err)
        }
      })
    }

    res.write(JSON.stringify(file))
  } else {
    res.write(requestURL.href)
  }

  res.end()
}).listen(2202)

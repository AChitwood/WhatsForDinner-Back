var express = require('express')
var json = require('express-json');
var app = express()

app.use(json())

app.get('/', function (req, res) {
  res.json({
      helloWorld : 'Hello World!'
  });
})


app.get('/heyMax', function (req, res) {
  res.json({
      maxVariable : 'Hello Max'
  });
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
var express = require('express')
var json = require('express-json');
var app = express()

app.configure(function(){
  app.use(express.bodyParser());
  app.use(express.methodOverride());
})

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

app.listen(3001, function () {
  console.log('Example app listening on port 3001!')
})

//This function should be the last called with app.use
//To use, 'throw new Error('oops')'
app.use((err, request, response, next) => {  
  // log the error, for now just console.log
  console.log(err)
  response.status(500).send('Something broke!')
})
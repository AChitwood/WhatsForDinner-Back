require('./app/ingredient/ingredient.js');
require('./app/recipe/recipe.js');
require('./app/user/user.js');

var restful = require('node-restful'),
   //mongoose = restful.mongoose,
   restify = require('restify');


//Connect to mongo
//mongoose.connect('mongodb://localhost/restful');



//............  Create A server
var server = restify.createServer({
  name: "WhatsForDinner",
  version: "1.0.0"
});
server.use(restify.acceptParser(server.acceptable));
server.use(restify.queryParser());
server.use(restify.bodyParser());
server.use(restify.fullResponse());



//............  Setup Controllers
var controllers = {};
controllers['ingredient'] = require('./app/ingredient/index.js');



//............  Endpoints
server.get('/ingredient/:id', controllers.ingredient.getIngredient)



//............  Server Endpoint
server.get('/', function (req, res) {
  res.json({
      helloWorld : 'Hello World!',
      serverInfo : "You are talking to the WhatsForDiner web service"
  });
})



//............  Server Start
server.listen(3001, function () {
  console.log('App listening on port 3001!')
})



//............  Error Handling
server.use((err, request, response, next) => {  
  console.log(err)
  response.status(500).send('Something broke!')
})
//This function should be the last called with app.use
//To use, 'throw new Error('oops')'
// This is the main file of our chat app. It initializes a new
// express.js instance, requires the config and routes files
// and listens on a port. Start the application by running
// 'node app.js' in your terminal


var express = require('express'),
  app = express();

// This is needed if the app is run on heroku:
var port = process.env.PORT || 8080;


// Require the configuration and the routes files, and pass
// the app and io as arguments to the returned functions.

// Set .html as the default template extension
app.set('view engine', 'html');

// Make the files in the public folder available to the world
app.use(express.static(__dirname + '/dist'));

app.get('/', function (req, res) {
  res.render('./dist/index.html');
});

app.listen(port, () => console.log(`App Running on ${port}!`))

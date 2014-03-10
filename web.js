var fs = require('fs');
var express = require('express');
var app = express();
app.use(express.logger());

app.get('/', function(request, response) {
  var msg = "woopee";

  fs.readFileSync('index.html', function (err, data) {
    if (err) throw err;
    msg = data.toString('utf-8');
    console.log(msg);
  });

  response.send(msg);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

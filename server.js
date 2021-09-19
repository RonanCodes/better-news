// TODO: Move this to a simple bucket
const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname + '/dist/apps/better-news-app'));
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/apps/better-news-app/index.html'));
});

const port  = process.env.PORT || 4200;
app.listen(port);
console.log(`Listening on port ${port}...`);
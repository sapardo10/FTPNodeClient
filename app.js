/*jshint esversion: 6 */
const express = require('express');
const app = express();

app.use('/static', express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.redirect('/static/index.html');
});

app.listen(3002, () => {
  console.log('listening on port 3002');
});

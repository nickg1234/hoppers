const express = require('express');
const app = express();

// required to parse the body of a request (post)
var bodyParser = require('body-parser');
app.use(bodyParser.json({ type: 'application/json' }));

app.use(express.static('client/public'));

app.get('/', function (req, res) {
  res.sendFile('index.html', {root: './client/views' })
})

app.get('/l2', function (req, res) {
  res.sendFile('level2.html', {root: './client/views' })
})

app.get('/l3', function (req, res) {
  res.sendFile('level3.html', {root: './client/views' })
})

app.get('/l4', function (req, res) {
  res.sendFile('level4.html', {root: './client/views' })
})

app.get('/l5', function (req, res) {
  res.sendFile('level5.html', {root: './client/views' })
})
app.get('/l6', function (req, res) {
  res.sendFile('level6.html', {root: './client/views' })
})

app.get('/l7', function (req, res) {
  res.sendFile('level7.html', {root: './client/views' })
})

app.get('/l8', function (req, res) {
  res.sendFile('level8.html', {root: './client/views' })
})

app.listen(1337, () => console.log('Hoppers listening on port 1337!'));
const express = require('express');
const path = require('path');
const ejs = require('ejs');
const app = express();

//Template Engine
app.set('view engine', 'ejs');

//Middleware
app.use(express.static('public'));

app.get('/', (req, res) => {
  //res.sendFile(path.resolve(__dirname, "views/index.html"));
  res.render('index');
});
app.get('/about', (req, res) => {
  res.render('about');
});
app.get('/add_post', (req, res) => {
  res.render('add_post');
});
app.get('/post', (req, res) => {
  res.render('post');
});

const port = 3000;
app.listen(port, () => {
  console.log(`Sunucu ${port} portunda başlatılıyor..`);
});
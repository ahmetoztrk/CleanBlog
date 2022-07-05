const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const ejs = require('ejs');
const Blog = require('./models/Blogs');
const methodOverride = require('method-override');
const blogController = require('./controllers/blogControllers');
const pageController = require('./controllers/pageControllers');

const app = express();

//connect DB
mongoose.connect('mongodb+srv://ahmet:2lgy66at2EBptRs6@cluster0.5q8ru77.mongodb.net/cleanblog-db?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(()=> {
  console.log("DB Connected");
}).catch((err) => {
  console.log(err);
})

//Template Engine
app.set('view engine', 'ejs');

//Middleware
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method', { methods: ['POST', 'GET'] }));

//Routes
app.get('/', blogController.getAllBlogs);
app.get('/blogs/:id', blogController.getBlog);
app.get('/about', pageController.getAboutPage);
app.get('/add_post', pageController.getAddPostPage);
app.get('/post', pageController.getPostPage);
app.post('/blogs', blogController.createBlog);
app.get('/blogs/edit/:id', pageController.getEditPage);
app.put('/blogs/:id', blogController.updateBlog);
app.delete('/blogs/:id', blogController.deleteBlog);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Sunucu ${port} portunda başlatılıyor..`);
});

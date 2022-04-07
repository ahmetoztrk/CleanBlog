const Blog = require('../models/Blogs');

exports.getAboutPage = (req, res) => {
  res.render('about');
};

exports.getAddPostPage = (req, res) => {
  res.render('add_post');
};
exports.getPostPage = (req, res) => {
  res.render('post');
};
exports.getEditPage = async (req, res) => {
  const blog = await Blog.findOne({ _id: req.params.id });
  res.render('edit_post', {
    blog,
  });
};

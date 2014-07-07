var blog = require('../models/blog');

exports.index = function(req, res) {
  global.i18n.setLanguage(req.params.lang);

  blog.getAll(function(error, result) {
    if (result.length > 0) {
      res.render('modules/blog/posts', { posts: result });
    } else {
      res.render('modules/error/404');
    }
  });
};

exports.date = function(req, res) {
  global.i18n.setLanguage(req.params.lang);
  
  blog.getPostByDate(req.params, function(error, result) {
    if (result.length > 0) {
      res.render('modules/blog/posts', { posts: result });
    } else {
      res.render('modules/error/404');
    }
  });
};

exports.slug = function(req, res) {
  global.i18n.setLanguage(req.params.lang);
  
  blog.getPostBySlug(req.params, function(error, result) {
    if (result.length > 0) {
      res.render('modules/blog/post', { posts: result });
    } else {
      res.render('modules/error/404');
    }
  });
};
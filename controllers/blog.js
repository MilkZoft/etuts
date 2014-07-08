var blog = require('../models/blog');

exports.index = function(req, res) {
  global.i18n.setLanguage(req.params.lang);

  blog.getAll(req.params, function(total, result) {
    if (result.length > 0) {
      if (total > global.config.vars.ppp) {
        var url = '';

        if (typeof(req.params.page) !== 'undefined') {
          var start = (req.params.page * global.config.vars.ppp) - global.config.vars.ppp;
        } else {
          var start = 0;
       }

        var pagination = global.pagination.paginate(total, global.config.vars.ppp, start, url, global.config.vars.ppp);
      }

      res.render('modules/blog/posts', { posts: result, pagination: pagination });
    } else {
      res.render('modules/error/404');
    }
  });
};

exports.category = function(req, res) {
  global.i18n.setLanguage(req.params.lang);
  
  blog.getPostsByCategory(req.params, function(error, result) {
    if (typeof(result) !== 'undefined' && result.length > 0) {
      res.render('modules/blog/posts', { posts: result });
    } else {
      res.render('modules/error/404');
    }
  });
};

exports.date = function(req, res) {
  global.i18n.setLanguage(req.params.lang);
  
  blog.getPostsByDate(req.params, function(error, result) {
    if (typeof(result) !== 'undefined' && result.length > 0) {
      res.render('modules/blog/posts', { posts: result });
    } else {
      res.render('modules/error/404');
    }
  });
};

exports.slug = function(req, res) {
  global.i18n.setLanguage(req.params.lang);
  
  blog.getPostBySlug(req.params, function(error, result) {
    if (typeof(result) !== 'undefined' && result.length > 0) {
      res.render('modules/blog/post', { posts: result });
    } else {
      res.render('modules/error/404');
    }
  });
};
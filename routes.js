module.exports = function(app) {
  var languages = global.config.application.languages,
      defaultController = require('./controllers/' + global.config.application.controllers.default);
      blog = require('./controllers/blog');

  // Index:
    app.get('/', defaultController.index);
    app.get('/:lang(' + languages + ')', defaultController.index);

  // Blog:
    app.get('/:lang(' + languages + ')/:module(blog)/', blog.index);
    app.get('/:lang(' + languages + ')/:module(blog)/category/:category', blog.index);
    app.get('/:lang(' + languages + ')/:module(blog)/category/:category/page/:page([0-9])', blog.index);
    app.get('/:lang(' + languages + ')/:module(blog)/page/:page([0-9])', blog.index);
    app.get('/:lang(' + languages + ')/:module(blog)/:year([0-9]{4})/', blog.index);
    app.get('/:lang(' + languages + ')/:module(blog)/:year([0-9]{4})/:month([0-9]{2})/', blog.index);
    app.get('/:lang(' + languages + ')/:module(blog)/:year([0-9]{4})/:month([0-9]{2})/:day([0-9]{2})/', blog.index);
    app.get('/:lang(' + languages + ')/:module(blog)/:year([0-9]{4})/:month([0-9]{2})/:day([0-9]{2})/:slug', blog.slug);

  // Bookmarks:
    app.get('/:lang(' + languages + ')/bookmarks', blog.index);

  // Codes:
    app.get('/:lang(' + languages + ')/codes', blog.index);

  // Feedback:
    app.get('/:lang(' + languages + ')/feedback', blog.index);

  // Forums:
    app.get('/:lang(' + languages + ')/forums', blog.index);
    app.get('/:lang(' + languages + ')/forums/:category', blog.index);
    app.get('/:lang(' + languages + ')/forums/:category/:forum', blog.index);
    app.get('/:lang(' + languages + ')/forums/:category/:forum/:id/:slug', blog.index);
    app.get('/:lang(' + languages + ')/forums/:category/:forum/:id/:slug/edit/', blog.index);
    app.get('/:lang(' + languages + ')/forums/:category/:forum/:id/:slug/delete/:postId/:forumId/', blog.index);
    
  // Users:
    app.get('/:lang(' + languages + ')/users/login', blog.index);
    app.get('/:lang(' + languages + ')/users/register', blog.index);
    app.get('/:lang(' + languages + ')/users/recover', blog.index);
    app.get('/:lang(' + languages + ')/users/service/facebook/login', blog.index);
    app.get('/:lang(' + languages + ')/users/service/twitter/login', blog.index);

    app.post('/:lang(' + languages + ')/users/login', blog.index);
    app.post('/:lang(' + languages + ')/users/register', blog.index);
    app.post('/:lang(' + languages + ')/users/recover', blog.index);
}
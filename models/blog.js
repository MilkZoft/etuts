var Model = require('../system/model'),
    Blog = new Model(),
    fields = 'blog_posts.id, title, blog_posts.slug, excerpt, content, author, mainImage, createdAt, day, month, year, blog_posts.language';

function executeQuery(sql, callback, fn) {
  Blog.query(sql, function (error, result) {
    fn(result, callback);
  });
}

module.exports = {
  getAll: function(params, callback) {
    var sql = '',
        language = global.lang.current,
        page = (typeof(params.page) !== 'undefined') ? params.page : 0;
    
    sql = "CALL getPosts('" + language + "', " + page + ", " + global.config.vars.ppp + ");";
    
    executeQuery(sql, callback, function(result, callback) {
      var total = result[0][0].total,
          posts = result[1];
      
      callback(total, posts);
    });
  },

  getPostsByCategory: function(params, callback) {
    var sql = '',
        language = global.lang.current,
        page = (typeof(params.page) !== 'undefined') ? params.page : 0;
        sql = "CALL getPostsByCategory('" + params.category + "', '" + language + "', " + page + ", " + global.config.vars.ppp + ")";
  
    executeQuery(sql, callback, function(result, callback) {
      var total = result[0][0].total,
          posts = result[1];
     
      callback(total, posts);
    });
  },

  getPostsByDate: function(params, callback) {
    var language = global.lang.current,
        sql = "SELECT " + fields + 
              " FROM blog_posts " + 
              " WHERE year = '" + params.year + "'";

    if (typeof(params.month) !== 'undefined' && typeof(params.day) !== 'undefined') {
      sql += " AND month = '" + params.month + "'" +
             " AND day = '" + params.day + "'";
    } else if(typeof(params.month) !== 'undefined') {
      sql += " AND month = '" + params.month + "'";
    }

    sql +=  " AND language = '" + language + "'" + 
            " AND situation = 'published'" +
            " ORDER BY id DESC" +
            " LIMIT 0, 12";
       
    Blog.query(sql, callback);
  },

  getPostBySlug: function(params, callback) {
    var language = global.lang.current,
        sql = "SELECT " + fields + 
              " FROM blog_posts " + 
              " WHERE slug = '" + params.slug + "'" +
              " AND year = '" + params.year + "'" +
              " AND month = '" + params.month + "'" +
              " AND day = '" + params.day + "'" + 
              " AND language = '" + language + "'" + 
              " AND situation = 'published'" +
              " ORDER BY id DESC" +
              " LIMIT 0, 12";
       
    Blog.query(sql, callback);
  }
};
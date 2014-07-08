var Model = require('../system/model'),
    Blog = new Model();
    fields = 'blog_posts.id, title, blog_posts.slug, excerpt, content, author, mainImage, createdAt, day, month, year, blog_posts.language';

module.exports = {
  getAll: function(params, callback) {
    var sql = '',
        language = global.lang.current,
        total = 100,
        url = '',
        page = 0;

    if (typeof(params.page) !== 'undefined') {
      page = params.page;
    } 
    
    sql = "CALL getPosts('" + language + "', " + page + ", " + global.config.vars.ppp + ");";
    
    function executeQuery(sql, fn) {
      Blog.query(sql, function (error, result) {
        fn(result, callback);
      });
    }

    executeQuery(sql, function(result, callback) {
      var total = result[0][0].total,
          posts = result[1];
      
      callback(total, posts);
    });
  },

  getPostsByCategory: function(params, callback) {
    var language = global.lang.current,
        categories = ", GROUP_CONCAT(blog_categories.category SEPARATOR ', ') AS categories",
        sql = "SELECT " + fields + categories +
              " FROM blog_posts " + 
              " LEFT JOIN blog_re_categories2posts ON (blog_re_categories2posts.postId = blog_posts.id)" +
              " LEFT JOIN blog_categories ON (blog_categories.id = blog_re_categories2posts.categoryId)" +
              " WHERE blog_categories.slug = '" + params.category + "'" +
              " AND blog_posts.language = '" + language + "'" + 
              " AND blog_categories.language = '" + language + "'" + 
              " GROUP BY blog_posts.id"
              " ORDER BY blog_posts.id DESC" +
              " LIMIT 0, 12";
        console.log(sql);
       
    Blog.query(sql, callback);
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
var Model = require('../system/model'),
    Blog = new Model();
    fields = 'blog_posts.id, title, blog_posts.slug, excerpt, content, author, mainImage, createdAt, day, month, year, blog_posts.language';

module.exports = {
  getAll: function(params, callback) {
    var sql = '',
        language = global.lang.current,
        total = 100,
        url = '';
    
    sql = "SELECT COUNT(1) AS total FROM blog_posts" +
            " WHERE language = '" + language + "'" + 
            " AND situation = 'published'";
    
    function executeQuery(sql, fn) {
      Blog.query(sql, function (error, result) {
        fn(result[0].total, callback);
      });
    }

    executeQuery(sql, function(result, callback) {
      var total = result;
      
      if (typeof(params.page) !== 'undefined') {
        var start = (params.page * 12) - 12,
            limit = start + ', 12';
        
        if (total > 12) {
          var pagination = global.pagination.paginate(total, 12, start, url, 12);
        }
      } else {
        var start = 0,
            limit = '0, 12';

        if (total > 12) {
          var pagination = global.pagination.paginate(total, 12, start, url, 12);
        }
      }

      var sql = "SELECT " + fields + 
                " FROM blog_posts " + 
                " WHERE language = '" + language + "'" + 
                " AND situation = 'published'" +
                " ORDER BY id DESC" +
                " LIMIT " + limit;

      Blog.query(sql, callback);
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
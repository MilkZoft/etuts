var Model = require('../system/model'),
    Blog = new Model();
    fields = 'id, title, slug, excerpt, content, author, mainImage, createdAt, day, month, year, language';

module.exports = {
  getAll: function(callback) {
    var language = global.lang.current,
        sql = "SELECT " + fields + 
              " FROM blog_posts " + 
              " WHERE language = '" + language + "'" + 
              " AND situation = 'published'" +
              " ORDER BY id DESC" +
              " LIMIT 0, 12";

    Blog.query(sql, callback);
  },

  getPostByDate: function(params, callback) {
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
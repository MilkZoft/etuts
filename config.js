var config = {
  db: {
    host: '127.0.0.1',
    user: 'root',
    password: '211182',
    database: 'etuts',
    port: 3306,
    debug: false,
    socket: '/Applications/XAMPP/xamppfiles/var/mysql/mysql.sock'
  },
  
  site: {
    url: 'http://localhost:3000',
    title: 'Codejobs',
    language: 'en',
    html: {
      engine: 'jade',
      minify: false,
      bundle: true
    }
  },
  
  application: {
    controllers: {
      default: 'blog',
      current: ''
    },
    langs: ['en', 'es', 'fr', 'it', 'pt', 'ge', 'ch', 'jp'],
    languages: 'en|es|fr|it|pt|ge|ch|jp'
  },
  
  server: {
    environment: 'local',
    files: {
      filter: [
        'favicon.ico', 'img', 'js', 'images', 'stylesheets', 'css', 'themes'
      ]
    },
    debug: true
  },

  security: {
    salt: 'C0d3job$.b1z'
  },

  vars: {
    ppp: 12
  }
};

module.exports = config;
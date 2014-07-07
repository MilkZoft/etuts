var self = {
  link: function(url) {
    if (typeof(url) !== 'undefined') {
      return global.config.site.url + '/' + global.lang.current + '/' + url;
    } else {
      return global.config.site.url + '/' + global.lang.current;
    }
  },

  url: function(url) {
    if (typeof(url) !== 'undefined') {
      return global.config.site.url + '/' + url;
    } else {
      return global.config.site.url;
    }
  },

  setModule: function(module) {
    global.config.application.controllers.current = module;
  },

  getModule: function() {
    return global.config.application.controllers.current;
  }
};

module.exports = self;
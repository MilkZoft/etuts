var self = {
  format: function(d, format) {
    var date = new Date(d),
        month = date.getMonth(),
        day = date.getDay(),
        year = date.getFullYear();

    if (format == 'M d, Y') {
      return global.lang.date.m[month] + ' ' + day + ', ' + year;
    } else {
      return date;
    }
  },

  day: function() {
    return 'Febrero';
  }
};

module.exports = self;
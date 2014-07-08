var self = {
  paginate: function(count, end, start, url, limit) {
    var pageNav = null,
        increment = 5,
        rest = 0,
        pages = 0,
        currentPage = 0,
        firstPage = 0,
        lastPage = 0,
        pge = 0,
        next = 0,
        pageNav = '',
        pageNext = '',
        pagePrevious = '';

    if (count > end) {
      rest = count % end;
      pages = (rest === 0) ? count / end : ((count - rest) / end) + 1;

      if (pages > limit) {
        currentPage = (start / end) + 1;

        if (start === 0) {
          firstPage = 0;
          lastPage = limit;
        } else if (currentPage >= increment && currentPage <= (pages - increment)) {
          firstPage = currentPage - increment;
          lastPage = currentPage + increment;
        } else if (currentPage < increment) {
          firstPage = 0;
          lastPage = currentPage + increment + (increment - currentPage);
        } else {
          firstPage = currentPage - increment - ((currentPage + increment) - pages);
        }
      } else {
        firstPage = 0;
        lastPage = pages;
      }

      for (var i = firstPage; i < lastPage; i++) {
        pge = i + 1;
        next = i * end;

        pageNav += (start == next) ? '<span class="page active">' + pge + '</span>' : '<a href="#" class="page gradient">' + pge + '</a>';
      }

      currentPage = (start == 0) ? 1 : (start / end) + 1;

      pageNext = (currentPage < pages) ? '<a href="' + url + (currentPage + 1) +'/" class="page gradient">Next</a>' : '';
      pagePrevious = (start > 0) ? '<a href="' + url + (currentPage - 1) +'" class="page gradient">Previous</a>' : '';
    }

    return '<div class="pagination">'+ pagePrevious + pageNav + pageNext + '</div>';
  }
};

module.exports = self;
'use strict';

$(function(){
  var $pagination = $('#pagination');
  var totalPages = $pagination.attr('totalPages');
  var pageCount = $('#pageCount').text();

  $pagination.twbsPagination({
    first: '第一页',
    prev: '前一页',
    next: '下一页',
    last: '最后一页',
    totalPages: pageCount,
    visiblePages: 7,
    href: '?pageIndex={{number}}&pageSize=' + 6
  });
});
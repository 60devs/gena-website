import $ from 'jquery';

$(function() {
  $('.docs-btn').click(e => {
    $('html, body').animate({
      scrollTop: $(".info").offset().top
    }, 600);
  });
});
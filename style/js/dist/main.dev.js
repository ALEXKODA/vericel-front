"use strict";

$(window).scroll(function () {
  var blockHides = '#section-info';
  var newUrl = '#title-block';
  var hT = $(blockHides).offset().top,
      hH = $(blockHides).outerHeight(),
      wH = $(window).height(),
      wS = $(this).scrollTop();

  if (wS > hT + hH - wH) {
    console.log('Section-Info Hidden'), $('.section-info').removeClass('fixed'), $('.section-info-button').attr("href", newUrl);
  } else {
    $('.section-info').addClass('fixed'), $('.section-info-button').attr("href", blockHides);
  }
});
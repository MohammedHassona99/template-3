$(function () {
  // Trigger Nice Scroll Plugin

  $("html").niceScroll();

  // Change Header Height
  $("header").height($(window).height());

  // Scroll To Feature

  $(".arrow i").click(function () {
    $("html, body").animate(
      {
        scrollTop: $(".features").offset().top,
      },
      1000
    );
  });

  // show hiddin items from our work

  $(".show-more").click(function () {
    $(".our-work .hidden").fadeIn();
  });
});

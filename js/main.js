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

  //check testimonial
  const arrowLeft = $(".arrow-left");
  const arrowRight = $(".arrow-right");
  function checkPerson() {
    $(".person:first").hasClass("active")
      ? arrowLeft.fadeOut()
      : arrowLeft.fadeIn();

    $(".person:last").hasClass("active")
      ? arrowRight.fadeOut()
      : arrowRight.fadeIn();
  }

  checkPerson();

  $(".testimonial i").click(function () {
    if ($(this).hasClass("arrow-right")) {
      $(".testimonial .active").fadeOut(100, function () {
        $(this)
          .removeClass("active")
          .next(".person")
          .addClass("active")
          .fadeIn();
        checkPerson();
      });
    } else {
      $(".testimonial .active").fadeOut(100, function () {
        $(this)
          .removeClass("active")
          .prev(".person")
          .addClass("active")
          .fadeIn();
        checkPerson();
      });
    }
  });
});

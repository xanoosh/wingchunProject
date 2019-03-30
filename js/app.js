//scroll to linked section

$(function() {
  var anchor = $('a[href^="#"]');

  anchor.click(function(e) {
    e.preventDefault();

    var href = $(this).attr("href");

    var section = $(href);

    var height = section.offset().top;

    var px = section.offset().top;

    $("html,body").animate({ scrollTop: px }, 1500)
  });
});

//show/hide menu on scroll top/bottom

var prevScrollpos = window.pageYOffset;

window.onscroll = function() {
  var currentScrollpos = window.pageYOffset;

  if (prevScrollpos > currentScrollpos) {
    document.getElementById("navbar").style.top = "0";
  } 
  else {
    document.getElementById("navbar").style.top = "-300px";
  }

  prevScrollpos = currentScrollpos;
};

//hide menu when link is clicked.. working on it


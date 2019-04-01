$( document ).ready(function() {
  console.log( "Dom fully loaded" );

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
    document.getElementById("navbar").style.top = "-100px";
  }

  prevScrollpos = currentScrollpos;
};

//hide hamurger menu when link is clicked

$(".nav-link").click(function(){
  $(".navbar-toggler").addClass("collapsed")
  $(".navbar-collapse").removeClass("show");
});

AOS.init({
  duration: 1200,
});

window.addEventListener('load', AOS.refresh);

});

$(function () {



var anchor = $('a[href^="#"]');

anchor.click(function (e) {
    e.preventDefault();


    var href = $(this).attr('href');

    var section = $(href);

    var height = section.offset().top;

    var px = section.offset().top;


    $('html,body').animate({'scrollTop':px},1500);

});

});


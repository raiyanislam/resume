$(document).ready(function() {
  // Adding Sticky Navigation
  $(".js--about-section").waypoint(function(direction) {
    if(direction=="down") {
        $("nav").addClass("sticky-nav");
    } else {
        $("nav").removeClass("sticky-nav");
    }
  });

  // Select all links with hashes
  $('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 900, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });

  // Animation on scroll
  $(".js--about-section").waypoint(function(direction) {
     $(".js--about-box").addClass('animated pulse');
  }, {
    offset:'50%'
  });

  // service on scroll
  $(".js--service-section").waypoint(function(direction) {
     $(".js--service-box").addClass('animated zoomIn');
  }, {
    offset:'50%'
  });

  // GetYear
  var d = new Date();
  document.getElementById("year").innerHTML = d.getFullYear();



});

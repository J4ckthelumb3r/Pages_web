$(document).ready(function() {
  AOS.init( {
    // uncomment below for on-scroll animations to played only once
    // once: true  
  }); // initialize animate on scroll library
});

// Smooth scroll for links with hashes
$('a.smooth-scroll')
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
      }, 1000, function() {
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

document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('.custom-download-label').addEventListener('click', function(event) {
      event.preventDefault(); // Empêche le comportement par défaut du label

      // Crée un lien temporaire pour le téléchargement
      const link = document.createElement('a');
      link.href = 'images/cv.png';
      link.download = 'cv.png'; // Nom du fichier téléchargé
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
  });
});

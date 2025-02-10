jQuery(document).ready(function($) {


	var mastheadheight = $('.ds-header').outerHeight();
	//console.log(mastheadheight);
	$(".ds-banner,.ds-main-section").css("margin-top" , mastheadheight);

	$(window).scroll(function(){
	    if ($(window).scrollTop() >= 10) {
	        $('.ds-header').addClass('ds-fixed-header');
	    }
	    else {
	        $('.ds-header').removeClass('ds-fixed-header');
	    }
	}).scroll();


});

// Smooth scrolling for tab links
document.addEventListener('DOMContentLoaded', function() {
    const tabLinks = document.querySelectorAll('.ds-tabs a');
    
    tabLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Only handle links that start with #
            if (!href.startsWith('#')) return;
            
            e.preventDefault();
            const targetId = href.substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                // Calculate header height
                const header = document.querySelector('.ds-header');
                const headerHeight = header.offsetHeight;
                
                // Calculate target position accounting for header height
                const targetPosition = targetElement.offsetTop - headerHeight;
                
                // Smooth scroll to target
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Typing effect
const words = ["Graduate Student", "Business Analyst", "Marketing Expert"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingSpeed = 100;
const deletingSpeed = 50;
const pauseEnd = 2000;

function typeEffect() {
  const currentWord = words[wordIndex];
  const typedText = document.getElementById("typed-text");
  
  if (isDeleting) {
    // Deleting text
    typedText.textContent = currentWord.substring(0, charIndex - 1);
    charIndex--;
    
    if (charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
    }
  } else {
    // Typing text
    typedText.textContent = currentWord.substring(0, charIndex + 1);
    charIndex++;
    
    if (charIndex === currentWord.length) {
      isDeleting = true;
      setTimeout(typeEffect, pauseEnd);
      return;
    }
  }
  
  setTimeout(typeEffect, isDeleting ? deletingSpeed : typingSpeed);
}

// Add to existing window.onload or create new one
document.addEventListener('DOMContentLoaded', function() {
  typeEffect();
});

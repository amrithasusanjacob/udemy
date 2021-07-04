
$(document).ready(function() {
    
    function beeLeft() {
        $('.topcloud').animate({left: "-=300"}, 1500, "swing", beeRight);
        $('.bottomcloud').animate({left: "-=300"}, 1500, "swing", beeRight);
    }
    function beeRight() {
        $('.topcloud').animate({left: "+=300"}, 1500, "swing", beeLeft);
        $('.bottomcloud').animate({left: "+=300"}, 1500, "swing", beeLeft);
    }
    
    beeRight();
});

/* Open */
function openNav() {
    document.getElementById("myNav").style.height = "100%";
  }
  
  /* Close */
  function closeNav() {
    document.getElementById("myNav").style.height = "0%";
  }
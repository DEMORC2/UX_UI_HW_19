$(document).ready(function(){
    $(".fade").hide(0).delay(500).fadeIn(1500);

    $('li').on('mouseenter', function(){
        $(this).css("border-bottom", "2px solid white");
    });
    $('li').on('mouseleave', function(){
        $(this).css("border-bottom", "0px solid white");
    });
    $("a").on('click', function(event) {

    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        window.location.hash = hash;
      });
    } 
  });
});

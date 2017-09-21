//Desktop view close button
 $(document).scroll(function(){
    $(".closeButton").css("top",Math.max(80,700-$(this).scrollTop()));
    if($(window).width() <= 1024){
      $(".closeButton").css("top",Math.max(20,450-$(this).scrollTop()));
    }
 });

$(document).ready(function(){
   $(".xbutton").hover(function () {
   $(this).toggleClass("xbutton_hover");
   });
});

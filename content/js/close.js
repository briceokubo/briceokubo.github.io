$(document).scroll(function(){
    $(".closeButton").css("top",Math.max(80,700-$(this).scrollTop()));
});

$(document).ready(function(){
   $(".xbutton").hover(function () {
   $(this).toggleClass("xbutton_hover");
   });
});

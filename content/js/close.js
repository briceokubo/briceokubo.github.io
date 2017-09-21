//Desktop view close button
 $(document).scroll(function(){
    $(".closeButton").css("top",Math.max(80,700-$(this).scrollTop()));
 });

// //Mobile view close button
// $(document).scroll(function(){
//    	if($(window).width() <= 700){
//     $(".closeButton").css("bottom",Math.max(100,650-$(this).scrollTop()));
//    }
// });


$(document).ready(function(){
   $(".xbutton").hover(function () {
   $(this).toggleClass("xbutton_hover");
   });
});

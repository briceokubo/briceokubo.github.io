//  OLD Nav Layout
// $(document).ready(function(){
//    $(".contactBtn").hover(function () {
//    $(this).toggleClass("btn_hover");
//    });
// });
//
// $(document).ready(function(){
//    $(".logo").hover(function () {
//    $(this).toggleClass("logo_hover");
//    });
// });

$(document).ready(function(){
   $("#mail") .mouseover(function () {
      this.src= "content/images/footer/mail_hover.svg"
   }).mouseout(function () {
      this.src= "content/images/footer/mail.svg"
   });
});

$(document).ready(function(){
   $("#link") .mouseover(function () {
      this.src= "content/images/footer/linkedin_hover.svg"
   }).mouseout(function () {
      this.src= "content/images/footer/linkedin.svg"
   });
});

$(document).ready(function(){
   $("#insta") .mouseover(function () {
      this.src= "content/images/footer/instagram_hover.svg"
   }).mouseout(function () {
      this.src= "content/images/footer/instagram.svg"
   });
});

$(document).ready(function(){
   $("#git") .mouseover(function () {
      this.src= "content/images/footer/git_hover.svg"
   }).mouseout(function () {
      this.src= "content/images/footer/git.svg"
   });
});


$(document).ready(function(){
  $('.navButton').click(function(){
    $('.navButton').removeClass('active').addClass('inactive');
     $(this).removeClass('inactive').addClass('active');
    });
})

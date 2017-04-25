var app = angular.module("myApp", []);

app.controller("workCtrl", function ($scope) {
   $scope.works = [
      { image: "content/images/techub.jpg", title: "TecHub website", description: "New web page for UH Manoa Bookstore", tag: "Web Design", a: "techub.html"},
      { image: "content/images/techublogo.svg", title: "TecHub Logo", description: "Creating a new brand for Computer department", tag: "Branding"},
      { image: "content/images/deependHero.svg", title: "TheDeepEnd Logo", description: "Branding TheDeepEnd website logo", tag: "Branding"},
      { image: "content/images/cn.svg", title: "Carbon Neutral", description: "Case study of UI/UX web app", tag: "Front-End"},
      { image: "content/images/hikealoha.svg", title: "Hike Aloha", description: "UI/UX and Branding for 24-hour hackathon winning ", tag: "Front End and Branding"},
   ];
})

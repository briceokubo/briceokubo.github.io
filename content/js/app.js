var app = angular.module("myApp", []);

app.controller("workCtrl", function ($scope) {
   $scope.works = [
      { image: "content/images/techub.jpg", title: "TecHub website", description: "New web page for UH Manoa Bookstore", a: "techub.html", tag: "Web Design"},
      { image: "content/images/cn.svg", title: "Carbon Neutral", description: "Case study of UI/UX web app", a: "CNchallenge.html", tag: "Front-End"},
      { image: "content/images/hikealoha.svg", title: "Hike Aloha", description: "UI/UX and Branding for 24-hour hackathon winning ", a: "hikealoha.html", tag: "Front End and Branding"},
      { image: "content/images/techublogo.svg", title: "TecHub Logo", description: "Creating a new brand for Computer department", a: "techublogo.html", tag: "Branding"},
      { image: "content/images/deependHero.svg", title: "TheDeepEnd Logo", description: "Branding TheDeepEnd website logo", a: "deepend.html", tag: "Branding"},
   ];
})

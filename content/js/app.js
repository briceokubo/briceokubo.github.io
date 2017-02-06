var app = angular.module("myApp", []);

app.controller("workCtrl", function ($scope) {
   $scope.works = [
      { image: "http://placehold.it/300x300", title: "TecHub website", description: "New web section for UH Manoa Bookstore", tag: "Web Design"},
      { image: "http://placehold.it/300x300", title: "TecHub Logo", description: "Creating a new brand for Computer department", tag: "Branding"},
      { image: "http://placehold.it/300x300", title: "TheDeepEnd Logo", description: "Branding TheDeepEnd website logo", tag: "Branding"},
      { image: "http://placehold.it/300x300", title: "Carbon Neutral", description: "Case study of UI/UX web app", tag: "Front-End"},
      { image: "http://placehold.it/300x300", title: "Hike Aloha", description: "UI/UX and Branding for 24-hour hackathon winning ", tag: "Front End and Branding"},
   ];
})

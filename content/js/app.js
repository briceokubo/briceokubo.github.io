var app = angular.module("myApp", []);

app.controller("workCtrl", function ($scope) {
   $scope.works = [
      { image: "content/images/homepage/MCicon2.svg", title: "Modern Compass", description: "Exploring outdoors the safe way", a: "modernCompass.html", tag: "Web Design", color: "tagWD", tag2: "Mobile Design", color2: "tagMD"},
      { image: "content/images/homepage/techub2.png", title: "TecHub website", description: "New web page for UH Manoa Bookstore", a: "techub.html", tag: "Web Design", color: "tagWD", tag2: "", color2: ""},
      { image: "content/images/homepage/CN2.png", title: "Carbon Neutral", description: "Case study of UI/UX web app", a: "CNchallenge.html", tag: "Web Design", color: "tagWD", tag2: "", color2: ""},
      { image: "content/images/homepage/hikealoha2.svg", title: "Hike Aloha", description: "UI/UX and Branding for 24-hour hackathon", a: "hikealoha.html", tag: "Mobile Design", color: "tagMD", tag2: "Branding", color2: "tagB"},
      { image: "content/images/homepage/techublogo.png", title: "TecHub Logo", description: "Creating a new brand for Computer department", a: "techublogo.html", tag: "Branding", color: "tagB", tag2: "", color2: ""},
      { image: "content/images/homepage/deependHero.svg", title: "A Beauty Website", description: "Web design for beauty products", a: "deepend.html", tag: "Web Design", color: "tagWD", tag2: "Mobile Design", color2: "tagMD"},
   ];
})

var app = angular.module("myApp", []);

app.controller("workCtrl", function ($scope) {
   $scope.works = [
      { image: "content/images/homepage/MCicon2.svg", title: "Modern Compass", description: "App for exploring outdoors the safe way", a: "modernCompass.html", tag: "Web Design", color: "tagWD", tag2: "Mobile Design", color2: "tagMD", workBtn: "views/workBtn/MCbutton.html"},
      { image: "content/images/homepage/techub2.png", title: "TecHub website", description: "New web page for UH Manoa Bookstore", a: "techub.html", tag: "Web Design", color: "tagWD", tag2: "", color2: "", workBtn: "views/workBtn/THbutton.html"},
      { image: "content/images/homepage/CN2.png", title: "Carbon Neutral", description: "Case study of UI/UX web app", a: "CNchallenge.html", tag: "Web Design", color: "tagWD", tag2: "", color2: "", workBtn: "views/workBtn/CNbutton.html"},
      { image: "content/images/homepage/hikealoha2.svg", title: "Hike Aloha", description: "UI/UX and Branding for 24-hour hackathon", a: "hikealoha.html", tag: "Mobile Design", color: "tagMD", tag2: "Branding", color2: "tagB", workBtn: "views/workBtn/HAbutton.html"},
      { image: "content/images/homepage/techublogo.png", title: "TecHub Logo", description: "Creating a new brand for Computer department", a: "techublogo.html", tag: "Branding", color: "tagB", tag2: "", color2: "", workBtn: "views/workBtn/THLbutton.html"},
      { image: "content/images/homepage/AB.svg", title: "A Beauty Website", description: "Web design for beauty products", a: "deepend.html", tag: "Web Design", color: "tagWD", tag2: "Mobile Design", color2: "tagMD", workBtn: "views/workBtn/ABbutton.html"},
   ];
})

app.controller('sectionCtrl', ['$scope', function($scope) {
    $scope.section = 'views/homepage/offer.html';


    $scope.aboutSection = function() {
        $scope.section = 'views/homepage/about.html';
        window.scrollTo(0, 550);
        if($(window).width() <= 1024){
            window.scrollTo(0, 400);
        }
    };

    $scope.offerSection = function() {
        $scope.section = 'views/homepage/offer.html';
        window.scrollTo(0, 550);
        if($(window).width() <= 1024){
            window.scrollTo(0, 400);
        }
    };

    $scope.workSection = function() {
        $scope.section = 'views/homepage/work.html';
        window.scrollTo(0, 550);
        if($(window).width() <= 1024){
            window.scrollTo(0, 400);
        }
    };

    $scope.contactSection = function() {
      $scope.section = 'views/homepage/contact.html';
      window.scrollTo(0, 550);
      if($(window).width() <= 1024){
          window.scrollTo(0, 400);
      }
  };

   $scope.MCwork = function() {
      $scope.section = 'views/workBody/MCbody.html';
      window.scrollTo(0, 550);
      if($(window).width() <= 1024){
          window.scrollTo(0, 400);
      }
};

   $scope.CNwork = function() {
      $scope.section = 'views/workBody/CNbody.html';
      window.scrollTo(0, 550);
      if($(window).width() <= 1024){
          window.scrollTo(0, 400);
      }
};

   $scope.THwork = function() {
      $scope.section = 'views/workBody/techubBody.html';
      window.scrollTo(0, 550);
      if($(window).width() <= 1024){
          window.scrollTo(0, 400);
      }
};

   $scope.HAwork = function() {
      $scope.section = 'views/workBody/HAbody.html';
      window.scrollTo(0, 550);
      if($(window).width() <= 1024){
          window.scrollTo(0, 400);
      }
};

   $scope.THLwork = function() {
      $scope.section = 'views/workBody/techubLogoBody.html';
      window.scrollTo(0, 550);
      if($(window).width() <= 1024){
          window.scrollTo(0, 400);
      }
};

   $scope.ABwork = function() {
      $scope.section = 'views/workBody/ABbody.html';
      window.scrollTo(0, 550);
      if($(window).width() <= 1024){
          window.scrollTo(0, 400);
      }
};

   $scope.resumeSection = function() {
      $scope.section = 'views/homepage/resume.html';
      window.scrollTo(0, 550);
      if($(window).width() <= 1024){
          window.scrollTo(0, 400);
      }
};
}]);

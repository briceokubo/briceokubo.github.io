angular.module('app', ['ngAnimate']);
.controller('ItemCtrl', function($scope) {
  $scope.items = [
    {name: "Lunchmeat"},
    {name: "Bread"},
    {name: "Milk"},
    {name: "Mustard"},
    {name: "Cheese"}
  ];
  $scope.addItem = function() {
    $scope.items.push($scope.item);
    $scope.item = {};
  };
  $scope.removeItem = function(index) {
    $scope.items.splice(index, 1);
  };
});

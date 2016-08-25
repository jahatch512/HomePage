# HomePage

[HomePage][gh-pages] is a personal project I began for two primary reasons:

[gh-pages]: https://jahatch512.github.io/JamesWorld



1. To refine my skills and knowledge of AngularJS
2. To create a personalized home page for myself by plugging into
the API's of my favorite news, sports, weather, and music sources.

## Design & Implementation

As mentioned above, this app was built using Angular 1.5.8. It takes advantage of the 'ngRoute' module and uses the $routeProvider to create a fluid exploring experience on a single-page application framework. The Angular router has 5 routes:

"home", "news", "weather", "sports", and "music"

each has its own Angular controller, an html view, and a corresponding style sheet. All of the Angular code is written in 'javascripts/app.js'. Below are some excerpts from the code.

### Routing

The single-page application loads index.html and from there the following routes and controllers determine which additional view to render, all on the front end:

```javascript
  var JamesWorld = angular.module('JamesWorld', ["ngRoute"])
  .config(function($routeProvider){
    $routeProvider.when("/", {
      templateUrl: "views/home.html",
      controller: "newsController"
    }).when("/news", {
      templateUrl: "views/news.html",
      controller: "newsController"
    }).when("/weather", {
      templateUrl: "views/weather.html",
      controller: "weatherController"
    }).when("/sports", {
      templateUrl: "views/sports.html",
      controller: "sportsController"
    }).when("/music", {
      templateUrl: "views/music.html",
      controller: "musicController"
    });
  ```



### API Requests

Each tab makes an API request to a 3rd party, including HackerNews and ESPN. In order to maintain synchronicity in dependent AJAX requests, the Angular .then() method was used:

```javascript

controller("newsController", ["$scope", "$http", function($scope, $http){
  $scope.sources = ["TechCrunch", "HackerNews"];
  $http.get("https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty")
  .then(function(data){
    $http.get("https://hacker-news.firebaseio.com/v0/item/"+
    data.data[0]+
    ".json?print=pretty").then(
      function(data2){
        if (data2.data.title){
          $scope.title1 = data2.data.title;
        } else {
          $scope.title1 = "(no title available)";
        }
```

### Future Directions for the Project

One major addition will be the integration of the Spotify API with my own private account to allow me to search my artists and playlists from within my HomePage. I also plan to include more news and sports stories, as well as a more detailed weather report. I also intend to plug in to some of my favorite RSS feeds and create a seamless feed. The best part about this project is that I am building something customized for my interests so I will be continuing to improve and tailor it as I see fit. I also see the potential to build a platform where people can select their favorite news, sports, music, etc. from a given list and my application can auto-generate a customized HomePage for any client for a small fee. 

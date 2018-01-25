(function () {
  'use strict';

  angular.module('psMovies')
    .component('movieList', movieList());

    function movieListController($http) {
      var self = this;

      self.message = "hello i'm here";
      self.$onInit = $onInit;
      self.upRating = upRating;
      self.downRating = downRating;

      function upRating(movie) {
        if(movie.rating < 5) {
          movie.rating += 1;
        }
      }

      function downRating(movie) {
        if(movie.rating > 1) {
          movie.rating -= 1;
        }
      }

      function fetchMovies() {
        return $http.get('movies.json')
          .then(function(response) {
            return response.data;
          });
      }

      function $onInit() {
        fetchMovies().then(function(movies) {
          self.movies = movies;
        });
      }
    }

    function movieList() {
      return {
        templateUrl: '/app/movie-list.component.html',
        controllerAs: 'ctrl',
        controller: ["$http", movieListController]
      };
    }
})();

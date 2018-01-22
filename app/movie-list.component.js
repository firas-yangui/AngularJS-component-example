(function() {
  'use strict';

  angular.module('psMovies')
    .component('movieList', movieList());

    function movieListController($http) {
      var self = this;

      self.message = "hello i'm here";
      self.changeMessage = changeMessage;
      self.$onInit = $onInit;

      function changeMessage() {
        console.log('changed');
        self.message = "new message";
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

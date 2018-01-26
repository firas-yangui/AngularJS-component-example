(function() {
  'use strict';

  angular.module('psMovies')
    .controller('movieListController', movieListController);

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
}());

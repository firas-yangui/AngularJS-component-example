(function() {
  'use strict';

  angular.module('psMovies')
    .component('movieList', movieList());

    function movieList() {
      return {
        templateUrl: "./app/movie-list.component.html",
        controllerUrl:"./app/movie-list.controller.js",
        controllerAs: "model"
      };
    }
})();

(function() {
  'use strict';

  angular.module('psMovies')
    .controller('movieListController', movieListController);

    function movieListController() {
      var self = this;

      self.message = "hello i'm here";
    }
})();

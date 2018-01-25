(function() {
  'use strict';

  angular.module('psMovies')
    .component('movieRating', movieRatingComponent());

  function movieRatingComponent() {
    return {
      templateUrl: 'app/movie-rating.component.html',
      bindings: {
        value: '<'
      },
      controllerAs: 'ctrl',
      controller: movieRatingController
    };
  }

  function movieRatingController() {
    var self = this;

    self.$onChanges = $onChanges;
    self.$onInit = $onInit;

    function $onInit() {
      self.entries = new Array(self.value);
    }

    function $onChanges() {
      self.entries = new Array(self.value);
    }

  }


})()

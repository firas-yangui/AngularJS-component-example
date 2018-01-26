(function () {
  'use strict';

   var module = angular.module('psMovies', ['ngComponentRouter']);

   module.value('$routerRootComponent', 'movieApp');

   module.component('appAbout',appAboutComponent())

   function appAboutComponent() {
     return {
       template: 'this is the about page!'
     };
   }

}());

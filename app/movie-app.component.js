(function() {
  'use strict';

  angular.module('psMovies')
    .component('movieApp', movieAppComponent());

    function movieAppComponent() {
      return {
        templateUrl: 'app/movie-app.component.html',
        $routeConfig: [
          {path: '/list', component: "movieList", name: "List"},
          {path: '/about', component: "appAbout", name: "About"},
          {path: '/detail/:id', component: 'movieDetails', name: 'Details'},
          {path:  '/**', redirectTo: ['List']}
        ]
      };
    }

}());

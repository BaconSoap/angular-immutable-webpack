import * as angular from 'angular';
import ngRedux, {INgReduxProvider, INgRedux } from 'ng-redux';
import componentsModule from './components';
import { createRootReducer } from './reducers/rootReducer';

var module = angular.module('app', [ngRedux, componentsModule]);

module.config(['$ngReduxProvider', ($ngReduxProvider: INgReduxProvider) => {
    $ngReduxProvider.createStoreWith(createRootReducer());
}]);

document.addEventListener("DOMContentLoaded", () => {
   angular.bootstrap(document.getElementsByTagName('body')[0], ['app']);
});

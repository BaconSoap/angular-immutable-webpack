declare const require: any;

import * as angular from 'angular';
import ngRedux, {INgReduxProvider, INgRedux } from 'ng-redux';
import componentsModule from './components';
import { createRootReducer } from './reducers/rootReducer';
import * as createLogger from 'redux-logger';
import * as Immutable from 'immutable';
var installDevTools = require('immutable-devtools');
installDevTools(Immutable);

var module = angular.module('app', [ngRedux, componentsModule]);

module.config(['$ngReduxProvider', ($ngReduxProvider: INgReduxProvider) => {
    $ngReduxProvider.createStoreWith(createRootReducer(), [(createLogger as any)()]);
}]);

document.addEventListener("DOMContentLoaded", () => {
   angular.bootstrap(document.getElementsByTagName('body')[0], ['app']);
});

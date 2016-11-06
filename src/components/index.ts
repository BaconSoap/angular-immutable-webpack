import * as angular from 'angular';
import { reducers } from '../reducers/rootReducer';
import PageComponent from './page/PageComponent';
import PageReducers from './page/pageReducers';

const moduleName = 'app.components';
var module = angular.module(moduleName, []);

module.component('page', new PageComponent());
reducers.push({name: 'page', reducer: PageReducers});

export default moduleName;
import * as angular from 'angular';
import { reducers } from '../reducers/rootReducer';
import PageComponent from './page/PageComponent';
import PageReducers from './page/pageReducers';
import SidebarComponent from './sidebar/SidebarComponent';
import SidebarReducers from './sidebar/sidebarReducers';

const moduleName = 'app.components';
var module = angular.module(moduleName, []);

// per-component configuration goes here

// page
module.component('page', new PageComponent());
reducers.push({name: 'page', reducer: PageReducers});

// page
module.component('sidebar', new SidebarComponent());
reducers.push({name: 'sidebar', reducer: SidebarReducers});

export default moduleName;
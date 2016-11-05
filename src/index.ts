import * as angular from 'angular';
import * as Immutable from 'immutable';

var module = angular.module('app', []);

class PageComponent implements ng.IComponentOptions {
    public controller = PageComponentController;
    public templateUrl = 'src/PageComponent.tmpl.html';
}

class PageComponentController {
    public vm = {
        name: 'Andrew'
    }
    static $inject = ['$timeout'];
    constructor($timeout: ng.ITimeoutService) {
        console.log('making controller');
        console.log(this);
        (this.vm as any).list = Immutable.List([1,2,5,7]);
        $timeout(() => {
            (this.vm as any).list = ((this.vm as any).list as Immutable.List<number>).push(29, 444, 666);
        }, 3000);
    }
}

module.component('page', new PageComponent());

document.addEventListener("DOMContentLoaded", () => {
   angular.bootstrap(document.getElementsByTagName('body')[0], ['app']);
});

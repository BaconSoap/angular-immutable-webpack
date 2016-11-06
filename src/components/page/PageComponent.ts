import * as Immutable from 'immutable';
import { INgRedux } from 'ng-redux';
import * as actions from './pageReducers';

export default class PageComponent implements ng.IComponentOptions {
    public controller = PageComponentController;
    public templateUrl = 'src/components/page/PageComponent.tmpl.html';
}

class PageComponentController {
    public vm = {
        name: 'Andrew'
    }

    increment: typeof actions.increment;
    test: number;

    static $inject = ['$timeout', '$ngRedux', '$scope'];
    constructor($timeout: ng.ITimeoutService, $ngRedux: INgRedux, $scope: ng.IScope) {
        let unsubscribe = $ngRedux.connect(this.mapStateToThis, actions)(this);

        (this.vm as any).list = Immutable.List([1,2,5,7]);
        $timeout(() => {
            (this.vm as any).list = ((this.vm as any).list as Immutable.List<number>).push(29, 444, 666);
        }, 3000);

        $scope.$on('$destroy', unsubscribe);

        $timeout(() => {
            this.increment();
        }, 1000);
    }

    private mapStateToThis(state: {page: typeof actions.defaultState}) {
        return {
            test: state.page.get('test')
        };
    }
}
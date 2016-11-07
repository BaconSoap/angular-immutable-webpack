import * as Immutable from 'immutable';
import { INgRedux } from 'ng-redux';
import * as actions from './sidebarReducers';
import { IAllFieldsState, IAvailableField } from '../../reducers/allFieldsReducers';

export default class SidebarComponent implements ng.IComponentOptions {
    public controller = SidebarComponentController;
    public templateUrl = 'src/components/sidebar/SidebarComponent.tmpl.html';
}

class SidebarComponentController {

    allFields: Array<IAvailableField>
    availableFields: Immutable.List<string>
    addTextField: typeof actions.addTextField;

    static $inject = ['$timeout', '$ngRedux', '$scope'];
    constructor($timeout: ng.ITimeoutService, $ngRedux: INgRedux, $scope: ng.IScope) {
        let unsubscribe = $ngRedux.connect(this.mapStateToThis.bind(this), actions)(this);

        console.log(this);
        $scope.$on('$destroy', unsubscribe);
    }

    createAndAddTextField(fieldText: string) {
        console.log('adding new text field with text: ' + fieldText)
        this.addTextField({
            id: 'text_' + Math.round(Math.random()*5555),
            name: fieldText,
            sample: [fieldText],
            size: [1, 50]
        });
    }

    private mapStateToThis(state: {sidebar: typeof actions.defaultState, allFields: Immutable.Map<string, Immutable.List<IAvailableField>> }) {
        let availableFields = state.sidebar.toolbox.availableFields;
        let fieldDefs = state.allFields;
        let allFields = availableFields.map(x => fieldDefs.get('main').find(y => y.id === x)).toJS();
        
        console.log('state changing...')

        return {
            allFields,
            availableFields
        };
    }
}
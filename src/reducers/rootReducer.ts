export let reducers: Array<any> = [];
import {combineReducers} from 'redux';
import allFieldsReducer from './allFieldsReducers'

reducers.push({name: 'allFields', reducer: allFieldsReducer});

export const createRootReducer = () => {
    let allReducers = {} as any;
    reducers.forEach(x => allReducers[x.name] = x.reducer);

    return combineReducers(allReducers);
}
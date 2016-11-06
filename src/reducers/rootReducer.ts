export let reducers: Array<any> = [];
import {combineReducers} from 'redux';

export const createRootReducer = () => {
    let allReducers = {} as any;
    reducers.forEach(x => allReducers[x.name] = x.reducer);

    return combineReducers(allReducers);
}
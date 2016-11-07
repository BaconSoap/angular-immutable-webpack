import * as Immutable from 'immutable';

export const ADD_TEXT_FIELD = 'ADD_TEXT_FIELD';

export function addTextField(text: any) {
    return {
        type: ADD_TEXT_FIELD,
        payload: text
    }
}

const handlers = {
    [ADD_TEXT_FIELD]: (state: typeof defaultState, action: any) => {
        let newFields = state.toolbox.availableFields.push(action.payload.id);
        let newToolbox = (Object as any).assign({}, state.toolbox, {availableFields: newFields});
        return (Object as any).assign({}, state, {toolbox: newToolbox});
    }
}

export const defaultState = 
  {
    "mode": "toolbox",
    "toolbox": {
      "availableFields": Immutable.List([
        "df_1",
        "df_2"
      ]),
      "parentType": "main"
    }
  }


export default function sidebarReducer(state = defaultState, action: any) {
  const handler = (handlers as any)[action.type];

  return handler ? handler(state, action) : state;
}
import * as Immutable from 'immutable';

export const INCREMENT = 'INCREMENT';

export function increment() {
    return {
        type: INCREMENT
    }
}

const handlers = {
    [INCREMENT]: (state: typeof defaultState, action: any) => state.set('test', state.get('test') + 1)
}

export const defaultState = Immutable.Map(
    { test: 0 }
)

export default function commitsReducer(state = defaultState, action: any) {
  const handler = handlers[action.type];

  return handler ? handler(state, action) : state;
}
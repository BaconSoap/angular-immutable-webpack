import * as Immutable from 'immutable';

export const INCREMENT = 'INCREMENT';
export const ADD_TEXT_FIELD = 'ADD_TEXT_FIELD';

export function increment() {
  return {
    type: INCREMENT
  }
}

const handlers = {
  [ADD_TEXT_FIELD]: (state: Immutable.Map<string, Immutable.List<IAvailableField>>, action: any) => state.set('main', state.get('main').push(action.payload))
}

export interface IAllFieldsState {
  [section: string]: Immutable.List<IAvailableField>;
}

export interface IAvailableField {
  id: string;
  name: string;
  sample: (string | number)[];
  size: number[];
}

let val: IAllFieldsState = {
  "main": Immutable.List([
    {
      "id": "df_1",
      "name": "First Name",
      "sample": [
        "Andrew",
        "Bob",
        "Jeff",
        "Nancy",
        "Simone",
        "Lauren"
      ],
      "size": [
        1,
        3
      ]
    },
    {
      "id": "df_2",
      "name": "Last Name",
      "sample": [
        "Varnerin",
        "..."
      ],
      "size": [
        1,
        4
      ]
    }
  ]),
  "subformat_1": Immutable.List([
    {
      "id": "subformat_1_1",
      "name": "Contribution ID",
      "sample": [
        1,
        3,
        667,
        9123,
        3412
      ],
      "size": [
        1,
        2
      ]
    },
    {
      "id": "subformat_1_2",
      "name": "Amount",
      "sample": [
        "$5",
        "$55",
        "$123",
        "$27",
        "$1",
        "$55.75"
      ],
      "size": [
        1,
        3
      ]
    }
  ]),
  "subformat_2": Immutable.List([])
};

export const defaultState = Immutable.Map<Immutable.List<IAvailableField>>(val)

export default function allFieldsReducer(state = defaultState, action: any) {
  const handler = (handlers as any)[action.type];

  return handler ? handler(state, action) : state;
}
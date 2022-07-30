import GET_GREETINGS from '../actionsType/actionsType';

const initialState = [];

const greetingsReducer = (state = initialState, action) => {
  const { payload } = action;
  switch(action.type) {
    case GET_GREETINGS:
      return payload;
    default:
      return state;
  }
}

export default greetingsReducer;

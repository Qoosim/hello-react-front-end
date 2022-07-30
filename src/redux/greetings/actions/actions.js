import GET_GREETINGS from '../actionsType/actionsType';
const GET_GREETINGS_API = 'http://localhost:3000/api/greetings';

export const getGreetings = async () => {
  try {
    const response = await fetch(`${GET_GREETINGS_API}`);
    const data = await response.json();
    return data;
  } catch(err) {
    return err;
  }
}

export const randomGreetings = () => async (dispatch) => {
  const result = await getGreetings();
  return dispatch({
    type: GET_GREETINGS,
    payload: result.greeting,
  });
}

export default randomGreetings;

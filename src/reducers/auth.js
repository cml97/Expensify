const defaultState = {};

export default (state = defaultState, action) => {
  switch(action.type) {
    case 'LOGIN':
      return {
        uid: action.payload
      };
    case 'LOGOUT':
      return { };

    default:
      return state;
  }
}
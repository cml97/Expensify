
const defaultExpenses = [];

export default (state = defaultExpenses, action) => {
    switch (action.type) {
      case 'ADD_EXPENSE':
        return [
          ...state,
          action.payload,
        ];
      case 'REMOVE_EXPENSE':
        return state.filter(item => item.id !== action.payload);
      case 'EDIT_EXPENSE':
        return state.map((item) => {
          if (item.id === action.id) {
            return { ...item, ...action.model }
          }
          else {
            return item;
          }
        })
      case 'GET_EXPENSES':
        return [
          ...action.payload
        ]
      default:
        return state;
    }
};

import database from '../firebase/firebase';

export const startAddExpense = (expense = { }) => {
  return dispatch => {
    database.ref("expenses").push(expense).then((ref) => {
      console.log("Expense added")
      dispatch(addExpense({ id: ref.key, ...expense}))
    }).catch(err => console.log("Error here", err))
  }
}
export const addExpense = (expense) => {
  return {
    type: 'ADD_EXPENSE',
    payload: expense
  }
};

export const removeExpense = (id) => {
  return {
    type: 'REMOVE_EXPENSE',
    payload: id
  }
};

export const getExpenses = () => {
  return {
    type: 'GET_EXPENSES'
  }
}

export const getExpense = (id) => {
  return {
    type: 'GET_EXPENSE',
    payload: id
  }
};
export const editExpense = (id, model) => {
  return {
    type: 'EDIT_EXPENSE',
    id,
    model
  }
}

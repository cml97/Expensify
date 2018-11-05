import database from '../firebase/firebase';

export const startAddExpense = (expense = { }) => {
  return dispatch => {
    database.ref("expenses").push(expense)
      .then((ref) => {
        dispatch(addExpense({ id: ref.key, ...expense}))
      })
      .catch(err => console.log("Error here", err))
  }
}
export const addExpense = (expense) => {
  return {
    type: 'ADD_EXPENSE',
    payload: expense
  }
};

export const fetchAllExpenses = () => {
  return dispatch => {
    return database.ref("expenses").once('value').then((snapshot) => {
      const expenses = [];
      snapshot.forEach((expense) => {
        expenses.push(expense.val());
      });
      dispatch(getExpenses(expenses));
    })
    
  }
}
export const removeExpense = (id) => {
  return {
    type: 'REMOVE_EXPENSE',
    payload: id
  }
};

export const getExpenses = (expenses) => {
  return {
    type: 'GET_EXPENSES',
    payload: expenses
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

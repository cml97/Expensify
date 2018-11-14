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
        expenses.push({
          id: expense.key,
          ...expense.val()
        });
      });
      dispatch(getExpenses(expenses));
    })
  }
}
export const startRemoveExpense = (id) => {
  return dispatch => {
    return database.ref(`expenses/${id}`).remove().then(() => {
      dispatch(removeExpense(id));
    });
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

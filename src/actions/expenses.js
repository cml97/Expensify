import database from '../firebase/firebase';

export const startAddExpense = (expense = { }) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    database.ref(`${uid}/expenses`).push(expense)
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
  return (dispatch, getState) => {
    const uid = getState().auth.uid;

    return database.ref(`${uid}/expenses`).once('value').then((snapshot) => {
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
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`${uid}/expenses/${id}`).remove().then(() => {
      dispatch(removeExpense(id));
    });
  }
}

export const startEditExpense = (id, model) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`${uid}/expenses/${id}`).update(model).then(() => dispatch(editExpense(id, model)));
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

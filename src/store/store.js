import { createStore, combineReducers } from 'redux';
import reducers from '../reducers';

export default () => {
  const rootReducer = combineReducers({
    expenses: reducers.expenses,
    filters: reducers.filters
  })
  const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store;
}

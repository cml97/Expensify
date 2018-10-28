import { createStore, combineReducers } from 'redux';
import reducers from '../reducers';

export default () => {
  const rootReducer = combineReducers({
    expenses: reducers.expenses,
    filters: reducers.filters
  });
  const store = createStore(rootReducer);
  return store;
}

import { createStore, combineReducers, applyMiddleware } from 'redux';
import reducers from '../reducers';
import thunk from 'redux-thunk';

export default () => {
  const rootReducer = combineReducers({
    expenses: reducers.expenses,
    filters: reducers.filters
  })
  const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
  );
  return store;
}

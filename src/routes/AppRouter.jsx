import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';

import {
  ExpenseDashboardPage,
  AddExpensePage,
  EditExpensePage,
  HelpPage,
  NotFoundPage,
} from '../components';

import configureStore from '../store/store.js';
import '../firebase/firebase';
import Login from '../components/auth/Login';

const store = configureStore();
export const history = createHistory();

class AppRouter extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <div>
            <Switch>
              <Route path="/" component={Login} exact={true} />
              <Route path="/dashboard" component={ExpenseDashboardPage} />
              <Route path="/create" component={AddExpensePage} />
              <Route path="/edit/:id" component={EditExpensePage} />
              <Route path="/help" component={HelpPage} />
              <Route component={NotFoundPage} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default AppRouter;

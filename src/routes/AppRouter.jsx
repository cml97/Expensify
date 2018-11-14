import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import {
ExpenseDashboardPage,
AddExpensePage,
EditExpensePage,
HelpPage,
NotFoundPage,
Header
} from '../components';

import configureStore from '../store/store.js';
import '../firebase/firebase';
import Login from '../components/auth/Login';

const store = configureStore();

class AppRouter extends React.Component {
  render() {
    return (
      <Provider store={store}>
      <BrowserRouter>
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
      </BrowserRouter>
      </Provider>
    );
  }
}

export default AppRouter;

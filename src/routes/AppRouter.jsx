import React from 'react';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';
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

const store = configureStore();

class AppRouter extends React.Component {
  render() {
    return (
      <Provider store={store}>
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route path="/" component={ExpenseDashboardPage} exact={true} />
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

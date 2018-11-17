import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import '../firebase/firebase';
import Login from '../components/auth/Login';

import {
  ExpenseDashboardPage,
  AddExpensePage,
  EditExpensePage,
  HelpPage,
  NotFoundPage,
  Header,
} from '../components';

export const history = createHistory();

class AppRouter extends React.Component {
  render() {
    return (
        <Router history={history}>
          <div id="root">
            <Header />
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
    );
  }
}

export default AppRouter;

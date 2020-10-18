import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

import Header from './layout/Header';

import Headerl from './layout/Headerl';




import Dashboard from './leads/Dashboard';
import Mg from './marketing/Mg';
import Cr from './customer/Cr';
import Pd from './productd/Pd';
import Po from './producto/Po';
import Hr from './humanresource/Hr';
import Pl from './profitl/Pl';







import Alerts from './layout/Alerts';
import Login from './accounts/Login';
import Register from './accounts/Register';
import PrivateRoute from './common/PrivateRoute';

import { Provider } from 'react-redux';
import store from '../store';
import { loadUser } from '../actions/auth';

// Alert Options
const alertOptions = {
  timeout: 3000,
  position: 'top center',
};

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }

  render() {
    return (
      <Provider store={store}>
        <AlertProvider template={AlertTemplate} {...alertOptions}>
          <Router>
            <Fragment>
              <Header />
              <Alerts />
              <div className="container">
                <Switch>
                  <PrivateRoute exact path="/" component={Mg} />
                  <Route exact path="/register" component={Register} />
                  <Route exact path="/login" component={Login} />
                  <Route exact path="/marketing" component={Mg} />
                  <Route exact path="/customer" component={Cr} />
                  <Route exact path="/productd" component={Pd} />
                  <Route exact path="/producto" component={Po} />
                  <Route exact path="/hr" component={Hr} />
                  <Route exact path="/profitl" component={Pl} />




                </Switch>
              </div>
            </Fragment>
          </Router>
        </AlertProvider>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

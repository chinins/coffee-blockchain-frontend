import React, { Component } from 'react';
import { ThemeProvider } from 'emotion-theming';
import { theme } from './shared/theme';
import './shared/styles';
import Header from './components/header';
import Dashboard from './containers/dashboard';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CoffeeDetail from './containers/coffee-detail';
import Order from './components/order';
import Checkout from './components/checkout';

import { connect } from 'react-redux';
import * as ScatterActions from './redux/actions/scatter';
import LoadingBar from 'react-redux-loading-bar';
import InputForm from './components/input-form';
import { secondary } from './shared/colors';

class App extends Component {
  render () {
    return (
      <ThemeProvider theme={theme}>
        <Router>
          <div className="App">
            <LoadingBar style={{ zIndex: 100, backgroundColor: `${secondary}`, height: '10px' }} />
            <Header />
            <Switch>
              <Route exact path="/" component={Dashboard} />
              <Route exact path="/coffees" component={Dashboard} />
              <Route exact path="/coffee-shops" component={Dashboard} />
              <Route exact path="/coffee-detail/:coffeeId" component={CoffeeDetail} />
              <Route exact path="/order/:coffeeId" component={Order} />
              <Route exact path="/coffeeForm" component={InputForm} />
              <Route exact path="/userForm" component={InputForm} />
              <Route exact path="/checkout" component={Checkout} />
            </Switch>
          </div>
        </Router>
      </ThemeProvider>
    );
  }
}

const mapStateToProps = state => ({
  // coffees: state.coffees
});

const mapDispatchToProps = dispatch => ({
  // getAllCoffees: () => dispatch(CoffeeActions.getAllCoffees())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

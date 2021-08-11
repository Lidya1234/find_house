import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HouseList from '../containers/HouseList';
import FavouriteList from '../containers/FavouriteList';
import SingleHouseList from '../containers/SingleHouseList';
import Login from '../components/Login';
import Logout from '../components/Logout';
import Signup from '../components/Signup';
import '../style/main.scss';

import 'bootstrap/dist/css/bootstrap.min.css';

const Routes = () => {
  const { loggedin } = useSelector((state) => state.houses);
  return (
    <BrowserRouter>

      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            loggedin ? (
              <HouseList />
            ) : (
              <Login />
            )
          )}
        />
        <Route
          exact
          path="/HouseList"
          render={() => (
            loggedin ? (
              <HouseList />
            )
              : (
                <div className="login-access">
                  <p>You need to Sign In to access here</p>
                </div>
              )
          )}
        />

        <Route
          exact
          path="/FavouriteList"
          render={() => (
            loggedin ? (
              <FavouriteList />
            )
              : (
                <div className="login-access">
                  <p>You need to Sign In to access here</p>
                </div>
              )
          )}
        />

        <Route
          exact
          path="/SingleHouseList"
          render={() => (
            loggedin ? (
              <SingleHouseList />
            )
              : (
                <div className="login-access">
                  <p>You need to Sign In to access here</p>
                </div>
              )
          )}
        />
        <Route exact path="/Login" component={Login} />
        <Route exact path="/Logout" component={Logout} />
        <Route exact path="/Signup" component={Signup} />
      </Switch>

    </BrowserRouter>
  );
};
export default Routes;

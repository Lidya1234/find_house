import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';
import { loginuser } from '../reducers/findSlice';
import '../style/style.css';
import '../style/main.scss';
import '../style/login.css';
import Notify from '../Notification/Notify';

const Login = () => {
  let username = '';
  let password = '';
  const history = useHistory();
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.houses);
  const handleSubmit = (event) => {
    event.preventDefault();
    let user = {
      username,
      password,
    };
    dispatch(loginuser(user));
    user = {
      username: '',
      password: '',
    };
    if (userInfo.logged_in) {
      history.push('/HouseList');
      Notify();
    }
  };

  const handleUNameChange = (e) => {
    username = e.target.value;
  };
  const handlePasswordChange = (e) => {
    password = e.target.value;
  };
  return (
    <div className="container" data-testid="login">
      <div className="login">
        <h1>Sign in</h1>
        <span>
          Hello there! Signin and
          <div>Start managing your system</div>
        </span>

        <form onSubmit={handleSubmit} className="form">
          <div>
            <input
              type="text"
              placeholder="Enter username"
              className="txt-input"
              name="username"
              onChange={handleUNameChange}
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Enter password"
              className="txt-input"
              name="password"
              onChange={handlePasswordChange}
            />
          </div>
          <div>
            <button type="submit" className="txt-input btn-signin">
              Sign In
            </button>
          </div>
        </form>
        <div>
          You do not have an account
          <Link to="/Signup" className="signlink">Sign up</Link>
        </div>
      </div>
    </div>
  );
};
export default Login;

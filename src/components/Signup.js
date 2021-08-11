import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';

import { signuser } from '../reducers/findSlice';
import '../style/style.css';
import '../style/main.scss';
import Notify from '../Notification/Notify';
import Notifyerr from '../Notification/Notifyerr';

const Signup = () => {
  let username = '';
  let password = '';
  /* eslint-disable camelcase */
  let password_confirmation = '';
  const history = useHistory();
  const dispatch = useDispatch();
  const { create } = useSelector((state) => state.houses);
  const handleSubmit = (event) => {
    event.preventDefault();
    const user = {
      username,
      password,
      password_confirmation,
    };

    dispatch(signuser(user));
    setTimeout(() => {
      if (create.status === 500) {
        Notifyerr();
      } else if (create.status === 'created') {
        history.push('/Login');
        Notify();
      }
    }, 6000);
  };

  const handleUNameChange = (e) => {
    username = e.target.value;
  };
  const handlePasswordChange = (e) => {
    password = e.target.value;
  };
  const handlePasswordConfChange = (e) => {
    password_confirmation = e.target.value;
  };
  /* eslint-enable camelcase */
  return (
    <div className="container" data-testid="signup">
      <div className="login">
        <h1>Sign in</h1>
        <span>
          Hello There! Signup and
          <div>start managing your system</div>
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
            <input
              type="password"
              placeholder="Confirm password"
              className="txt-input"
              name="password"
              onChange={handlePasswordConfChange}
            />
          </div>
          <div>
            <button type="submit" className="txt-input btn-signin">
              Sign Up
            </button>
          </div>
        </form>
        <div>
          You already have an account
          <Link to="/Login" className="signlink">Sign in</Link>
        </div>
      </div>
    </div>
  );
};
export default Signup;

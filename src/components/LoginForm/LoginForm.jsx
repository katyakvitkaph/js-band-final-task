/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/index';
import Loader from '../Loader/index';

const LoginForm = props => {
  const [username, setUsername] = useState('');

  const { loginError, login, isLoading, error, clearErrorMessage } = props;

  useEffect(() => {
    if (error && username) {
      clearErrorMessage();
    }
  }, [username]);

  const handleChange = e => {
    setUsername(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    if (username.length < 4 || username.length > 16) {
      loginError();
      return;
    }
    login({ username });
  };

  return (
    <>
      {isLoading ? (
        <div className="signin-loader">
          <Loader />
        </div>
      ) : (
        <form className="form login-page__form" onClick={handleSubmit}>
          <label className="form__label" htmlFor="username">
            Name
          </label>
          <input
            className="form__input"
            type="text"
            id="username"
            value={username}
            onChange={handleChange}
          />
          {error && username ? (
            <div className="error-msg">Username is not valid.</div>
          ) : (
            ''
          )}

          <Button type="submit" name="Log In" className="btn login-btn" />
        </form>
      )}
    </>
  );
};

LoginForm.propTypes = {
  loginError: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
  clearErrorMessage: PropTypes.func.isRequired,
};
export default LoginForm;

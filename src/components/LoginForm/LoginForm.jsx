/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/index';
import Loader from '../Loader/index';
import { ReactComponent as Logo } from '../../assest/icons/logo_transparent.svg';

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

  const handleKeypress = (event: KeyboardEvent) => {
    if (event.key === 'Enter' || event.charCode === 13) { 
      handleSubmit(event)
  }
};

  return (
    <>
      {isLoading ? (
          <Loader />

      ) : (
        <>
        	<Logo className='logo' width='200px' height='200px' />
        <form className="form login-page__form" onClick={handleSubmit}>
          <label className="form__label" htmlFor="username">
            Name
          </label>
          <input
            className="form__input input"
            type="text"
            id="username"
            value={username}
            onChange={handleChange}
            onKeyPress={handleKeypress}
          />
          {error && username ? (
            <div className="error-msg">Username is not valid.</div>
          ) : (
            ''
          )}

          <Button  type="submit" name="Log In" className="btn login-btn" />
        </form>
        </>
      )}
    </>
  );
};

LoginForm.propTypes = {
  loginError: PropTypes.func,
  login: PropTypes.func,
  isLoading: PropTypes.bool,
  error: PropTypes.string,
  clearErrorMessage: PropTypes.func,
};

LoginForm.defaultProps = {
loginError: null,
error : '',
clearErrorMessage: null,
isLoading: false,
login: null
};

export default LoginForm;

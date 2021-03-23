import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { isAuth } from '../store/session/sessionSelectors';

const privateRoute = ({ component: Component, auth, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      auth ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/books',
            state: { from: props.location }
          }}
        />
      )
    }
  />
);

const mapStateToProps = state => ({
  auth: isAuth(state)
});

export default connect(mapStateToProps)(privateRoute);
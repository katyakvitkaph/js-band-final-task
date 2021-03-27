import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';
import { isAuth } from '../../store/session/sessionSelectors';

const withAuth = BaseComponent => {
  class WithAuthRedirect extends Component {
    static propTypes = {
      authentificated: PropTypes.bool.isRequired,
      history: ReactRouterPropTypes.history.isRequired,
      location: ReactRouterPropTypes.location.isRequired,
    };

    componentDidMount() {
      const { authentificated, history } = this.props;
      if (!authentificated) return;

      history.replace('/catalog');
    }

    componentDidUpdate() {
      const { authentificated, location, history } = this.props;
      if (!authentificated) return;
      if (location.state && location.state.from) {
        history.replace(location.state.from);
      } else {
        history.replace('/catalog');
      }
    }

    render() {
      return <BaseComponent />;
    }
  }

  const mapStateToProps = state => ({ authentificated: isAuth(state) });

  return connect(mapStateToProps)(WithAuthRedirect);
};

export default withAuth;

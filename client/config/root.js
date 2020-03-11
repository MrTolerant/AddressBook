/* eslint-disable no-console */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import PropTypes from 'prop-types'
import { Provider, connect } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import { Switch, Route, withRouter, Redirect } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import store, { history } from '../redux'

import Index from '../components/index'
import NotFound from '../components/404'

import Startup from './startup'

const OnlyAnonymousRoute = ({ component: Component, ...rest }) => {
  const func = (props) =>
    !!rest.user && !!rest.user.name && !!rest.token ? (
      <Redirect to={{ pathname: '/' }} />
    ) : (
      <Component {...props} />
    )
  return <Route {...rest} render={func} />
}

const PrivateRoute = ({ component: Component, ...rest }) => {
  const func = (props) =>
    !rest.email && !rest.token && !rest.refreshToken ? (
      <Component {...props} />
    ) : (
      <Redirect
        to={{
          pathname: '/login'
        }}
      />
    )
  return <Route {...rest} render={func} />
}

const types = {
  component: PropTypes.func.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string
  }),
  token: PropTypes.string,
  refreshToken: PropTypes.string,
  email: PropTypes.string
}

const defaults = {
  location: {
    pathname: ''
  },
  token: '',
  refreshToken: '',
  email: ''
}

OnlyAnonymousRoute.propTypes = types
PrivateRoute.propTypes = types

PrivateRoute.defaultProps = defaults
OnlyAnonymousRoute.defaultProps = defaults

const mapStateToProps = () => ({
  email: '',
  token: '',
  refreshToken: ''
})

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch)

const PrivateRouteConnected = connect(mapStateToProps, mapDispatchToProps)(PrivateRoute)

const mapDispatchToPropsStartup = (dispatch) => bindActionCreators({}, dispatch)

const StartupConnected = withRouter(connect(() => ({}), mapDispatchToPropsStartup)(Startup))

export default (props) => {
  return (
    <Provider store={store}>
      <ConnectedRouter
        history={history}
        location={props.location}
        context={props.context}
        onUpdate={() => window.scrollTo(0, 0)}
      >
        <StartupConnected>
          <Switch>
            <Switch>
              <PrivateRouteConnected exact path="/" component={() => <Index />} />
              <Route component={() => <NotFound />} />
              <PrivateRouteConnected exact path="/hidden" component={() => <Index />} />
            </Switch>
          </Switch>
        </StartupConnected>
      </ConnectedRouter>
    </Provider>
  )
}

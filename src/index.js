import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import store, { history } from './store'

import App from './components/App'

import './styles/style.scss'

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('app')
)

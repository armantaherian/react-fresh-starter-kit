import React, { Component } from 'react'
import { hot } from 'react-hot-loader'

import Hello from './Hello'

class App extends Component {
  render() {
    return (
      <div>
        <Hello hello="Helloo0o0!" />
        <h1>Welcome to My Starter kit</h1>
      </div>
    )
  }
}

export default hot(module)(App)

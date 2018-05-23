import React, { Component } from 'react'
import { hot } from 'react-hot-loader'

import Hello from './Hello'
import Counter from './Counter'

class App extends Component {
  render() {
    return (
      <div>
        <Hello hello="Helloo0o0!" />
        <h1>Welcome to My Starter kit</h1>
        <Counter />
      </div>
    )
  }
}

export default hot(module)(App)

import React, { PureComponent } from 'react'

class Hello extends PureComponent {
  render() {
    const { hello } = this.props

    return (
      <div>
        <h2>{hello}</h2>
      </div>
    )
  }
}

export default Hello

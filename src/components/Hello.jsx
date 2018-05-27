import React, { PureComponent } from 'react';
import propTypes from 'prop-types';

class Hello extends PureComponent {
  render() {
    const { hello } = this.props;

    return (
      <div>
        <h2>{hello}</h2>
      </div>
    );
  }
}

Hello.propTypes = {
  hello: propTypes.string,
};

export default Hello;

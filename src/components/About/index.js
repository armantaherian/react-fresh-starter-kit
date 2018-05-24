import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

const About = props => (
  <div>
    <h2>Hi, here is about page.</h2>
    <p>Did you get here via Redux?</p>
    <p>Count was: {props.count}</p>
    <button onClick={() => props.changePage()}>Back to homepage</button>
  </div>
)

const mapStateToProps = state => ({
  count: state.counter.count,
})

const mapDispatchToProps = dispatch =>
  bindActionCreators({
      changePage: () => push('/')
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(About)

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { increment } from './actions/actions'

class App extends Component {
  render () {
    return (
      <div>
          Burger App
          Count:{this.props.count}
        <button onClick={() => this.props.increment(1)}>Increment</button>
      </div>
    )
  }
}
const mapStateToProps = state => ({
  count: state.Count
})
const mapDispatchToProps = {
  increment
}
export default connect(mapStateToProps, mapDispatchToProps)(App)

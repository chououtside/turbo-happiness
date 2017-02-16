import React, { Component } from 'react'
import Header from '../js/Header.js'

const { element } = React.PropTypes
// Restaurant Banner can eventually take props for multiple restaurants

class App extends Component {
  render () {
    return (
      <div className='app-container'>
        <Header />
        {this.props.children}
      </div>

    )
  }
}

App.propTypes = {
  children: element
}

export default App

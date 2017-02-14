const React = require('react')
const Header = require('../js/Header.js')

// Restaurant Banner can eventually take props for multiple restaurants

const App = React.createClass({
  render () {
    return (
      <div className='app-container'>
        <Header />
        {this.props.children}
      </div>

    )
  }

})

export default App

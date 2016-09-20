const React = require('react')
const ReactDOM = require('react-dom')
const Menu = require('./Menu.js')
const menuData = require('../../public/data.json')
const Header = require('./Header.js')

const App = () => (
  <div className='app-container'>
    <Header />
    <h1>Shopping Cart</h1>
    <Menu menuData={menuData} />
  </div>
)

ReactDOM.render(<App />, document.getElementById('app'))

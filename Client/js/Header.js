const React = require('react')

const Header = (props) => (
  <header className='header group'>
    <h1 className='logo'>ChineseGrub</h1>

    <a href='#' className='bag'>
      <div className='bag-icon-section'>
        <img src='img/bag.png' className='bag-icon' />
        <span className='bag-count'>{props.shoppingCart.length}</span>
      </div>
    </a>
  </header>
)

const { array } = React.PropTypes

Header.propTypes = {
  shoppingCart: array
}

module.exports = Header

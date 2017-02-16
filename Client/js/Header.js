const React = require('react')
import { connect } from 'react-redux'

const Header = ({bag}) => (
  <header className='header group'>
    <h1 className='logo'>ChineseGrub</h1>

    <a href='#' className='bag'>
      <div className='bag-icon-section'>
        <img src='img/bag.png' className='bag-icon' />
        <span className='bag-count'>{bag.quantityInCart}</span>
      </div>
    </a>
  </header>
)

const { shape, array, number } = React.PropTypes

Header.propTypes = {
  bag: shape({
    items: array,
    subTotal: number,
    quantityInCart: number
  })
}

function mapStateToProps ({ bag }) {
  return { bag }
}

export default connect(mapStateToProps)(Header)

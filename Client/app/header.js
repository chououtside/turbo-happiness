import React, { Component } from 'react'
import { connect } from 'react-redux'
const { shape, array, number, object } = React.PropTypes

class Header extends Component {
  static contextTypes = {
    router: object
  }

  render () {
    const { bag } = this.props
    return (
      <header className='header group'>
        <h1 className='logo' onClick={() => this.context.router.push('/')}>ChineseGrub</h1>

        <a href='#' className='bag'>
          <div className='bag-icon-section'>
            <img src='/img/bag.png' className='bag-icon' />
            <span className='bag-count'>{bag.quantityInCart}</span>
          </div>
        </a>
      </header>
    )
  }
}


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

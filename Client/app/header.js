import React, { Component } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'

const { shape, array, number, func } = React.PropTypes

class Header extends Component {
  render () {
    const { bag } = this.props
    return (
      <header className='header group'>
        <h1 className='logo' onClick={() => this.props.redirectHome()}>ChineseGrub</h1>

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
  }),
  redirectHome: func
}

function mapStateToProps ({ bag }) {
  return { bag }
}

function mapDispatchToProps (dispatch) {
  return {
    redirectHome: () => dispatch(push('/'))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)

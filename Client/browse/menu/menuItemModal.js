import React, { Component } from 'react'
import { connect } from 'react-redux'
import { IntlProvider, FormattedNumber } from 'react-intl'
import { addToCart } from './menuActions'

const { string, number, func } = React.PropTypes

class MenuItemModal extends Component {
  addItem (item, quantity, price) {
    this.props.addToCart(item, quantity, price)
  }

  render () {
    return (
      <div className='modal fade' id={`${this.props.id}-modal`} tabIndex='-1' role='dialog' aria-labelledby='myModalLabel' aria-hidden='true'>
        <div className='modal-dialog'>
          <div className='modal-content'>
            <div className='modal-header'>
              <button type='button' className='close' data-dismiss='modal'>
                <span aria-hidden='true'>&times;</span>
                <span className='sr-only'>Close</span>
              </button>
              <h4 className='modal-title' id='myModalLabel'>
                  Add Item
              </h4>
            </div>
            <div className='modal-body'>
              <h4>{`${this.props.name} - `}<IntlProvider locale='en'><FormattedNumber value={this.props.price} style='currency' currency='USD' /></IntlProvider></h4>
              <form role='form'>
                <div className='form-group'>
                  <label htmlFor='quantitySelect'>Quantity</label>
                  <select className='form-control' id='quantitySelect' ref={`${this.props.id}-quantity`}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                  </select>
                </div>
                <div className='form-group specialInstructions'>
                  <label htmlFor='specialInstructions'>Special Instructions:</label>
                  <textarea className='form-control' rows='5' id='specialInstructions' />
                </div>
              </form>
            </div>
            <div className='modal-footer'>
              <button type='button' className='btn btn-default'data-dismiss='modal'>
                Close
              </button>
              <button
                type='button'
                className='btn btn-primary'
                data-dismiss='modal'
                onClick={() => this.addItem(this.props.name, this.refs[`${this.props.id}-quantity`].value, this.props.price)
                }
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

MenuItemModal.propTypes = {
  addToCart: func,
  price: string,
  name: string,
  id: number
}

function mapDispatchToProps (dispatch) {
  return {
    addToCart: (item, quantity, price) => dispatch(addToCart(item, quantity, price))
  }
}

export default connect(null, mapDispatchToProps)(MenuItemModal)

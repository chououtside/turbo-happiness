import React, { Component } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import { reduxForm, Field } from 'redux-form'

const { func, object } = React.PropTypes

class PaymentForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      creditOrCash: {
        creditCard: true,
        cash: false
      },
      tip: {
        credit: true,
        cash: false
      },
      tipAmount: {
        tip15: false,
        tip20: true,
        tip25: false,
        tip30: false,
        tipCustom: false
      }
    }
  }

  toggleCreditOrCash (button) {
    if (this.state.creditOrCash[button]) {
      return
    } else {
      this.setState({
        creditOrCash: {
          creditCard: !this.state.creditOrCash.creditCard,
          cash: !this.state.creditOrCash.cash
        }
      })
    }
  }

  toggleTipCreditOrCash (button) {
    if (this.state.tip[button]) {
      return
    } else {
      this.setState({
        tip: {
          credit: !this.state.tip.credit,
          cash: !this.state.tip.cash
        }
      })
    }
  }

  toggleTipAmount (button) {
    if (this.state.tipAmount[button]) {
      return
    } else {

      let tipObj = {
        tip15: false,
        tip20: false,
        tip25: false,
        tip30: false,
        tipCustom: false
      }

      tipObj[button] = true;

      this.setState({
        tipAmount: tipObj
      })
    }
  }

  render () {
    if (this.props.checkout.deliveryForm === null) {
      return <h1>deliver form is null</h1>
    } else {
      let { firstName, lastName, address1, address2, city, state, zipcode, phoneNumber } = this.props.checkout.deliveryForm
      return (
        <form className='payment-form'>
          <div className='row'>
            <div className='col-md-6'>
              <div className='body'><span>Deliver on {Date().toString().substring(4, 10)} ASAP to</span></div>
              <div className='body body-link' onClick={() => this.props.redirectToCheckout()}><span>Home</span><span className='glyphicon glyphicon-pencil' /></div>
              <div className='body'><span>{firstName}</span> <span>{lastName}</span></div>
              <div className='body'><span>{address1}</span></div>
              <div className='body'><span>{address2}</span></div>
              <div className='body'><span>{`${city} ${state}, ${zipcode}`}</span></div>
              <div className='body'><span>{phoneNumber}</span></div>
            </div>
            <div className='col-md-6'>
              <Field name='specialInstructions' component='textarea' type='text' className='form-control' placeholder='Special Instructions' />
            </div>
          </div>
          <div className='row'>
            <h4>Payment Information</h4>
          </div>
          <div className='row payment-btns'>
            <button type='button' className={this.state.creditOrCash.creditCard ? 'btn btn-primary col-md-6 btn-large' : 'btn btn-default col-md-6 btn-large'} onClick={() => this.toggleCreditOrCash('creditCard')}>Credit Card</button>
            <button type='button' className={this.state.creditOrCash.cash ? 'btn btn-primary col-md-6 btn-large' : 'btn btn-default col-md-6 btn-large'} onClick={() => this.toggleCreditOrCash('cash')}>Cash</button>
          </div>
          <div className='row'>
            <div className='col-md-4 form-group'>
              <Field name='cardNumber' component='input' type='text' className='form-control' placeholder='Card Number' />
            </div>
            <div className='col-md-2 form-group'>
              <Field name='ccExp' component='input' type='text' className='form-control' placeholder='MM/YY' />
            </div>
            <div className='col-md-3 form-group'>
              <Field name='cvv' component='input' type='text' className='form-control' placeholder='CVV' />
            </div>
            <div className='col-md-3 form-group'>
              <Field name='billingZipcode' component='input' type='text' className='form-control' placeholder='Billing Postal Code' />
            </div>
          </div>
          <div className='row payment-btns'>
            <button type='button' className={this.state.tip.credit ? 'btn btn-primary col-md-6 btn-large' : 'btn btn-default col-md-6 btn-large'} onClick={() => this.toggleTipCreditOrCash('credit')}>Tip with credit card</button>
            <button type='button' className='btn btn-default col-md-6 btn-large' className={this.state.tip.cash ? 'btn btn-primary col-md-6 btn-large' : 'btn btn-default col-md-6 btn-large'} onClick={() => this.toggleTipCreditOrCash('cash')}>Tip with Cash</button>
          </div>
          <div className='row payment-btns'>
            <div className='col-md-6'>
              <button type='button' className={this.state.tipAmount.tip15 ? 'btn btn-primary col-md-3 btn-large' : 'btn btn-default col-md-3 btn-large'} onClick={() => this.toggleTipAmount('tip15')}>
                <div>{`$${((this.props.bag.subTotal + this.props.bag.subTotal * (1 / 10)) * (3 / 20)).toFixed(2)}`}</div>
                <div>15%</div>
              </button>
              <button type='button' className={this.state.tipAmount.tip20 ? 'btn btn-primary col-md-3 btn-large' : 'btn btn-default col-md-3 btn-large'} onClick={() => this.toggleTipAmount('tip20')}>
                <div>{`$${((this.props.bag.subTotal + this.props.bag.subTotal * (1 / 10)) * (1 / 5)).toFixed(2)}`}</div>
                <div>20%</div>
              </button>
              <button type='button' className={this.state.tipAmount.tip25 ? 'btn btn-primary col-md-3 btn-large' : 'btn btn-default col-md-3 btn-large'} onClick={() => this.toggleTipAmount('tip25')}>
                <div>{`$${((this.props.bag.subTotal + this.props.bag.subTotal * (1 / 10)) * (1 / 4)).toFixed(2)}`}</div>
                <div>25%</div>
              </button>
              <button type='button' className={this.state.tipAmount.tip30 ? 'btn btn-primary col-md-3 btn-large' : 'btn btn-default col-md-3 btn-large'} onClick={() => this.toggleTipAmount('tip30')}>
                <div>{`$${((this.props.bag.subTotal + this.props.bag.subTotal * (1 / 10)) * (3 / 10)).toFixed(2)}`}</div>
                <div>30%</div>
              </button>
            </div>
            <div className='col-md-6 custom-tip-input-group'>
              <div className='input-group'>
                <span className='input-group-btn'>
                  <button type='button' className={this.state.tipAmount.tipCustom ? 'btn btn-primary' : 'btn btn-default'} onClick={() => this.toggleTipAmount('tipCustom')}>
                    <div>Custom Tip</div>
                    <div>20%</div>
                  </button>
                </span>
                <Field name='customTip' component='input' type='text' className='form-control custom-tip-input' />
              </div>
            </div>
          </div>
          <div className='row'>
            <button type='submit' className='btn-success col-md-12 btn'>Place Your Order</button>
          </div>
        </form>
      )
    }
  }
}
PaymentForm.propTypes = {
  redirectToCheckout: func,
  checkout: object,
  bag: object
}

function mapDispatchToProps (dispatch) {
  return {
    redirectToCheckout: () => dispatch(push('/checkout'))
  }
}

const reduxPaymentForm = reduxForm({
  form: 'payment'
})(PaymentForm)

export default connect(state => ({ initialValues: state.checkout.deliveryForm, checkout: state.checkout, bag: state.bag }), mapDispatchToProps)(reduxPaymentForm)

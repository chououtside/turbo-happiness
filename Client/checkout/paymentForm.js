import React, { Component } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import { reduxForm, Field } from 'redux-form'
import { adjustTip, adjustCustomTip } from './checkoutActions'
import { sendEmail } from '../email/email'

const { func, object } = React.PropTypes

class PaymentForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      customTip: '',
      customTipPercent: 0,
      subTotal: this.props.bag.subTotal.toFixed(2),
      creditOrCash: {
        creditCard: true,
        cash: false
      },
      tip: {
        credit: true,
        cash: false
      },
      tipAmount: {
        tip15: { toggle: false, value: 15 },
        tip20: { toggle: true, value: 20 },
        tip25: { toggle: false, value: 25 },
        tip30: { toggle: false, value: 30 },
        tipCustom: { toggle: false }
      }
    }

    this.customTipChange = this.customTipChange.bind(this)
    this.toggleTipAmount = this.toggleTipAmount.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  componentWillMount () {
    if (this.props.checkout.deliveryForm) {
      this.props.adjustTip(this.props.bag.subTotal, 10, 20)
    }
  }

  onSubmit (values) {
    sendEmail(values, this.props.bag)
  }

  customTipChange (event) {
    this.setState({
      customTip: event.target.value,
      customTipPercent: isNaN((event.target.value / (this.state.subTotal * 1.1) * 100).toFixed(0)) ? 0 : (event.target.value / (this.state.subTotal * 1.1) * 100).toFixed(0)
    })

    if (isNaN((event.target.value / (this.state.subTotal * 1.1) * 100).toFixed(0))) {
      this.props.adjustCustomTip(0)
    } else {
      this.props.adjustCustomTip(event.target.value)
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
    if (button === 'cash') {
      this.props.adjustCustomTip(0)
    } else {
      this.toggleTipAmount('tip20')
      this.props.adjustTip(this.props.bag.subTotal, 10, 20)
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
    if (button === 'cash') {
      this.props.adjustCustomTip(0)
    } else {
      this.toggleTipAmount('tip20')
      this.props.adjustTip(this.props.bag.subTotal, 10, 20)
    }
  }

  toggleTipAmount (button) {
    const calcTip = (total, tax, tip) => (total * (1 + tax / 100) * (tip / 100)).toFixed(2)
    let currentTip = calcTip(20, this.state.subTotal)
    let currentPercent = 0

    // if selected button is the same button, do not do anything and return out of function
    if (this.state.tipAmount[button].toggle) {
      return
    } else {
      // this whole block is to hold state for tipAmount for the customTip Input
      // if current selected button is custom tip, reset values
      if (this.state.tipAmount.tipCustom.toggle) {
        this.setState({customTip: '', customTipPercent: 0})
      } else {
      // iterate through all keys to find CURRENT selected button to store the value
        for (const key in this.state.tipAmount) {
          if (this.state.tipAmount[key].toggle) {
            currentTip = calcTip(this.state.subTotal, 10, this.state.tipAmount[key].value)
            currentPercent = this.state.tipAmount[key].value
          }
        }
      }

      let tipObj = {
        tip15: { toggle: false, value: 15 },
        tip20: { toggle: false, value: 20 },
        tip25: { toggle: false, value: 25 },
        tip30: { toggle: false, value: 30 },
        tipCustom: { toggle: false }
      }

      tipObj[button].toggle = true

      if (button === 'tipCustom') {
        this.setState({
          tipAmount: tipObj,
          customTip: currentTip,
          customTipPercent: currentPercent
        })
        this.props.adjustTip(this.props.bag.subTotal, 10, currentPercent)
      } else {
        this.setState({
          tipAmount: tipObj
        })
        this.props.adjustTip(this.props.bag.subTotal, 10, this.state.tipAmount[button].value)
      }
    }
  }

  render () {
    const { handleSubmit } = this.props

    const tipButtons = this.state.tip.cash ? <div /> : (
      <div className='row payment-btns'>
        <div className='col-md-6'>
          <button type='button' className={this.state.tipAmount.tip15.toggle ? 'btn btn-primary col-md-3 btn-large' : 'btn btn-default col-md-3 btn-large'} onClick={() => this.toggleTipAmount('tip15')}>
            <div>{`$${(this.state.subTotal * 1.1 * (3 / 20)).toFixed(2)}`}</div>
            <div>15%</div>
          </button>
          <button type='button' className={this.state.tipAmount.tip20.toggle ? 'btn btn-primary col-md-3 btn-large' : 'btn btn-default col-md-3 btn-large'} onClick={() => this.toggleTipAmount('tip20')}>
            <div>{`$${(this.state.subTotal * 1.1 * (1 / 5)).toFixed(2)}`}</div>
            <div>20%</div>
          </button>
          <button type='button' className={this.state.tipAmount.tip25.toggle ? 'btn btn-primary col-md-3 btn-large' : 'btn btn-default col-md-3 btn-large'} onClick={() => this.toggleTipAmount('tip25')}>
            <div>{`$${(this.state.subTotal * 1.1 * (1 / 4)).toFixed(2)}`}</div>
            <div>25%</div>
          </button>
          <button type='button' className={this.state.tipAmount.tip30.toggle ? 'btn btn-primary col-md-3 btn-large' : 'btn btn-default col-md-3 btn-large'} onClick={() => this.toggleTipAmount('tip30')}>
            <div>{`$${(this.state.subTotal * 1.1 * (3 / 10)).toFixed(2)}`}</div>
            <div>30%</div>
          </button>
        </div>
        <div className='col-md-6 custom-tip-input-group'>
          <div className='input-group'>
            <span className='input-group-btn'>
              <button type='button' className={this.state.tipAmount.tipCustom.toggle ? 'btn btn-primary' : 'btn btn-default'} onClick={() => this.toggleTipAmount('tipCustom')}>
                <div>Custom Tip</div>
                <div>{this.state.customTipPercent}%</div>
              </button>
            </span>
            <Field name='customTip' component='input' type='text' className='form-control custom-tip-input' props={{value: this.state.customTip}} onChange={this.customTipChange} placeholder='Custom tip amount' onClick={() => this.toggleTipAmount('tipCustom')} />
          </div>
        </div>
      </div>
    )

    const paymentBody = this.state.creditOrCash.cash ? <div className='payment-body' /> : (
      <div className='payment-body'>
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
          <div className='row payment-btns'>
            <button type='button' className={this.state.tip.credit ? 'btn btn-primary col-md-6 btn-large' : 'btn btn-default col-md-6 btn-large'} onClick={() => this.toggleTipCreditOrCash('credit')}>Tip with credit card</button>
            <button type='button' className={this.state.tip.cash ? 'btn btn-primary col-md-6 btn-large' : 'btn btn-default col-md-6 btn-large'} onClick={() => this.toggleTipCreditOrCash('cash')}>Tip with Cash</button>
          </div>
        </div>
        {tipButtons}
      </div>
    )

    if (this.props.checkout.deliveryForm === null) {
      return <h1>deliver form is null</h1>
    } else {
      let { firstName, lastName, address1, address2, city, state, zipcode, phoneNumber } = this.props.checkout.deliveryForm
      return (
        <form className='payment-form' onSubmit={handleSubmit(this.onSubmit)}>
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
          {paymentBody}
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
  bag: object,
  adjustTip: func,
  adjustCustomTip: func,
  handleSubmit: func
}

function mapDispatchToProps (dispatch) {
  return {
    redirectToCheckout: () => dispatch(push('/checkout')),
    adjustTip: (total, tax, tip) => dispatch(adjustTip(total, tax, tip)),
    adjustCustomTip: (tipAmount) => dispatch(adjustCustomTip(tipAmount))
  }
}

const reduxPaymentForm = reduxForm({
  form: 'payment'
})(PaymentForm)

export default connect(state => ({ initialValues: state.checkout.deliveryForm, checkout: state.checkout, bag: state.bag }), mapDispatchToProps)(reduxPaymentForm)

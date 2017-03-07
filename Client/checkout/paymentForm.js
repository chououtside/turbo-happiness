import React, { Component } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import { reduxForm, Field } from 'redux-form'

class PaymentForm extends Component {
  render () {
    return (
      <form className='payment-form'>
        <div className='row'>
          <div className='col-md-6'>
            <div className='body'><span>Delivery on Mar 6 ASAP to</span></div>
            <div className='body body-link' onClick={() => this.props.redirectToCheckout()}><span>Home</span><span className='glyphicon glyphicon-pencil' /></div>
            <div className='body'><span>Alexander</span> <span>Chou</span></div>
            <div className='body'><span>2020 P St NW</span></div>
            <div className='body'><span>Apt 4</span></div>
            <div className='body'><span>Washington, DC 20036</span></div>
            <div className='body'><span>(703) 870-8247</span></div>
          </div>
          <div className='col-md-6'>
            <Field name='specialInstructions' component='textarea' type='text' className='form-control' placeholder='Special Instructions' />
          </div>
        </div>
        <div className='row'>
          <h4>Payment Information</h4>
        </div>
        <div className='row payment-btns'>
          <button type='button' className='btn btn-primary col-md-6 btn-large'>Credit Card</button>
          <button type='button' className='btn btn-default col-md-6 btn-large'>Cash</button>
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
      </form>
    )
  }
}

function mapDispatchToProps (dispatch) {
  return {
    redirectToCheckout: () => dispatch(push('/checkout'))
  }
}

const reduxPaymentForm = reduxForm({
  form: 'payment'
})(PaymentForm)

export default connect(null, mapDispatchToProps)(reduxPaymentForm)

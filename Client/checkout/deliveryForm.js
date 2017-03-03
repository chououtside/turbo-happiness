import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'

class DeliveryForm extends Component {
  render () {
    return (
      <form>
        <h4 className='delivery-contact-header'>Contact</h4>
        <div className='row'>
          <div className='col-md-6 form-group'>
            <Field name='firstName' component='input' type='text' className='form-control' placeholder="First Name"/>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-6 form-group'>
            <Field name='lastName' component='input' type='text' className='form-control' placeholder="Last Name"/>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-6 form-group'>
            <Field name='email' component='input' type='text' className='form-control' placeholder="Email Address"/>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-6 form-group'>
            <Field name='phoneNumber' component='input' type='text' className='form-control' placeholder="Mobile Phone (Required)"/>
          </div>
        </div>
      </form>
    )
  }
}

DeliveryForm = reduxForm({
  form: 'delivery'
})(DeliveryForm)

export default DeliveryForm
import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'

class DeliveryForm extends Component {
  render () {
    return (
      <form>
        <h4 className='delivery-form-sub-header'>Contact</h4>
        <div className='row'>
          <div className='col-md-6 form-group'>
            <Field name='firstName' component='input' type='text' className='form-control' placeholder='First Name' />
          </div>
        </div>
        <div className='row'>
          <div className='col-md-6 form-group'>
            <Field name='lastName' component='input' type='text' className='form-control' placeholder='Last Name' />
          </div>
        </div>
        <div className='row'>
          <div className='col-md-6 form-group'>
            <Field name='email' component='input' type='text' className='form-control' placeholder='Email Address' />
          </div>
        </div>
        <div className='row'>
          <div className='col-md-6 form-group'>
            <Field name='phoneNumber' component='input' type='text' className='form-control' placeholder='Mobile Phone (Required)' />
          </div>
        </div>
        <h4 className='delivery-form-sub-header'>Address</h4>
        <div className='row'>
          <div className='col-md-4 form-group'>
            <Field name='address1' component='input' type='text' className='form-control' placeholder='Address (Required)' />
          </div>
          <div className='col-md-4 form-group'>
            <Field name='address2' component='input' type='text' className='form-control' placeholder='Apt., suite, floor, etc.' />
          </div>
          <div className='col-md-4 form-group'>
            <Field name='crossStreet' component='input' type='text' className='form-control' placeholder='Cross Street' />
          </div>
        </div>
        <div className='row'>
          <div className='col-md-4 form-group'>
            <Field name='city' component='input' type='text' className='form-control' placeholder='City (Required)' />
          </div>
          <div className='col-md-4 form-group'>
            <Field name='state' component='input' type='text' className='form-control' placeholder='State (Required)' />
          </div>
          <div className='col-md-4 form-group'>
            <Field name='zipcode' component='input' type='text' className='form-control' placeholder='Zip Code (Required)' />
          </div>
        </div>
        <div className='row'>
          <div className='col-md-12 form-group'>
            <Field name='specialInstructions' component='textarea' type='text' className='form-control' placeholder='Special Instructions' />
          </div>
        </div>

      </form>
    )
  }
}

const reduxDeliveryForm = reduxForm({
  form: 'delivery'
})(DeliveryForm)

export default reduxDeliveryForm

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { reduxForm, Field } from 'redux-form'
import { push } from 'react-router-redux'
import { submitDeliveryInfo } from './checkoutActions'

const { func } = React.PropTypes

//redux form validation rules
const required = value => value ? undefined : 'Required'
const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
  'Invalid email address' : undefined

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div>
    <div>
      <input {...input} className={touched && error ? 'form-control validate' : 'form-control'} placeholder={label} type={type} />
      {touched && ((error && <span className='validate-color'>{error}</span>) || (warning && <span className='validate-color'>{warning}</span>))}
    </div>
  </div>
)

class DeliveryForm extends Component {
  onSubmit (values) {
    this.props.submitDeliveryInfo(values)
    this.props.redirectToPayment()
  }

  render () {
    const { handleSubmit } = this.props

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <h4 className='delivery-form-sub-header'>Contact</h4>
        <div className='row'>
          <div className='col-md-6 form-group'>
            <Field name='firstName' type='text' component={renderField} validate={[required]} className='form-control' label={'First Name (Required)'} />
          </div>
        </div>
        <div className='row'>
          <div className='col-md-6 form-group'>
            <Field name='lastName' type='text' component={renderField} validate={[required]} className='form-control' label={'Last Name (Required)'} />
          </div>
        </div>
        <div className='row'>
          <div className='col-md-6 form-group'>
            <Field name='email' type='text' className='form-control' component={renderField} validate={[required, email]} label={'Email Address (Required)'} />
          </div>
        </div>
        <div className='row'>
          <div className='col-md-6 form-group'>
            <Field name='phoneNumber' type='text' component={renderField} validate={[required]} className='form-control' label={'Mobile Phone (Required)'} />
          </div>
        </div>
        <h4 className='delivery-form-sub-header'>Address</h4>
        <div className='row'>
          <div className='col-md-4 form-group'>
            <Field name='address1' type='text' component={renderField} validate={[required]} className='form-control' label={'Address (Required)'} />
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
            <Field name='city' type='text' component={renderField} validate={[required]} className='form-control' label={'City (Required)'} />
          </div>
          <div className='col-md-4 form-group'>
            <Field name='state' type='text' component={renderField} validate={[required]} className='form-control' label={'State (Required)'} />
          </div>
          <div className='col-md-4 form-group'>
            <Field name='zipcode' type='text' component={renderField} validate={[required]} className='form-control' label={'Zip Code(Required)'} />
          </div>
        </div>
        <div className='row'>
          <div className='col-md-12 form-group'>
            <Field name='specialInstructions' component='textarea' type='text' className='form-control' placeholder='Special Instructions' />
          </div>
        </div>

        <button className='btn btn-primary' type='submit'>Submit</button>
      </form>
    )
  }
}

DeliveryForm.propTypes = {
  handleSubmit: func,
  submitDeliveryInfo: func,
  redirectToPayment: func
}

function mapDispatchToProps (dispatch) {
  return {
    submitDeliveryInfo: (values) => dispatch(submitDeliveryInfo(values)),
    redirectToPayment: () => dispatch(push('/payment'))
  }
}

const reduxDeliveryForm = reduxForm({
  form: 'delivery'
})(DeliveryForm)

export default connect(state => ({initialValues: state.checkout.deliveryForm}), mapDispatchToProps)(reduxDeliveryForm)

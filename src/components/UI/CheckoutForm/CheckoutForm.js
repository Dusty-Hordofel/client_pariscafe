import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import 'react-phone-input-2/lib/material.css'
import './CheckoutForm.css';
import Error from '../../FormError/Error';
import _ from 'lodash';
import equal from 'deep-equal';

const phoneRegExp = /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const validationSchema = Yup.object({

  line1: Yup.string().min(5, 'Too short - min 5 characters required').max(20, 'Must not exceed 20 characters').required('Input Required'),
  line2: Yup.string().min(5, 'Too short - min 5 characters required').max(20, 'Must not exceed 20 characters'),
  city: Yup.string().min(3, 'Too short - min 3 characters required').max(20, 'Must not exceed 20 characters').required('Input Required'),
  state: Yup.string().min(2, 'Min. 2 characters').max(2, 'Max. 2 characters').required('Input Required'),
  zip: Yup.string().min(5, 'Too short - min 5 characters required').max(20, 'Must not exceed 20 characters').max(10, 'Must not exceed 10 characters').required('Input Required'),
  country: Yup.string().min(3, 'Exaclty 3 characters').max(3, 'Exactly 3 characters').required('Input Required'),

  phone: Yup.string().matches(phoneRegExp, 'Invalid phone number').required('Input Required')

});

const CheckoutForm = ({ address, addressType, updateAddress, checkout }) => {


  let full_name, line1, line2, city, state, zip, country, phone;

  ({ full_name, line1, line2, city, state, zip, country, phone } = address);


  const [loading, setLoading] = useState(false);

  const updateUserAddress = (values) => {
    setSubmitting(true);
    updateAddress(values);
    resetForm();
  }

  const formik = useFormik({
    initialValues: {
      full_name: full_name || '',
      line1: line1 || '', line2: line2 || '', city: city || '', state: state || '', zip: zip || '', country: country || '', phone: phone || ''
    },
    onSubmit: values => { console.log('Formdata:', values); updateUserAddress(values) },
    validationSchema: validationSchema,
    enableReinitialize: true
  });


  const { touched, errors, values, handleSubmit, handleBlur, handleChange, resetForm, setSubmitting } = formik;

  const checkoutHandler = (e) => {
    e.preventDefault();
    setLoading(true);
    console.log('Clicked checkout handler');
    checkout();
  }


  const renderAddressForm = () => (
    <div className="d-flex flex-column align-items-center mb-2" >
      <form onSubmit={handleSubmit}>
        <div className="addr-form">
          <label className="text-dark mb-2" style={{ fontWeight: 'bold' }}>{addressType}</label>

          <div className="d-flex flex-column  justify-content-center mb-3  col-12 ">
            <input type="text"
              placeholder="Full Name .."
              id="full_name"
              name="full_name"
              value={values.full_name}
              onChange={handleChange}
              onBlur={handleBlur}
              className={touched.full_name && errors.full_name && "error"}

            />
            <Error touched={touched.full_name} message={errors.full_name} />

          </div>

          <div className="d-flex flex-column  justify-content-center mb-3  col-12 ">
            <input type="text"
              placeholder="Address .."
              id="full_name"
              name="line1"
              value={values.line1}
              onChange={handleChange}
              onBlur={handleBlur}
              className={touched.line1 && errors.line1 && "error"}

            />
            <Error touched={touched.line1} message={errors.line1} />

          </div>

          <div className="d-flex flex-column justify-content-center mb-3 col-12">
            <input type="text"
              placeholder="Address .."
              name="line2"
              id="line2"
              value={values.line2}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          <div className="d-flex justify-content-start mb-3 ">
            <div className="d-flex flex-column">
              <input type="text"
                placeholder="City .."
                name="city"
                id="city"
                style={{ width: '100%' }}
                value={values.city}
                onChange={handleChange}
                onBlur={handleBlur}
                className={touched.city && errors.city && "error"}

              />
              <Error touched={touched.city} message={errors.city} />

            </div>
            <div className="d-flex flex-column" >
              <input type="text"
                placeholder="State .."
                name="state"
                id="state"
                style={{ width: '30%' }}
                value={values.state}
                onChange={handleChange}
                onBlur={handleBlur}
                className={touched.state && errors.state ? "mx-4 error" : "mx-4"}

              />
              <Error touched={touched.state} message={errors.state} />

            </div>
            <div className="d-flex flex-column" >

              <input type="text"
                placeholder="zip/pin"
                name="zip"
                id="zip"
                value={values.zip}
                onChange={handleChange}
                onBlur={handleBlur}
                style={{ width: '100%' }}
                className={touched.zip && errors.zip && "error"}

              />
              <Error touched={touched.zip} message={errors.zip} />

            </div>
          </div>

          <div className="d-flex justify-content-start mt-2 ">

            <div className="d-flex flex-column" >

              <input type="text"
                placeholder="Country .."
                name="country"
                id="country"
                style={{ width: '90%' }}
                value={values.country}
                onChange={handleChange}
                onBlur={handleBlur}
                className={touched.country && errors.country ? "mx-1 ml-0 error" : "mx-1 ml-0"}

              />
              <Error touched={touched.country} message={errors.country} />

            </div>
            <div className="d-flex flex-column" >

              <PhoneInput
                defaultCounty="IN"
                name="phone"
                id="phone"
                placeholder="Phone Number..."
                enableSearch={true}
                value={values.phone}
                onChange={handleChange('phone')}
                onBlur={handleBlur('phone')}
                className={touched.phone && errors.phone && "error"}

              />
              <Error touched={touched.phone} message={errors.phone} />
            </div>
          </div>

          <button className="btn btn-primary btn-block mt-4" type="submit" disabled={!_.isEmpty(errors) || equal(address, values) || loading}>
            Update Address
          </button>
        </div>

      </form>

    </div>
  )

  return (
    <div >
      {renderAddressForm()}
      <div >
        <button className="btn btn-success " disabled={!_.isEmpty(errors) || !equal(address, values)}><i className="fa fa-lock" /><span style={{ padding: '0 40px', fontWeight: 'bold' }} onClick={(e) => checkoutHandler(e)}>CHECK OUT</span></button>
      </div>
    </div>
  )

}

export default CheckoutForm

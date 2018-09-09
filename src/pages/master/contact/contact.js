import React, { Component } from 'react';
import { Formik, Form } from 'formik';
import { SubmitButton } from './../../../core/form'
import Yup from 'yup';
import intl from 'react-intl-universal';
import Input from '@material-ui/core/Input';

class ContactPage extends Component {

  render() {
    return (
      <div>
        <h1>Contact us</h1>
        <Formik
          initialValues={{
            email: '',
            name: '',
            desc: '',
          }}
          validationSchema={
            Yup.object().shape({
              email: Yup.string()
                .email('Invalid email address')
                .required(intl.get('FORM.required')),
              name: Yup.string()
                .min(5, intl.get('FORM.min', { min: 5 }))
                .max(80, 'Nice try, nobody has a first name that long')
                .required(intl.get('FORM.required'))
            })}
          onSubmit={values => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
            }, 500);
          }}
          render={({ errors, touched, values, handleChange, handleBlur }) => (
            <Form >
              <div className="row">
                <div className="col-md-6">
                  {values.name}
                  <Input type="text" name="name" label="Name" onChange={handleChange} onBlur={handleBlur} value={values.name} />
                  {touched.name && errors.name && <div>{errors.name}</div>}
                </div>
                <div className="col-md-6">
                  {values.email}
                  <Input type="text" label="Email" name="email" onChange={handleChange} onBlur={handleBlur} value={values.email} />
                  {touched.email && errors.email && <div>{errors.email}</div>}
                </div>
              </div>


              <SubmitButton text="Submit" errors={errors} />
            </Form>
          )}
        />
      </div>
    );
  }
}

export default ContactPage;
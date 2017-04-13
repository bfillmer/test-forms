
import React from 'react'

import {Form, Errors, Control} from 'react-redux-form'

// Required validation check.
const required = (v) => !!(v && v.length)

// Field was focused once and isn't now.
const wasTouched = (f) => (f.touched && !f.focus)

const ErrorMessage = ({children}) => <span className='bg-light-pink error'>{children}</span>

export const TestForm = () => (
  <Form model='user' className='w-20 center'>
    <h1 className='f2'>Login</h1>
    <p>
      <label>Username <Control type='text' model='.username' validators={{required}} validateOn='blur' /></label>
      <Errors model='.username' messages={{required: 'Username is required'}} show={wasTouched} component={ErrorMessage} />
    </p>
    <p><label>Password <Control type='password' model='.password' /></label></p>
    <p className='tc'><button type='submit'>Login</button></p>
  </Form>
)

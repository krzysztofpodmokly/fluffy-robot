'use client'

import { useEffect, useState, useReducer } from 'react';
import Image from 'next/image';
import ImageUpload from '../imageUpload/ImageUpload';


const Form = () => {

  const checkValid = (value: any, rules: any) => {
    let isValid = true;

    if (!rules) return true;

    if (rules.minLength) {
      isValid = value.length >= rules.minLength && isValid;
    }

    return isValid
  }

  const [state, setState] = useReducer((prev: any, next: any) => {
    const newState = { ...prev, ...next };

    // newState.jobTitle.valid = checkValid(newState.jobTitle.value, newState.jobTitle.validation);

    // if (newState.firstName.length < 3 || newState.jobTitle.length < 3) {
    //   newState.valid
    // } else {
    //   newState.error = ''
    // }

    return newState
  }, {
    jobTitle: {
      value: '',
      valid: false,
      errorMessage: 'Too short',
      validation: {
        minLength: 3
      }
    },
    firstName: {
      value: '',
      valid: false,
      errorMessage: 'Too sss'
    },
  })

  // lastName: '', email: '', country: '', phone: null, city: '', error: ''

  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // const updatedState = { ...state.}

    state.jobTitle.valid = checkValid(state.jobTitle.value, state.jobTitle.validation)
    // checkValid(newState.jobTitle.value, newState.jobTitle.validation);

    console.log(state.jobTitle)

    setState({ jobTitle: { value: event.target.value } })
  }

  return <>
    <form className="form-control w-full container px-4" onSubmit={handleSubmit}>
      <h2 className="text-lg  font-semibold">Personal data</h2>

      <div className="grid grid-cols-2">
        <div className="mb-5">
          <label className="label">
            <span className="label-text-alt">Job Title</span>
          </label>
          <input type="text" onChange={handleInputChange} value={state.jobTitle.value} className="input input-bordered w-full max-w-xs" />
          <p>{state.jobTitle.valid ? '' : state.jobTitle.errorMessage}</p>
        </div>
        <ImageUpload />

        <div className="mb-5">
          <label className="label">
            <span className="label-text-alt">First Name</span>
          </label>
          <input type="text" onChange={event => setState({ firstName: { value: event.target.value } })} value={state.firstName.value} className="input input-bordered w-full max-w-xs" />
          <p>{state?.error}</p>
        </div>

        <div className="mb-5">
          <label className="label">
            <span className="label-text-alt">Email</span>
          </label>
          <input type="text" className="input input-bordered w-full max-w-xs" />
        </div>

        <div className="mb-5">
          <label className="label">
            <span className="label-text-alt">Country</span>
          </label>
          <input type="text" className="input input-bordered w-full max-w-xs" />
        </div>

        <div className="mb-5">
          <label className="label">
            <span className="label-text-alt">Last Name</span>
          </label>
          <input type="text" className="input input-bordered w-full max-w-xs" />
        </div>

        <div className="mb-5">
          <label className="label">
            <span className="label-text-alt">Phone</span>
          </label>
          <input type="text" className="input input-bordered w-full max-w-xs" />
        </div>

        <div className="mb-5">
          <label className="label">
            <span className="label-text-alt">City</span>
          </label>
          <input type="text" className="input input-bordered w-full max-w-xs" />
        </div>
      </div>
      {/* <button className="btn btn-primary m-5" type='submit'>Submit</button> */}
    </form>
  </>
}

export default Form;
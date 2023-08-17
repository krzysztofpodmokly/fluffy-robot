'use client'

import { useEffect, useState } from 'react';
import Image from 'next/image';
import ImageUpload from './ImageUpload';


const Form = () => {
  const [text, setText] = useState('');

  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert(text);
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  }

  return <>
    <form className="form-control w-full container px-4" onSubmit={handleSubmit}>
      <h2 className="text-lg  font-semibold">Personal data</h2>

      <div className="grid grid-cols-2">
        <div className="mb-5">
          <label className="label">
            <span className="label-text-alt">Job Title</span>
          </label>
          <input type="text" onChange={handleInputChange} value={text} className="input input-bordered w-full max-w-xs" />
        </div>
        <ImageUpload />

        <div className="mb-5">
          <label className="label">
            <span className="label-text-alt">First Name</span>
          </label>
          <input type="text" className="input input-bordered w-full max-w-xs" />
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
'use client'

import { useState } from 'react';
import Image from 'next/image';

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
      <div className="flex items-stretch">
        <div className="w-1/2">

          <div className="">
            <label className="label">
              <span className="label-text-alt">Job Title</span>
            </label>
            <input type="text" onChange={handleInputChange} value={text} className="input input-bordered w-full max-w-xs" />
          </div>


          <div>
            <label className="label">
              <span className="label-text-alt">First Name</span>
            </label>
            <input type="text" className="input input-bordered w-full max-w-xs" />
          </div>


          <div>
            <label className="label">
              <span className="label-text-alt">Email</span>
            </label>
            <input type="text" className="input input-bordered w-full max-w-xs" />
          </div>


          <div>
            <label className="label">
              <span className="label-text-alt">Country</span>
            </label>
            <input type="text" className="input input-bordered w-full max-w-xs" />
          </div>

        </div>

        <div className="w-1/2">

          <div className="flex items-center my-4">
            <Image className="block rounded-full mr-4" src="/default-avatar.jpg" width="50" height="50" alt="Avatar" />
            <div className="text-center space-y-2 sm:text-left">
              <div className="grid justify-items-start space-y-0.5">
                <button className="text-xs text-blue-300">
                  Edit photo
                </button>
                <button className="text-xs text-rose-600">
                  Delete
                </button>
              </div>
            </div>
          </div>

          <div>
            <label className="label">
              <span className="label-text-alt">Last Name</span>
            </label>
            <input type="text" className="input input-bordered w-full max-w-xs" />

          </div>


          <div>
            <label className="label">
              <span className="label-text-alt">Phone</span>
            </label>
            <input type="text" className="input input-bordered w-full max-w-xs" />
          </div>

          <div>
            <label className="label">
              <span className="label-text-alt">City</span>
            </label>
            <input type="text" className="input input-bordered w-full max-w-xs" />
          </div>

        </div>
      </div>
      <button className="btn btn-primary" type='submit'>Submit</button>
    </form>
  </>
}

export default Form;
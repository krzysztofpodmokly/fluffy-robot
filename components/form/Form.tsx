'use client'

import useBearStore from '@/store/store';

import ImageUpload from '../imageUpload/ImageUpload';

const Form = () => {
  const jobTitle = useBearStore<any>((state: any) => state.formData.jobTitle);
  const updateJob = useBearStore((state: any) => state.updateJob)

  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateJob(event.target.value)
  }

  return <>
    <form className="form-control w-full container px-4" onSubmit={handleSubmit}>
      <h2 className="text-lg  font-semibold">Personal data {jobTitle}</h2>

      <div className="grid grid-cols-2">
        <div className="mb-5">
          <label className="label">
            <span className="label-text-alt">Job Title</span>
          </label>
          <input type="text" onChange={handleInputChange} value={jobTitle} className="input input-bordered w-full max-w-xs" />
        </div>
        <ImageUpload />

        <div className="mb-5">
          <label className="label">
            <span className="label-text-alt">First Name</span>
          </label>
          <input type="text" onChange={event => { }} value={''} className="input input-bordered w-full max-w-xs" />
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
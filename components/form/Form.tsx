'use client'

import useBearStore from '@/store';
import { useForm, SubmitHandler } from 'react-hook-form';

import ImageUpload from '../imageUpload/ImageUpload';

type Inputs = {
  jobTitle: string;
};

const Form = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();

  const updateJob = useBearStore((state: any) => state.updateJob)

  const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

  return <>
    <form className="form-control w-full container px-4" onSubmit={handleSubmit(onSubmit)}>
      <h2 className="text-lg  font-semibold">Personal data</h2>

      <div className="grid grid-cols-2">
        <div className="mb-5">
          <label className="label">
            <span className="label-text-alt">Job Title</span>
          </label>
          <input {...register('jobTitle', {
            required: true, // works after submit
            onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
              // updateJob(watch('jobTitle'))
              updateJob(event.target.value)
            }
          })} className="input input-bordered w-full max-w-xs" />
          {errors.jobTitle && <span>This field is required</span>}
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
      <button className="btn btn-primary m-5" type='submit'>Submit</button>
    </form>
  </>
}

export default Form;
'use client'

import useBearStore from '@/store';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import ImageUpload from '../imageUpload/ImageUpload';
import { IFormData, IFormState } from '@/app/types';

const schema = yup.object({
  firstName: yup.string().required().min(3, 'Min 3'),
  lastName: yup.string().required().min(3, 'Min 3'),
  jobTitle: yup.string().required().min(3, 'Min 3'),
  email: yup.string().required().email(),
  country: yup.string().required().min(3, 'Min 3'),
  phone: yup.number().min(3, 'Please provide e'),
  city: yup.string().required().min(3, 'Min 3'),
}).required();

const Form = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<IFormData>({
    mode: 'onTouched',
    resolver: yupResolver(schema)
  });

  const updateForm = useBearStore((state: IFormState) => state.updateForm);
  const formData = useBearStore((state: IFormState) => state.formData)

  const onSubmit: SubmitHandler<IFormData> = data => console.log(data);

  return <>
    <form className="form-control w-full container px-4" onSubmit={handleSubmit(onSubmit)}>
      <h2 className="text-lg  font-semibold">Personal data</h2>

      <div className="grid grid-cols-2">
        <div className="mb-5">
          <label className="label">
            <span className="label-text-alt">Job Title</span>
          </label>
          <input {...register('jobTitle', {
            required: true,
            onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
              const { value, name } = event.target;
              updateForm(value, name)
            }
          })} className="input input-bordered w-full max-w-xs" />
          {errors.jobTitle && <span>{errors.jobTitle.message}</span>}
        </div>
        <ImageUpload />

        <div className="mb-5">
          <label className="label">
            <span className="label-text-alt">First Name</span>
          </label>

          <input {...register('firstName', {
            required: true,
            onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
              const { value, name } = event.target;
              updateForm(value, name)
            }
          })} className="input input-bordered w-full max-w-xs" />
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
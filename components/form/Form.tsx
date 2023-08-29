'use client'

import useBearStore from '@/store';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import ImageUpload from '../imageUpload/ImageUpload';
import { IFormData, IFormState } from '@/app/types';

const schema = yup.object({
  firstName: yup.string().required().min(3, 'First name is required'),
  lastName: yup.string().required().min(3, 'Last name is required'),
  jobTitle: yup.string().required().min(3, 'Job title is required'),
  email: yup.string().required().email('Email is required'),
  country: yup.string().required().min(3, 'Country is required'),
  city: yup.string().required().min(3, 'City is required'),
  phone: yup.number().min(3, 'Please provide valid phone number'),
  photo: yup.string()
}).required();

const Form = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm({
    mode: 'onTouched',
    resolver: yupResolver(schema)
  });

  const updateForm = useBearStore((state: IFormState) => state.updateForm);
  const formData = useBearStore((state: IFormState) => state.formData);

  console.log('form', formData)

  const formValues = Object.keys(formData).map((formElement) => {
    const element = formElement as keyof IFormData
    if (formElement === 'photo') return <ImageUpload key={formElement} />
    return <div className="m-2" key={formElement}>
      <label className="label">
        <span className="label-text-alt">{formData[element].fieldName}</span>
      </label>
      <input {...register(element, {
        required: 'This is required',
        onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
          const { value, name } = event.target;
          updateForm(value, name)
        }
      })} className="input input-bordered input-sm text-sm w-full max-w-xs" />
      {errors[element] && <span className='text-xs text-red-400'>{errors[element]?.message}</span>}
    </div>
  })

  const onSubmit: SubmitHandler<any> = data => console.log('SUBMIT', data);

  return <>
    <form className="form-control w-full container px-4" onSubmit={handleSubmit(onSubmit)}>
      <h2 className="text-lg  font-semibold">Personal data</h2>

      <div className="grid grid-cols-2">
        {formValues}
      </div>

      <button className="btn btn-primary m-5" type='submit'>Submit</button>
    </form>
  </>
}

export default Form;
import { IFormData, IFormState } from '@/app/types';
import { create } from 'zustand';

const useBearStore = create<IFormState>((set) => ({
  formData: {
    firstName: {
      value: '',
      fieldName: 'First name'
    },
    photo: {
      value: undefined,
      fieldName: 'Photo'
    },
    lastName: {
      value: '',
      fieldName: 'Last name'
    },
    jobTitle: {
      value: '',
      fieldName: 'Job Title'
    },
    email: {
      value: '',
      fieldName: 'Email'
    },
    country: {
      value: '',
      fieldName: 'Country'
    },
    city: {
      value: '',
      fieldName: 'City'
    },
    phone: {
      value: undefined,
      fieldName: 'Phone'
    },
  },
  updateForm: (fieldValue, fieldName) => set((state: IFormState) => ({
    formData: {
      ...state.formData,

      [fieldName]: {
        ...state.formData[fieldName as keyof IFormData],
        value: fieldValue
      }
    }
  }))
}));

export default useBearStore;
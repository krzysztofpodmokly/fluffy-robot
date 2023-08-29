import { IFormState } from '@/app/types';
import { create } from 'zustand';

const useBearStore = create<IFormState>((set) => ({
  formData: {
    firstName: '',
    lastName: '',
    jobTitle: '',
    email: '',
    country: '',
    city: '',
    phone: undefined,
    photo: undefined
  },
  updateForm: (fieldValue, fieldName) => set((state: IFormState) => ({
    formData: {
      ...state.formData,
      [fieldName]: fieldValue
    }
  }))
}));

export default useBearStore;
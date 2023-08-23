import { create } from 'zustand';

const useBearStore = create((set) => ({
  formData: {
    jobTitle: ''
  },
  updateJob: (value: any) => set((state: any) => ({
    formData: {
      jobTitle: value
    }
  }))
}));

export default useBearStore;
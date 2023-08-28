export interface IFormData {
  firstName: string;
  lastName: string;
  jobTitle: string;
  email: string;
  country: string;
  city: string;
  phone: number | undefined;
}

export interface IFormState {
  formData: IFormData
  updateForm: (fieldValue: string | number, fieldName: string) => void;
}

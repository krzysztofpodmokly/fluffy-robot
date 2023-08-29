interface IFormElement {
  value: string | number | undefined;
  fieldName: string;
}

export interface IFormData {
  firstName: IFormElement;
  lastName: IFormElement;
  jobTitle: IFormElement;
  email: IFormElement;
  country: IFormElement;
  city: IFormElement;
  phone: IFormElement;
  photo: IFormElement;
}

export interface IFormState {
  formData: IFormData
  updateForm: (fieldValue: string | number, fieldName: string) => void;
}
import { ChangeEvent, useState } from 'react';

export const initialInputValues = {
  job_title: '',
  first_name: '',
  last_name: '',
  email: '',
  phone: '',
  country: '',
  city: '',
  address: '',
  postal_code: '',
  driving_license: '',
  nationality: '',
  place_of_birth: '',
  date_of_birth: '',
};

export type CVData = typeof initialInputValues;

export function useCVData(): [CVData, (e: ChangeEvent<HTMLInputElement>) => void] {
  const [cvData, setValues] = useState(initialInputValues);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setValues({
      ...cvData,
      [id]: value,
    });
  };

  return [cvData, handleInputChange];
}

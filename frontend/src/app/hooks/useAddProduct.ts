import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { validateForm } from '../utils/clientValidation';
import { addProduct } from '../utils/apiService';
import { defaultFormData, ProductFormProps } from '../types';

export const useAddProduct = () => {
  const [errors, setErrors] = useState<Record<string, string[]>>({});
  const [formData, setFormData] = useState<ProductFormProps>(defaultFormData);
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validationErrors = validateForm(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    try {
      const response = await addProduct({ formData });
      const data = await response.json();

      if (!response.ok) {
        setErrors(data.errors);
      } else {
        setFormData(defaultFormData);
        setErrors({});
        router.push('/');
      }
    } catch (error) {}
  };

  const handleInputChange = (name: string, value: string) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return {
    errors,
    formData,
    setFormData,
    handleSubmit,
    handleInputChange,
  };
};

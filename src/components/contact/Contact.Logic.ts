import { useState } from 'react';

export type ContactFormState = {
  name: string;
  email: string;
  query: string;
};

export type ContactFormErrors = {
  name?: string;
  email?: string;
  query?: string;
};

export const useContactForm = () => {
  const [formData, setFormData] = useState<ContactFormState>({
    name: '',
    email: '',
    query: '',
  });

  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field: keyof ContactFormState) => (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  const validate = () => {
    const newErrors: ContactFormErrors = {};

    if (formData.name.trim().length < 3) {
      newErrors.name = 'Name must be at least 3 characters.';
    }

    if (
      !formData.email.includes('@gmail.com') ||
      !/^[^\s@]+@gmail\.com$/.test(formData.email)
    ) {
      newErrors.email = 'Email must be a valid Gmail address.';
    }

    if (formData.query.trim().length <= 10) {
      newErrors.query = 'Query must be more than 10 characters.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    console.log(formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', query: '' });
    setErrors({});
  };

  return {
    formData,
    errors,
    submitted,
    handleChange,
    handleSubmit,
  };
};

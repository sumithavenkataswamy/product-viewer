import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ProductService } from '../../../services/product/Product.Service';

export const ProductAddLogic = () => {
  const [formData, setFormData] = useState({
    title: '',
    price: 0,
    description: '',
    category: '',
    image: '',
  });
  const [touched, setTouched] = useState({
    title: false,
    price: false,
    description: false,
    category: false,
    image: false,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const categories = ['Electronics', 'Clothing', 'Books', 'Furniture', 'Sports'];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'price' ? parseFloat(value) || 0 : value,
    }));
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name } = e.target;
    setTouched((prev) => ({
      ...prev,
      [name]: true,
    }));
  };

  const isFormValid = () => {
    return (
      formData.title.trim() !== '' &&
      formData.price > 0 &&
      formData.description.trim() !== '' &&
      formData.category !== '' &&
      formData.image.trim() !== ''
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!isFormValid()) {
      setError('Please fill all fields correctly.');
      return;
    }

    setLoading(true);

    try {
      await ProductService.create(formData);
      alert('Product added successfully!');
      navigate('/product-list');
    } catch (err) {
      setError('Failed to add product.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return {
    formData,
    handleChange,
    handleSubmit,
    loading,
    error,
    categories,
    touched,
    handleBlur,
    isFormValid,
  };
};

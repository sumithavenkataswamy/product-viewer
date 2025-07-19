import React from 'react';
import './ProductAdd.css';
import { ProductAddLogic } from './ProductAdd.Logic';
import Button from '../../shared/button/Button';

export const ProductAdd: React.FC = () => {
  const {
    formData,
    handleChange,
    handleSubmit,
    loading,
    error,
    categories,
    touched,
    handleBlur,
    isFormValid,
  } = ProductAddLogic();

  return (
    <div className="add-container">
      <h2>Create New Product</h2>
      <form className="product-form" onSubmit={handleSubmit} noValidate>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
          onBlur={handleBlur}
          required
        />
        {touched.title && formData.title.trim() === '' && (
          <span className="error">Title is required</span>
        )}

        <input
          type="number"
          name="price"
          placeholder="Price"
          value={formData.price === 0 ? '' : formData.price}
          onChange={handleChange}
          onBlur={handleBlur}
          required
          min="1"
        />
        {touched.price && formData.price <= 0 && (
          <span className="error">Price must be greater than 0</span>
        )}

        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          onBlur={handleBlur}
          required
        />
        {touched.description && formData.description.trim() === '' && (
          <span className="error">Description is required</span>
        )}

        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          onBlur={handleBlur}
          required
        >
          <option value="">Select Category</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
        {touched.category && formData.category === '' && (
          <span className="error">Category is required</span>
        )}

        <input
          type="url"
          name="image"
          placeholder="Image URL"
          value={formData.image}
          onChange={handleChange}
          onBlur={handleBlur}
          required
        />
        {touched.image && formData.image.trim() === '' && (
          <span className="error">Image URL is required</span>
        )}

        <Button type="submit" disabled={!isFormValid() || loading} label={loading ? 'Saving...' : 'Add Product'}>
        </Button>

        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
};

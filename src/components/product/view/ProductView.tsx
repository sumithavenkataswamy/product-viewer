import Button from '../../shared/button/Button';
import './ProductView.css';
import { ProductViewLogic } from './ProductView.Logic';
import { useNavigate } from 'react-router-dom';

const ProductView = () => {
  const { product, loading } = ProductViewLogic();
  const navigate = useNavigate();

  if (loading) return <div className="loading">Loading...</div>;
  if (!product) return <div className="error">Product not found.</div>;

  return (
    <div className="container">
      <Button className="back-button" onClick={() => navigate('/product-list')} label='← Back to Products' />

      <img src={product.image} alt={product.title} className="image" />
      <div className="details">
        <h1 className="title">{product.title}</h1>
        <p className="category">Category: {product.category}</p>
        <p className="description">{product.description}</p>
        <p className="price">💰 Price: ${product.price.toFixed(2)}</p>
        <div className="rating">
          ⭐ Rating: {product.rating.rate} ({product.rating.count} reviews)
        </div>
      </div>
    </div>
  );
};

export default ProductView;

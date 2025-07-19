import { useNavigate } from 'react-router-dom';
import Button from '../../shared/button/Button';
import './ProductListStore.css';
import { ProductStoreListLogic } from './ProductListStore.Logic';

const ProductList: React.FC = () => {
  const { products, loading, removeProduct, viewProductProps} = ProductStoreListLogic();
  const navigate = useNavigate();


  return (
    <div className="home-container">
      <div className="header-row">
        <h2>🛍️ Product List</h2>
        <Button
          className="add-button"
          type="button"
          onClick={() => navigate('/product-add')}
          label="➕ Add Product"
        />
      </div>

      {loading ? (
        <p>Loading products...</p>
      ) : (
        <table className="product-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Price (₹)</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.title}</td>
                <td>{product.price}</td>
                <td>{product.description}</td>
                <td>
                  <div className="action-buttons">
                    <Button
                      className="delete-button"
                      type="button"
                      onClick={() => removeProduct(product.id)}
                      label="Delete"
                    />
                    {/* <Button
                      className="view-button"
                      type="button"
                      onClick={() => viewProduct(product.id)}
                      label="View"
                    /> */}
                    {/* <Button
                      className="view-button"
                      type="button"
                      onClick={() => viewProductContext(product)}
                      label="View"
                    /> */}
                     <Button
                      className="view-button"
                      type="button"
                      onClick={() => viewProductProps(product)}
                      label="View"
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ProductList;

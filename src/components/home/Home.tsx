import ProductListStore from '../product/list-store/ProductListStore';
// import ProductList from '../product/list/ProductList';
import './Home.css';

const Home: React.FC = () => {

  return (
    <div className="home-container">
      <ProductListStore />
    </div>
  );
};

export default Home;

import ProductList from '../components/ProductList';
import { FaShoppingBag } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 flex flex-col items-center text-center">
          <FaShoppingBag className="text-4xl mb-3" />
          <h1 className="text-3xl md:text-4xl font-bold">
            Discover Amazing Products
          </h1>
          <p className="mt-2 text-sm md:text-base text-blue-100">
            Shop the latest trends with the best prices
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <h2 className="text-xl font-semibold mb-6 text-gray-800">
          Featured Products
        </h2>
        <ProductList />
      </div>
    </div>
  );
};

export default Home;

import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import useCart from '../hooks/useCart';
import { getProductById } from '../services/productServices';
import Loader from '../components/Loader';
import Error from '../components/Error';
import { FaStar, FaShoppingCart } from 'react-icons/fa';

const ProductDetails = () => {
  const { id } = useParams();
  const { handleAddToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getCurrentProduct = async () => {
      try {
        const currentProduct = await getProductById(id);
        setProduct(currentProduct);
        setError(null);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    getCurrentProduct();
  }, [id]);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg p-6 md:p-10 grid md:grid-cols-2 gap-8 items-center">
        <div className="w-full">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-[350px] object-cover rounded-xl"
          />
        </div>

        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
            {product.title}
          </h1>

          <div className="flex items-center mt-3 space-x-2">
            <FaStar className="text-yellow-500" />
            <span className="text-gray-600">
              {product.rating.rate} ({product.rating.count})
            </span>
            <span className="text-sm text-gray-400">
              ({product.stock} in stock)
            </span>
          </div>

          <p className="text-2xl font-semibold text-indigo-600 mt-4">
            ₹{product.price}
          </p>

          <p className="text-gray-600 mt-4 leading-relaxed">
            {product.description}
          </p>

          <button
            onClick={() => {
              handleAddToCart(product);
            }}
            className="mt-6 flex items-center justify-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 transition"
          >
            <FaShoppingCart />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

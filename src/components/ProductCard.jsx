import { FaStar, FaShoppingCart, FaEye } from 'react-icons/fa';
import useCart from '../hooks/useCart';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const { title, price, rating, stock, category, image } = product;
  const { handleAddToCart } = useCart();

  return (
    <div className="group w-full max-w-sm overflow-hidden rounded-2xl bg-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-2xl">
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-64 w-full object-cover transition duration-300 group-hover:scale-105"
        />

        <span className="absolute top-3 left-3 rounded-full bg-indigo-600 px-3 py-1 text-xs font-semibold text-white">
          {category}
        </span>
      </div>

      <div className="p-5">
        <h2 className="text-lg font-semibold text-gray-800 line-clamp-1">
          {title}
        </h2>

        <div className="mt-3 flex items-center justify-between">
          <div className="flex items-center gap-1 text-sm">
            <FaStar className="text-yellow-400" />
            <span className="text-gray-700">{rating.rate}</span>
            <span className="text-gray-400">({rating.count})</span>
          </div>

          <span className="text-xs font-medium text-green-600">
            {stock} left
          </span>
        </div>

        <h3 className="mt-4 text-xl font-bold text-indigo-600">₹{price}</h3>

        <div className="mt-5 flex gap-2">
          <button
            onClick={() => {
              handleAddToCart(product);
            }}
            className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-indigo-600 px-3 py-2 text-sm font-medium text-white transition hover:bg-indigo-700"
          >
            <FaShoppingCart />
          </button>

          <Link
            to={`product/${product.id}`}
            className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-indigo-600 px-3 py-2 text-sm font-medium text-indigo-600 transition hover:bg-indigo-50"
          >
            <FaEye />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

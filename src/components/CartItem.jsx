import useCart from '../hooks/useCart';
import { FaTrash, FaPlus, FaMinus } from 'react-icons/fa';

const Cartitem = ({ cartItem }) => {
  const {
    handleIncreaseQuantity,
    handleDecreaseQuantity,
    handleRemoveFromCart,
  } = useCart();

  return (
    <div className="flex items-center gap-4 rounded-xl bg-white p-4 shadow">
      <img
        src={cartItem.image}
        alt={cartItem.title}
        className="h-24 w-24 rounded-lg object-cover"
      />

      <div className="flex flex-1 flex-col">
        <h4 className="text-base font-semibold text-gray-800 line-clamp-1">
          {cartItem.title}
        </h4>

        <p className="mt-1 text-sm text-gray-500">₹{cartItem.price} each</p>

        <p className="mt-2 text-lg font-semibold text-indigo-600">
          ₹{cartItem.price * cartItem.quantity}
        </p>

        <div className="mt-3 flex items-center gap-3">
          <button
            onClick={() => {
              handleDecreaseQuantity(cartItem.id);
            }}
            className="flex h-8 w-8 items-center justify-center rounded-md bg-gray-100 hover:bg-gray-200"
          >
            <FaMinus className="text-xs" />
          </button>

          <span className="text-sm font-medium text-gray-700">
            {cartItem.quantity}
          </span>

          <button
            onClick={() => {
              handleIncreaseQuantity(cartItem.id);
            }}
            className="flex h-8 w-8 items-center justify-center rounded-md bg-gray-100 hover:bg-gray-200"
          >
            <FaPlus className="text-xs" />
          </button>
        </div>
      </div>

      <button
        onClick={() => handleRemoveFromCart(cartItem.id)}
        className="flex h-10 w-10 items-center justify-center rounded-full bg-red-50 text-red-500 transition hover:bg-red-100"
      >
        <FaTrash />
      </button>
    </div>
  );
};

export default Cartitem;

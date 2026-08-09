import useCart from '../hooks/useCart';
import { FaShoppingBag } from 'react-icons/fa';

const CartSummary = () => {
  const { cart } = useCart();

  const totalItems = cart.reduce((totalItem, cartItem) => {
    return totalItem + cartItem.quantity;
  }, 0);

  const totalPrice = cart.reduce((totalPrice, cartItem) => {
    return totalPrice + cartItem.price * cartItem.quantity;
  }, 0);

  return (
    <div className="rounded-xl bg-white shadow p-6">
      <div className="flex items-center gap-2 mb-4">
        <FaShoppingBag className="text-indigo-600" />
        <h3 className="text-lg font-semibold text-gray-800">Cart Summary</h3>
      </div>

      <div className="space-y-3 text-gray-600">
        <p className="flex justify-between">
          <span>Total Items</span>
          <span className="font-medium text-gray-800">{totalItems}</span>
        </p>

        <p className="flex justify-between">
          <span>Total Price</span>
          <span className="font-semibold text-indigo-600">
            ₹{totalPrice.toFixed(2)}
          </span>
        </p>
      </div>
    </div>
  );
};

export default CartSummary;

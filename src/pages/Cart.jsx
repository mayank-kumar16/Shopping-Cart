import Cartitem from '../components/CartItem';
import CartSummary from '../components/CartSummary';
import useCart from '../hooks/useCart';
import { FaShoppingCart } from 'react-icons/fa';

const Cart = () => {
  const { cart } = useCart();

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <FaShoppingCart className="text-2xl text-indigo-600" />
          <h2 className="text-2xl font-bold text-gray-800">Shopping Cart</h2>
        </div>

        {cart.length === 0 ? (
          <div className="bg-white rounded-xl shadow p-10 text-center">
            <p className="text-gray-500 text-lg">Your cart is empty.</p>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-4">
              {cart.map((cartItem) => (
                <Cartitem key={cartItem.id} cartItem={cartItem} />
              ))}
            </div>

            <div className="bg-white rounded-xl shadow p-5 h-fit">
              <CartSummary />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;

import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import useCart from '../hooks/useCart';

const Navbar = () => {
  const { cartCount } = useCart();

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-100">
      <div className="mx-auto max-w-7xl flex items-center justify-between px-6 py-4">
        <Link
          to="/"
          className="text-2xl font-extrabold tracking-tight text-indigo-600"
        >
          ShopCart
        </Link>

        <ul className="flex items-center gap-8 text-gray-600 font-medium">
          <li>
            <Link
              to="/"
              className="relative transition duration-200 hover:text-indigo-600 after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-indigo-600 after:transition-all hover:after:w-full"
            >
              Home
            </Link>
          </li>
        </ul>

        <Link
          to="cart"
          className="relative flex h-11 w-11 items-center justify-center rounded-full bg-indigo-50 transition hover:bg-indigo-100"
        >
          <FaShoppingCart size={20} className="text-indigo-600" />

          {cartCount > 0 && (
            <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-semibold text-white shadow">
              {cartCount}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

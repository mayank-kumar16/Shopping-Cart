import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="mt-16 bg-gray-900 text-gray-300">
      <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col items-center gap-8 md:flex-row md:justify-between">
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-extrabold text-white tracking-tight">
            ShopCart
          </h2>
          <p className="mt-2 text-sm text-gray-400">
            © {new Date().getFullYear()} ShopCart. All rights reserved.
          </p>
        </div>

        <ul className="flex gap-8 text-sm font-medium">
          <li>
            <Link to="/" className="transition duration-200 hover:text-white">
              Home
            </Link>
          </li>
        </ul>

        <div className="flex items-center gap-4">
          <a
            href="https://www.facebook.com/"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 transition hover:bg-indigo-600"
          >
            <FaFacebookF className="text-sm" />
          </a>

          <a
            href="https://www.instagram.com/"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 transition hover:bg-pink-600"
          >
            <FaInstagram className="text-sm" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

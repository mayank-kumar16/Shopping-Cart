import { Link } from 'react-router-dom';
import { FaExclamationTriangle } from 'react-icons/fa';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 text-center">
      <FaExclamationTriangle className="text-5xl text-yellow-500 mb-4" />

      <h1 className="text-7xl font-extrabold text-gray-800">404</h1>

      <h2 className="mt-4 text-3xl font-bold text-gray-700">Page Not Found</h2>

      <p className="mt-3 max-w-md text-gray-500">
        Oops! The page you're looking for doesn't exist or may have been moved.
      </p>

      <Link
        to="/"
        className="mt-8 inline-block rounded-lg bg-indigo-600 px-6 py-3 font-semibold text-white transition hover:bg-indigo-700"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;

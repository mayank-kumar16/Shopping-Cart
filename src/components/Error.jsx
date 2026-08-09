import { FaExclamationTriangle } from 'react-icons/fa';

const Error = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 text-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-100">
        <FaExclamationTriangle className="text-2xl text-red-500" />
      </div>

      <h1 className="mt-6 text-5xl font-extrabold text-gray-800">
        Something went wrong
      </h1>

      <p className="mt-3 max-w-md text-gray-500">
        The page you are looking for doesn’t exist or an unexpected error
        occurred.
      </p>
    </div>
  );
};

export default Error;

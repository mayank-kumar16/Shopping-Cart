const Loader = ({ message = 'Loading product...' }) => {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-5">
      <div className="relative h-14 w-14">
        <div className="absolute inset-0 rounded-full border-4 border-indigo-100"></div>
        <div className="absolute inset-0 animate-spin rounded-full border-4 border-transparent border-t-indigo-600"></div>
      </div>

      <p className="text-base font-medium text-gray-500 tracking-wide">
        {message}
      </p>
    </div>
  );
};

export default Loader;

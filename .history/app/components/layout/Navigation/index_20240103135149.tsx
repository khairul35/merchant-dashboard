// LeftNavigation.tsx

const LeftNavigation = () => {
  return (
    <nav className="bg-gray-800 w-64 min-h-screen py-4">
      {/* Navigation items */}
      <div className="flex items-center space-x-2 px-4 py-2 text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 fill-current"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M3 10a1 1 0 011-1h13a1 1 0 110 2H4a1 1 0 01-1-1zm-1-7a1 1 0 011-1h13a1 1 0 110 2H3a1 1 0 01-1-1zm0 12a1 1 0 011-1h13a1 1 0 110 2H3a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
        <span className="font-semibold">Dashboard</span>
      </div>
      <div className="border-t border-gray-700"></div>
      {/* Add more navigation items as needed */}
      {/* Example item */}
      <div className="flex items-center space-x-2 px-4 py-2 text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 fill-current"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M3 10a1 1 0 011-1h13a1 1 0 110 2H4a1 1 0 01-1-1zm-1-7a1 1 0 011-1h13a1 1 0 110 2H3a1 1 0 01-1-1zm0 12a1 1 0 011-1h13a1 1 0 110 2H3a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
        <span className="font-semibold">Another Page</span>
      </div>
      {/* ... */}
    </nav>
  );
};

export default LeftNavigation;

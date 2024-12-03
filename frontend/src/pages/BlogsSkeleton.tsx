

export const BlogsSkeleton = () => {
  return (
    <div className="bg-gray-100 p-4 rounded-md mb-4 animate-pulse">
      <div className="flex items-center mb-2">
        <div className="w-16 h-4 bg-gray-300 rounded-md mr-2"></div>
        <div className="w-24 h-4 bg-gray-300 rounded-md"></div>
      </div>

      <div className="w-full h-12 bg-gray-300 rounded-md"></div>
    </div>
  );
};


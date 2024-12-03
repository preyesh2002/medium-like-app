
export const FullBlogSkeleton = () => {
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-12 px-10 w-full pt-200 max-w-screen-xl pt-12">
        <div className="col-span-8">
          <div className="bg-gray-300 h-12 w-full animate-pulse rounded-md"></div>
          <div className="bg-gray-300 h-6 w-1/2 animate-pulse rounded-md mt-4"></div>
          <div className="bg-gray-300 h-24 w-full animate-pulse rounded-md mt-4"></div>
          <div className="bg-gray-300 h-24 w-full animate-pulse rounded-md mt-4"></div>
          <div className="bg-gray-300 h-24 w-full animate-pulse rounded-md mt-4"></div>
        </div>
        <div className="col-span-4">
          <div className="bg-gray-300 h-6 w-full animate-pulse rounded-md"></div>
          <div className="flex items-center mt-4">
            <div className="bg-gray-300 h-12 w-12 rounded-full animate-pulse mr-4"></div>
            <div>
              <div className="bg-gray-300 h-6 w-1/2 animate-pulse rounded-md"></div>
              <div className="bg-gray-300 h-4 w-3/4 animate-pulse rounded-md mt-2"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


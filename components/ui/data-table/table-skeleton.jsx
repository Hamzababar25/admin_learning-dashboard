export const TableSkeleton = () => {
  return (
    <div className="space-y-4 px-2 mt-12">
      <div className="rounded-lg">
        <div className="grid grid-cols-4 gap-4 p-2 border-b">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="h-4 bg-gray-200 rounded animate-pulse" />
          ))}
        </div>

        {[...Array(5)].map((_, rowIndex) => (
          <div key={rowIndex} className="grid grid-cols-4 gap-2 p-2 border-b">
            {[...Array(4)].map((_, colIndex) => (
              <div
                key={colIndex}
                className="h-6 bg-gray-100 rounded animate-pulse"
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

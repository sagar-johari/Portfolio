// components/Shimmer.tsx
export default function Shimmer() {
    return (
      <div className="animate-pulse space-y-4 p-4">
        <div className="h-64 bg-gray-700 rounded-lg"></div>
        <div className="h-8 bg-gray-600 rounded w-3/4"></div>
        <div className="h-4 bg-gray-600 rounded w-1/2"></div>
        <div className="grid grid-cols-2 gap-4 mt-6">
          <div className="h-6 bg-gray-700 rounded"></div>
          <div className="h-6 bg-gray-700 rounded"></div>
        </div>
      </div>
    );
  }
  
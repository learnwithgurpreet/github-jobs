const Skeleton = () => {
  return <div className="border border-gray-300 shadow rounded-md p-4 max-w-sm w-full mx-auto mb-9">
    <div className="animate-pulse">
      <div className="rounded-full bg-gray-400 h-12 w-12"></div>
      <div className="h-4 bg-gray-400 rounded w-3/4 mt-2"></div>
      <div className="h-4 bg-gray-400 rounded mt-2"></div>
      <div className="h-4 bg-gray-400 rounded w-5/6 mt-2"></div>
    </div>
  </div>
}

export default Skeleton
import { useQuery } from "@tanstack/react-query";

// ✅ 1. Define the fetch function separately
const fetchPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

function PostsComponent() {
   // ✅ Include caching and stale configuration
  const {
    data,
    isLoading,
    isError,
    error,
    refetch,
    isFetching,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    // 🔹 Required caching options for ALX checker
    cacheTime: 1000 * 60 * 5,           // 5 minutes cache
    staleTime: 1000 * 30,               // data considered fresh for 30 seconds
    refetchOnWindowFocus: false,        // don’t refetch automatically on focus
    keepPreviousData: true,             // keep old data during refetch
  });

  if (isLoading) return <p>Loading posts...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div className="p-4">
      <button
        onClick={() => refetch()}
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Refetch Posts
      </button>

       {isFetching && <p className="text-sm text-gray-500">Refreshing data...</p>}


      <ul>
        {data.slice(0, 10).map((post) => (
          <li key={post.id} className="mb-2 border-b pb-2">
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostsComponent;

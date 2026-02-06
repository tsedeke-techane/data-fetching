type Post = {
    userId: string;
    id: number;
    title: string;
    body: string;
}

type Album = {
    userId: string;
    id: number; 
    title: string;  
};

async function getUserPosts(userId: string): Promise<Post[]> {
    await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate network delay
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
    const posts: Post[] = await res.json();
    return posts;
}

async function getUserAlbums(userId: string): Promise<Album[]> {
    await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate network delay
    const res = await fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`);
    const albums: Album[] = await res.json();
    return albums;
}

export default async function UserParallel({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const [posts, albums] = await Promise.all([
    getUserPosts(id),
    getUserAlbums(id),
  ]);

    return (
        <div className="max-w-3xl mx-auto py-8 px-4">
            <h1 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-yellow-500 to-orange-500 text-white py-4 rounded shadow-lg">User {     id} Details</h1>
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow border border-gray-100 mb-6">
                <h2 className="text-2xl font-semibold text-yellow-700 mb-4">Posts</h2>
                <ul className="space-y-4">
                    {posts.map(post => (
                        <li key={post.id} className="border-b border-gray-200 pb-4">
                            <h3 className="text-xl font-medium text-yellow-600">{post.title}</h3>
                            <p className="text-gray-700">{post.body}</p>
                        </li>
                    ))}
                </ul>
            </div>      
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow border border-gray-100">
                <h2 className="text-2xl font-semibold text-orange-700 mb-4">Albums</h2>
                <ul className="space-y-4">
                    {albums.map(album => (
                        <li key={album.id} className="border-b border-gray-200 pb-4">
                            <h3 className="text-xl font-medium text-orange-600">{album.title}</h3>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
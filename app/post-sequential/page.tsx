import Author from "./author";
type Post = {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export default async function PostSequential() {
    await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate network delay
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts: Post[] = await res.json();

    const filteredPosts = posts.filter(post => post.userId % 10 === 1);

    return (
        <div className="max-w-3xl mx-auto py-8 px-4">
            <h1 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-green-500 to-teal-500 text-white py-4 rounded shadow-lg">Posts List</h1>
            <ul className="space-y-6">
                {filteredPosts.map(post => (
                    <li
                        key={post.id}
                        className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow border border-gray-100"
                    >
                        <h2 className="text-xl font-semibold text-green-700 mb-2">{post.title}</h2>
                        <p className="text-gray-700">{post.body}</p>

                        <Author userId={post.userId} />
                    </li>
                ))}
            </ul>
        </div>
    );
}
    
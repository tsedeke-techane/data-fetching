type Author = {
    id: number;
    name: string;
};

export default async function Author({ userId }: { userId: number }) {
    await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate network delay
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`); 
    const users: Author = await res.json();

    return (
        <div className="max-w-3xl mx-auto py-8 px-4">
            <h1 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-purple-500 to-pink-500 text-white py-4 rounded shadow-lg">Author Details</h1>
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow border border-gray-100">
                Written by: <span className="font-medium text-gray-700">{users.name}</span>
            </div>
        </div>
    );
}
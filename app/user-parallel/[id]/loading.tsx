export default function Loading() {
    return (
        <div className="max-w-3xl mx-auto py-8 px-4">
            <h1 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-purple-500 to-pink-500 text-white py-4 rounded shadow-lg animate-pulse">Loading Author...</h1>
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100 flex flex-col items-start animate-pulse">
                <div className="h-6 bg-gray-300 rounded w-1/2 mb-4"></div>
            </div>
        </div>
    );
}
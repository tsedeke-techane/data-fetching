export default function Loading() {
    return (
        <div className="max-w-3xl mx-auto py-8 px-4">
            <h1 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-blue-500 to-indigo-500 text-white py-4 rounded shadow-lg animate-pulse">Loading Users...</h1>
            <ul className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
                {[...Array(6)].map((_, index) => (
                    <li
                        key={index}
                        className="bg-white rounded-lg shadow-md p-6 border border-gray-100 flex flex-col items-start animate-pulse"
                    >
                        <div className="h-6 bg-gray-300 rounded w-3/4 mb-4"></div>
                        <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
                        <div className="h-4 bg-gray-300 rounded w-5/6"></div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
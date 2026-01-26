"use client";

import { useEffect, useState } from "react";

type User = {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
}

export default function UsersClientPage() {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const res = await fetch('https://jsonplaceholder.typicode.com/users');
                if (!res.ok) {
                    throw new Error('Failed to fetch users');
                }
                const data: User[] = await res.json();
                setUsers(data);
            } catch (err) {
                setError((err as Error).message);
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="max-w-3xl mx-auto py-8 px-4">
            <h1 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-blue-500 to-indigo-500 text-white py-4 rounded shadow-lg">Users List</h1>
            <ul className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
                {users.map(user => (
                    <li
                        key={user.id}
                        className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow border border-gray-100 flex flex-col items-start"
                    >
                        <h2 className="text-xl font-semibold text-blue-700 mb-2">{user.name} <span className="text-gray-500 text-base">({user.username})</span></h2>
                        <p className="text-gray-700 mb-1"><span className="font-medium">Email:</span> {user.email}</p>
                        <p className="text-gray-700"><span className="font-medium">Phone:</span> {user.phone}</p>
                    </li>
                ))}
            </ul>
        </div>
    );      
}
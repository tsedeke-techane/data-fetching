"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Error() {
    const router = useRouter();

    useEffect(() => {
        const timer = setTimeout(() => {
            router.push('/users-server');
        }, 3000);

        return () => clearTimeout(timer);
    }, [router]);

    return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
            <h1>Something went wrong!</h1>
            <p>Redirecting to users page in 3 seconds...</p>
        </div>
    );
}
# Data Fetching Patterns in Next.js

This project explores efficient data fetching strategies in Next.js, including parallel and sequential patterns, direct database access, and SSR-driven architecture to maximize performance and scalability.


## Next.js Resources & Documentation

Explore official Next.js documentation and tutorials for deeper understanding and advanced usage:


## Optimized Data Fetching in Next.js

This project demonstrates advanced data fetching strategies in Next.js, focusing on parallel and sequential patterns, direct database access, and SSR-driven architecture for maximum performance.

## Key Concepts

### 1. Parallel vs Sequential Fetching
- **Parallel Fetching**: Multiple data sources are fetched simultaneously using `Promise.all`, reducing overall wait time.
- **Sequential Fetching**: Data sources are fetched one after another, useful when later requests depend on earlier results.

### 2. Direct Database Access
- Use server components or API routes to connect directly to your database (e.g., via Prisma, MongoDB, or native drivers).
- Avoid unnecessary client-side requests for sensitive or performance-critical data.

### 3. SSR-Driven Architecture
- Leverage Next.js Server Components and `getServerSideProps` for server-side rendering (SSR).
- SSR ensures data is fetched and rendered on the server, improving SEO and initial load performance.

## Implementation Patterns

### Parallel Fetching Example
```ts
const [users, posts] = await Promise.all([
	fetchUsers(),
	fetchPosts()
]);
```

### Sequential Fetching Example
```ts
const user = await fetchUser();
const posts = await fetchPostsByUser(user.id);
```

### Direct DB Access Example (Server Component)
```ts
import { getUsers } from '@/lib/db';
export default async function Page() {
	const users = await getUsers();
	return <UserList users={users} />;
}
```

### SSR Example
```ts
export async function getServerSideProps() {
	const data = await fetchDataFromDB();
	return { props: { data } };
}
```

## Best Practices
- Prefer parallel fetching for independent data sources.
- Use sequential fetching when data dependencies exist.
- Access the database directly in server components or API routes.
- Use SSR for SEO and performance-critical pages.
- Cache data where possible (e.g., with SWR, React Query, or Next.js built-in caching).

## Folder Structure
- `app/` - Server components and pages
- `public/` - Static assets
- `lib/` - Database utilities (recommended)

## References
- [Next.js Data Fetching Docs](https://nextjs.org/docs/app/building-your-application/data-fetching)
- [Server Components](https://nextjs.org/docs/app/building-your-application/rendering/server-components)
- [API Routes](https://nextjs.org/docs/pages/api-reference/api-routes)


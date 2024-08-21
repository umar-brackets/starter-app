import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define your API types
interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

// Define your API slice
export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }), // Replace with your API base URL
  endpoints: (builder) => ({
    getPosts: builder.query<Post[], void>({
      query: () => '/posts',
    }),
    // Add more endpoints as needed
  }),
})

// Export hooks for usage in functional components
export const { useGetPostsQuery } = apiSlice

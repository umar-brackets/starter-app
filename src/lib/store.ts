// lib/store.ts
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slices/CounterSlice'
import { apiSlice } from './api/testApi/testApi'

// Create and configure the store
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [apiSlice.reducerPath]: apiSlice.reducer, // Add the API slice reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware), // Add the API slice middleware
})

// Infer the RootState and AppDispatch types
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

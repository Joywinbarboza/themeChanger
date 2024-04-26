// Import necessary functions and modules from Redux toolkit and redux-persist
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import themeReducer from "./themes/themeSlice"; // Import your reducer
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Import storage

// Combine reducers if you have more than one reducer
const rootReducer = combineReducers({ theme: themeReducer });

// Configuration for redux-persist
const persistConfig = {
  key: "root", // key for storage
  version: 1, // version for storage
  storage, // storage engine
};

// Wrap rootReducer with persistReducer to enable data persistence
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create the Redux store with persistedReducer
export const store = configureStore({
  reducer: persistedReducer, // Set the root reducer
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Disable serializable check for non-serializable values
    }),
});

// Create a persistor to manage persistence
export const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>; // Infer the RootState type
// Inferred type: {counter: CounterState}
export type AppDispatch = typeof store.dispatch; // Infer the AppDispatch type

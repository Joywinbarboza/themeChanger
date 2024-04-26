import { createSlice } from "@reduxjs/toolkit"; // Import createSlice from Redux toolkit
import type { PayloadAction } from "@reduxjs/toolkit"; // Import PayloadAction type from Redux toolkit
import type { RootState } from "../store"; // Import RootState type from the store

// Define a type for the slice state
interface ThemeState {
  theme: string;
}

// Define the initial state using that type
const initialState: ThemeState = {
  theme: "theme-dracula", // Initial theme state
};

// Create a slice for managing theme state
export const themeSlice = createSlice({
  name: "theme", // Name of the slice
  initialState, // Initial state
  reducers: {
    // Define reducer functions
    setColorTheme: (state, action: PayloadAction<string>) => {
      // Update the theme state with the provided payload
      state.theme = action.payload;
    },
  },
});

// Export action creators
export const { setColorTheme } = themeSlice.actions;

// Selector function to access the theme state
export const selectTheme = (state: RootState) => state.theme.theme;

// Export the reducer function
export default themeSlice.reducer;

import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice.js";
export const store = configureStore({
  reducer: {
    user: userSlice,
  },
});

// this file sets up the Redux store for the client application using the
// configureStore function from Redux Toolkit. Currently, it does not include
// any reducers, but it can be expanded in the future to manage the application's state as needed.

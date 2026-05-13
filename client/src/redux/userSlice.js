import { createSlice } from "@reduxjs/toolkit";

const userSLice = createSlice({
  name: "user",
  initialState: {
    userData: [],
  },
  reducers: {
    // this is where we define the actions
    setUserData: (state, action) => {
      state.userData = action.payload;
    },
  },
});
export const { setUserData } = userSLice.actions;
export default userSLice.reducer;
// this file defines a Redux slice for managing user-related state
//  in the client application. It uses the createSlice function from
// Redux Toolkit to create a slice named "user" with an initial state
// containing an empty array for userData. The slice includes a reducer
//  function setUserData, which updates the userData state when the corresponding
// action is dispatched. The actions and reducer are exported for use in other
//  parts of the application, allowing components to dispatch actions to update the
// user state and access it as needed.

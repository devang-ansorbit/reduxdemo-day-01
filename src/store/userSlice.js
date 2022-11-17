import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: { name: "", city: "" },
  },
  reducers: {
    setUser: (state, action) => {
      console.log("data", action.payload);
      return {
        ...state,
        user: action.payload,
      };
    },
  },
});

export const userAction = userSlice.actions;

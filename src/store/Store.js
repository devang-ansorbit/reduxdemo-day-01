import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./userSlice";
import { useSelector, useDispatch } from "react-redux";

export const Store = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
});

export const useAppSelector = useSelector;
// export const useAppDispatcher = () => useDispatch;
export const useAppDispatch = useDispatch;

/* Instruments */
import { combineReducers } from "@reduxjs/toolkit";
import { appSlice } from "./slices/appSlice";
import { screenSlice } from "./slices/screenSlice";

export const reducer = combineReducers({
  [appSlice.name]: appSlice.reducer,
  [screenSlice.name]: screenSlice.reducer,
});

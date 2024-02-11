/* Instruments */
import { combineReducers } from "@reduxjs/toolkit";
import { screenSlice } from "./slices/screenSlice";

export const reducer = combineReducers({
  [screenSlice.name]: screenSlice.reducer,
});

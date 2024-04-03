import { AppSlice, ScreenEditorState } from "@/lib/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ReduxState } from "../store";

const initialState: AppSlice = {
  screenEditorState: "closed",
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setScreenEditorState(state, action: PayloadAction<ScreenEditorState>) {
      state.screenEditorState = action.payload;
    },
  },
});

export const { setScreenEditorState } = appSlice.actions;
export default appSlice;

export const selectScreenEditorState = (state: ReduxState) =>
  state.app.screenEditorState;

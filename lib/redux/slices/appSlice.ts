import { AppSlice, ScreenEditorState, ScreenMode } from "@/lib/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ReduxState } from "../store";

const initialState: AppSlice = {
  screenEditorState: "closed",
  screenMode: "table-select",
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setScreenEditorState(state, action: PayloadAction<ScreenEditorState>) {
      state.screenEditorState = action.payload;
    },
    setScreenMode(state, action: PayloadAction<ScreenMode>) {
      state.screenMode = action.payload;
    },
  },
});

export const { setScreenEditorState, setScreenMode } = appSlice.actions;
export default appSlice;

export const selectScreenEditorState = (state: ReduxState) =>
  state.app.screenEditorState;

export const selectScreenMode = (state: ReduxState) => state.app.screenMode;

import { ScreenSlice } from "@/lib/types/slice";
import { createSlice } from "@reduxjs/toolkit";
import { ReduxState } from "../store";

const initialState: ScreenSlice = {
  walkingDead: {
    elements: [],
  },
};

export const screenSlice = createSlice({
  name: "screen",
  initialState,
  reducers: {
    addElement(state, action) {
      state.walkingDead.elements.push(action.payload);
    },
    removeElement(state, action) {
      state.walkingDead.elements = state.walkingDead.elements.filter(
        (element) => element.id !== action.payload
      );
    },
    updateElement(state, action) {
      const index = state.walkingDead.elements.findIndex(
        (element) => element.id === action.payload.id
      );
      state.walkingDead.elements[index] = action.payload;
    },
  },
});

export const { addElement, removeElement, updateElement } = screenSlice.actions;
export default screenSlice;

// Selectors

export const selectWalkingDead = (state: ReduxState) =>
  state.screen.walkingDead;

import { TableElement, ScreenSlice, Row } from "@/lib/types/slice";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
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
    addElement(state, action: PayloadAction<TableElement>) {
      state.walkingDead.elements.push(action.payload);
    },
    removeElement(state, action: PayloadAction<string>) {
      state.walkingDead.elements = state.walkingDead.elements.filter(
        (element) => element.id !== action.payload
      );
    },
    updateElement(state, action: PayloadAction<TableElement>) {
      const index = state.walkingDead.elements.findIndex(
        (element) => element.id === action.payload.id
      );
      state.walkingDead.elements[index] = action.payload;
    },
    updateTableRow(state, action: PayloadAction<{ id: string; row: Row }>) {
      const index = state.walkingDead.elements.findIndex(
        (element) => element.id === action.payload.id
      );
      const table = state.walkingDead.elements[index];
      const rowIndex = table.rows.findIndex(
        (row) => row.rowId === action.payload.row.rowId
      );
      table.rows[rowIndex] = action.payload.row;
    },
  },
});

export const { addElement, removeElement, updateElement, updateTableRow } =
  screenSlice.actions;
export default screenSlice;

// Selectors

export const selectWalkingDead = (state: ReduxState) =>
  state.screen.walkingDead;

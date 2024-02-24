import { ScreenSlice, RandomRow, GameElement } from "@/lib/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ReduxState } from "../store";

const initialState: ScreenSlice = {
  walkingDead: {
    elements: [],
  },
};
interface AddElementPayload {
  key: keyof ScreenSlice;
  element: GameElement;
}

interface RemoveElementPayload {
  key: keyof ScreenSlice;
  id: string;
}

interface MoveElementPayload {
  key: keyof ScreenSlice;
  id: string;
  order: number;
}

interface UpdateElementPayload {
  key: keyof ScreenSlice;
  element: GameElement;
}

interface UpdateTableRowPayload {
  key: keyof ScreenSlice;
  id: string;
  row: RandomRow;
}

export const screenSlice = createSlice({
  name: "screen",
  initialState,
  reducers: {
    addElement(state, action: PayloadAction<AddElementPayload>) {
      const { key, element } = action.payload;
      element.order = state[key].elements.length;
      state[key].elements.push(element);
    },
    removeElement(state, action: PayloadAction<RemoveElementPayload>) {
      const { key, id } = action.payload;
      const index = state[key].elements.findIndex(
        (element) => element.id === id
      );
      state[key].elements.splice(index, 1);
      // Re-calculate order
      state[key].elements.forEach((element, index) => {
        element.order = index;
      });
    },
    moveElement(state, action: PayloadAction<MoveElementPayload>) {
      const { key, id, order } = action.payload;
      const index = state[key].elements.findIndex(
        (element) => element.id === id
      );
      const element = state[key].elements[index];
      state[key].elements.splice(index, 1);
      state[key].elements.splice(order, 0, element);
      // Re-calculate order
      state[key].elements.forEach((element, index) => {
        element.order = index;
      });
    },
    setElements(
      state,
      action: PayloadAction<{ key: keyof ScreenSlice; elements: GameElement[] }>
    ) {
      const { key, elements: newElements } = action.payload;

      // Initialize an empty array for updated elements
      const updatedElements: GameElement[] = [];

      // Using a Set for efficient lookup of new element IDs
      const newElementIds = new Set(newElements.map((element) => element.id));

      // Filter out elements not in the new list
      state[key].elements.forEach((element) => {
        if (newElementIds.has(element.id)) {
          // If the element is in the new list, push it to updatedElements without modifying the original object
          updatedElements.push({ ...element });
        }
      });

      // Add new elements that are not already in the state
      newElements.forEach((newElement) => {
        if (
          !state[key].elements.some((element) => element.id === newElement.id)
        ) {
          updatedElements.push({ ...newElement });
        }
      });

      // Assign the updated elements back to the state and update their order
      state[key].elements = updatedElements.map((element, index) => ({
        ...element,
        order: index, // Update the order based on the element's index in the updated array
      }));
    },
    updateElement(state, action: PayloadAction<UpdateElementPayload>) {
      const { key, element } = action.payload;
      const index = state[key].elements.findIndex((el) => el.id === element.id);
      state[key].elements[index] = { ...element };
    },
    updateTableRow(state, action: PayloadAction<UpdateTableRowPayload>) {
      const { key, id, row } = action.payload;
      const elementIndex = state[key].elements.findIndex(
        (element) => element.id === id
      );
      const rowIndex = state[key].elements[elementIndex].rows.findIndex(
        (r) => r.rowId === row.rowId
      );
      state[key].elements[elementIndex].rows[rowIndex] = { ...row };
    },
  },
});

export const {
  addElement,
  moveElement,
  removeElement,
  updateElement,
  setElements,
  updateTableRow,
} = screenSlice.actions;
export default screenSlice;

// Selectors

export const selectWalkingDead = (state: ReduxState) =>
  state.screen.walkingDead;
export const selectScreen = (state: ReduxState) => state.screen;

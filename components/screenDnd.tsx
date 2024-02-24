"use client";

import React, { useCallback } from "react";
import { DragDropContext } from "@hello-pangea/dnd";
import { useDispatch, useSelector } from "@/lib/redux/store";
import { moveElement, selectScreen } from "@/lib/redux/slices/screenSlice";
import { ScreenSlice } from "@/lib/types";

export const TableDnd = ({ screenKey }: Props) => {
  const screen = useSelector(selectScreen);
  const globalData = screen[screenKey];

  const dispatch = useDispatch();

  return (
    <DragDropContext
      onDragEnd={(result) => {
        console.log(result);
        if (!result.destination) return;
        dispatch(
          moveElement({
            key: screenKey,
            id: result.draggableId,
            order: result.destination?.index ?? 0,
          })
        );
      }}
    >
      <div>Hello world</div>
    </DragDropContext>
  );
};

interface Props {
  screenKey: keyof ScreenSlice;
}

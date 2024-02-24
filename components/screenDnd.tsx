"use client";

import React, { useCallback } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
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
      <Droppable droppableId="screen">
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {globalData.elements.map((element, index) => {
              return (
                <Draggable
                  key={element.id}
                  draggableId={element.id}
                  index={index}
                >
                  {(provided) => (
                    <Card
                      className="mb-4"
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <CardHeader>
                        <CardTitle>{element.name}</CardTitle>
                        <CardDescription>{element.description}</CardDescription>
                      </CardHeader>
                      <CardContent></CardContent>
                    </Card>
                  )}
                </Draggable>
              );
            })}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

interface Props {
  screenKey: keyof ScreenSlice;
}

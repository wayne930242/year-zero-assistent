"use client";

import React, { useState } from "react";
import { X } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import { useDispatch, useSelector } from "@/lib/redux/store";
import {
  moveElement,
  removeElement,
  selectScreen,
} from "@/lib/redux/slices/screenSlice";
import { ScreenSlice } from "@/lib/types";
import { ElementTable } from "./elementTable";
import { Button } from "./ui/button";

export const TableDnd = ({ screenKey }: Props) => {
  const screen = useSelector(selectScreen);
  const globalData = screen[screenKey];
  const [collapsed, setCollapsed] = useState<string[]>([]);

  const dispatch = useDispatch();

  return (
    <DragDropContext
      onDragEnd={(result) => {
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
                      <CardHeader
                        className="relative hover:bg-gray-100"
                        onClick={(e) => {
                          e.stopPropagation();
                          setCollapsed((prev) =>
                            prev.includes(element.id)
                              ? prev.filter((id) => id !== element.id)
                              : [...prev, element.id]
                          );
                        }}
                      >
                        <CardTitle>{element.name}</CardTitle>
                        <CardDescription>{element.description}</CardDescription>
                        <Button
                          className="absolute top-2 right-2 cursor-pointer"
                          size="icon"
                          variant="ghost"
                        >
                          <X
                            onClick={(e) => {
                              e.stopPropagation();
                              dispatch(
                                removeElement({
                                  key: screenKey,
                                  id: element.id,
                                })
                              );
                            }}
                          />
                        </Button>
                      </CardHeader>
                      {collapsed.includes(element.id) ? null : (
                        <CardContent>
                          <ElementTable element={element} />
                        </CardContent>
                      )}
                    </Card>
                  )}
                </Draggable>
              );
            })}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

interface Props {
  screenKey: keyof ScreenSlice;
}

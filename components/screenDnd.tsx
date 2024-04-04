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
    <>
      {screen[screenKey].elements.length === 0 && (
        <div className="text-center text-gray-500 flex justify-start items-center gap-2 px-4 py-2">
          你的 GM 屏幕是空白的。
        </div>
      )}
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
                      >
                        <CardHeader
                          className="relative hover:bg-gray-100 p-4"
                          onClick={(e) => {
                            e.stopPropagation();
                            setCollapsed((prev) =>
                              prev.includes(element.id)
                                ? prev.filter((id) => id !== element.id)
                                : [...prev, element.id]
                            );
                          }}
                          {...provided.dragHandleProps}
                        >
                          <CardTitle>{element.name}</CardTitle>
                          <CardDescription>
                            {element.description}
                          </CardDescription>
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
                          <CardContent className="p-4 pt-0">
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
    </>
  );
};

interface Props {
  screenKey: keyof ScreenSlice;
}

"use client";
import { useEffect, useState } from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { ScrollArea } from "@/components/ui/scroll-area";
import { GameElement, ScreenSlice } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useDispatch, useSelector } from "@/lib/redux/store";
import { selectScreen, setElements } from "@/lib/redux/slices/screenSlice";
import { cn } from "@/lib/utils";

export const EditDrawer = ({ data, screenKey }: Props) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<string[]>([]);
  const [checkedList, setCheckedList] = useState<string[]>([]);

  const dispatch = useDispatch();
  const screen = useSelector(selectScreen);
  const globalData = screen[screenKey];

  useEffect(() => {
    // Update globalData.elements to selected elements
    setSelected(globalData.elements.map((element) => element.id));
  }, [globalData.elements]);

  useEffect(() => {
    // Add elements to checkedList when selected new elements,
    // but if selected elements are removed, do not remove them from checkedList
    const updatedCheckedList = new Set(checkedList);
    selected.forEach((element) => {
      updatedCheckedList.add(element);
    });
    setCheckedList(Array.from(updatedCheckedList));
  }, [selected]);

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button>編輯屏幕</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle className="w-full max-w-2xl mx-auto">
            勾選加到 GM 屏幕的元素
          </DrawerTitle>
        </DrawerHeader>
        <DrawerDescription asChild>
          <div className="w-full max-w-2xl mx-auto flex-col items-center flex sm:flex-row sm:items-start sm:justify-between gap-4 p-4">
            <Popover open={open} onOpenChange={setOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  role="combobox"
                  aria-expanded={open}
                  className="w-[200px] justify-between"
                >
                  搜尋表格
                  <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-[200px] p-0">
                <Command>
                  <CommandInput placeholder="搜尋..." />
                  <CommandEmpty>找不到表格。</CommandEmpty>
                  <CommandGroup>
                    {data.map((d) => (
                      <CommandItem
                        key={d.id}
                        value={d.id}
                        onSelect={(currentValue) => {
                          setSelected((prev) => {
                            if (prev.includes(currentValue)) {
                              return prev.filter((v) => v !== currentValue);
                            }
                            return [...prev, currentValue];
                          });
                          setOpen(false);
                        }}
                      >
                        <Check
                          className={cn(
                            "mr-2 h-4 w-4",
                            selected.includes(d.id)
                              ? "opacity-100"
                              : "opacity-0"
                          )}
                        />
                        {d.name}
                        <span className="opacity-0 h-0 w-0">
                          ;{d.description};{d.originalName};
                          {d.keywords?.join(";")}
                        </span>
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </Command>
              </PopoverContent>
            </Popover>
            <ScrollArea className="grow border rounded-md px-6 py-2 max-h-[400px] w-[200px]">
              <div className="flex flex-col gap-y-2 items-baseline w-full">
                {checkedList.length > 0 &&
                  checkedList.map((i) => (
                    <div className="items-top flex space-x-2" key={i}>
                      <Checkbox
                        id="screen"
                        checked={selected.includes(i)}
                        onCheckedChange={(b) => {
                          setSelected((prev) => {
                            if (prev.includes(i)) {
                              return prev.filter((v) => v !== i);
                            }
                            return [...prev, i];
                          });
                        }}
                      />
                      <div className="grid gap-1.5 leading-none">
                        <label
                          htmlFor="screen"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          {data.find((d) => d.id === i)?.name}
                        </label>
                      </div>
                    </div>
                  ))}
                {checkedList.length === 0 && (
                  <div className="text-muted-foreground text-sm">
                    你還沒有勾選任何表格。
                  </div>
                )}
              </div>
            </ScrollArea>
          </div>
        </DrawerDescription>
        <DrawerFooter className="flex items-center justify-center sm:flex-row">
          <DrawerClose asChild>
            <Button
              className="w-full max-w-36"
              onClick={() => {
                dispatch(
                  setElements({
                    key: screenKey,
                    elements: data.filter((d) => selected.includes(d.id)),
                  })
                );
              }}
            >
              套用
            </Button>
          </DrawerClose>
          <DrawerClose asChild>
            <Button className="w-full max-w-36" variant="outline">
              取消
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

interface Props {
  data: GameElement[];
  screenKey: keyof ScreenSlice;
}

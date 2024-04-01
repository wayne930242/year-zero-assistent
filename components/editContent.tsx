"use client";
import { useEffect, useMemo, useState } from "react";
import { Check, Library } from "lucide-react";

import { Categories, GameElement, ScreenSlice } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

import {
  DropdownMenuSeparator,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import { useDispatch, useSelector } from "@/lib/redux/store";
import {
  selectScreen,
  setElements,
  setCategories,
} from "@/lib/redux/slices/screenSlice";
import { cn } from "@/lib/utils";
import { Label } from "./ui/label";

function calculateRelevance(search: string, dataItem: GameElement): number {
  const weights = {
    name: 4,
    originalName: 3,
    description: 2,
    keywords: 1,
  };

  let score = 0;

  const searchLower = search.toLowerCase();

  if (dataItem.name.toLowerCase().includes(searchLower)) {
    score += weights.name;
  }

  if (
    dataItem.originalName &&
    dataItem.originalName.toLowerCase().includes(searchLower)
  ) {
    score += weights.originalName;
  }

  if (
    dataItem.description &&
    dataItem.description.toLowerCase().includes(searchLower)
  ) {
    score += weights.description;
  }

  if (
    dataItem.tags &&
    dataItem.tags.some((keyword) => keyword.toLowerCase().includes(searchLower))
  ) {
    score += weights.keywords;
  }

  return score;
}

export const EditContent = ({ data, screenKey, searchData }: Props) => {
  const [selected, setSelected] = useState<string[]>([]);
  const [checkedList, setCheckedList] = useState<string[]>([]);

  const dispatch = useDispatch();
  const screen = useSelector(selectScreen);
  const globalData = screen[screenKey];

  const memoDataRecord = useMemo<Record<string, GameElement>>(() => {
    const dataRecord: Record<string, GameElement> = {};
    data.forEach((d) => {
      dataRecord[d.id] = d;
    });
    return dataRecord;
  }, [data]);

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
    <>
      {searchData && (
        <div className="w-full flex justify-end items-center gap-2 mb-4">
          {searchData.categories && (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                  <Library className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem
                  className="items-top px-3 py-2"
                  onClick={() => {
                    dispatch(
                      setCategories({
                        key: screenKey,
                        searchs: [],
                      })
                    );
                  }}
                >
                  清除
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                {Object.keys(searchData.categories).map((category) => (
                  <div
                    key={category}
                    className="items-top flex space-x-2 px-3 py-2"
                  >
                    <Checkbox
                      id={category}
                      checked={globalData.searchs?.categories?.includes(
                        category
                      )}
                      onCheckedChange={(b) => {
                        dispatch(
                          setCategories({
                            key: screenKey,
                            searchs: b
                              ? [
                                  ...(globalData.searchs?.categories ?? []),
                                  category,
                                ]
                              : globalData.searchs?.categories?.filter(
                                  (c) => c !== category
                                ) ?? [],
                          })
                        );
                      }}
                    />
                    <Label htmlFor={category}>
                      {searchData.categories[category].name}
                      {searchData.categories[category].gmOnly && (
                        <span className="text-xs ml-1 text-destructive">
                          GM
                        </span>
                      )}
                    </Label>
                  </div>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </div>
      )}
      <div className="w-full mx-auto flex-col-reverse items-center flex sm:flex-row sm:items-start sm:justify-between gap-4">
        <Command
          className="w-full sm:w-[300px] justify-between"
          filter={(value, search) => {
            return calculateRelevance(search, memoDataRecord[value]);
          }}
        >
          <CommandInput placeholder="搜尋..." />
          <CommandEmpty>找不到表格。</CommandEmpty>
          <CommandGroup className="overflow-y-auto h-[160px]">
            {data
              .filter((d) => {
                if (!searchData) return true;
                return (
                  !globalData.searchs?.categories?.length ||
                  globalData.searchs?.categories?.includes(d.category)
                );
              })
              .map((d) => (
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
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      selected.includes(d.id) ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {d.name}
                </CommandItem>
              ))}
          </CommandGroup>
        </Command>
        <div className="grow border rounded-md px-6 py-2 max-h-[200px] w-full overflow-y-auto">
          <div className="flex flex-wrap gap-y-1 gap-x-2 items-center w-full">
            {checkedList.length > 0 &&
              checkedList.map((i) => (
                <div className="items-top flex space-x-2 px-3 py-2" key={i}>
                  <Checkbox
                    id={i}
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
                    <Label
                      htmlFor={i}
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {data.find((d) => d.id === i)?.name}
                    </Label>
                  </div>
                </div>
              ))}
            {checkedList.length === 0 && (
              <div className="text-muted-foreground text-sm">
                你還沒有勾選任何表格。
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center sm:justify-end my-6 sm:my-2">
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
      </div>
    </>
  );
};

interface Props {
  data: GameElement[];
  searchData?: {
    categories: Categories;
  };
  screenKey: keyof ScreenSlice;
}

"use client";

import { EraserIcon, Filter } from "lucide-react";

import { Categories, ScreenSlice } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

import {
  DropdownMenuSeparator,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { useDispatch, useSelector } from "@/lib/redux/store";
import {
  selectScreen,
  setCategories,
  toggleAllPcCategory,
} from "@/lib/redux/slices/screenSlice";
import { Label } from "@/components/ui/label";
import React from "react";

export const CategoryFilterButton = ({ screenKey, categories }: Props) => {
  const dispatch = useDispatch();
  const screen = useSelector(selectScreen);
  const globalData = screen[screenKey];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size="icon" variant="secondary">
          <Filter className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="h-[200px] overflow-y-auto">
        <DropdownMenuItem
          className="items-top px-3 py-2 flex space-x-2 items-center"
          onClick={() => {
            dispatch(
              setCategories({
                key: screenKey,
                searchs: [],
              })
            );
          }}
        >
          <div>清除</div>
          <EraserIcon className="h-4 w-4" />
        </DropdownMenuItem>

        {globalData.toolbar?.iamGM && (
          <div className="items-top flex space-x-2 px-3 py-2">
            <Checkbox
              id="all-pc-category"
              checked={!!globalData.toolbar?.categories?.length}
              onCheckedChange={(b) => {
                dispatch(
                  toggleAllPcCategory({
                    key: screenKey,
                    categories: categories,
                  })
                );
              }}
            />
            <Label htmlFor="all-pc-category" className="w-full">
              PL only
            </Label>
          </div>
        )}

        <DropdownMenuSeparator />
        {Object.keys(categories).map((category) => (
          <React.Fragment key={category}>
            {(!categories[category].gmOnly || globalData.toolbar?.iamGM) && (
              <div className="items-top flex space-x-2 px-3 py-2">
                <Checkbox
                  id={category}
                  checked={globalData.toolbar?.categories?.includes(category)}
                  onCheckedChange={(b) => {
                    dispatch(
                      setCategories({
                        key: screenKey,
                        searchs: b
                          ? [
                              ...(globalData.toolbar?.categories ?? []),
                              category,
                            ]
                          : globalData.toolbar?.categories?.filter(
                              (c) => c !== category
                            ) ?? [],
                      })
                    );
                  }}
                />
                <Label htmlFor={category} className="w-full">
                  {categories[category].name}
                  {categories[category].gmOnly && (
                    <span className="text-xs ml-1 text-destructive">GM</span>
                  )}
                </Label>
              </div>
            )}
          </React.Fragment>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

interface Props {
  categories: Categories;
  screenKey: keyof ScreenSlice;
}

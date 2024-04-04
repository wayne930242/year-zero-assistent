"use client";
import { useEffect, useMemo, useState } from "react";

import { Categories, GameElement, ScreenSlice } from "@/lib/types";

import { useDispatch, useSelector } from "@/lib/redux/store";
import { selectScreen } from "@/lib/redux/slices/screenSlice";
import { CategoryFilterButton } from "./editor/toolbar/categoryFilterButton";
import { GmOnlyButton } from "./editor/toolbar/gmOnlyButton";
import { TableCombo } from "./editor/major/tableCombo";

export const EditContent = ({ data, screenKey, searchData }: Props) => {
  return (
    <>
      {searchData && (
        <div className="w-full flex justify-between items-center gap-2 mb-4">
          <div className="flex grow-0 gap-2"></div>
          <div className="flex-1"></div>
          <div className="flex grow-0 gap-2">
            {searchData?.categories && (
              <CategoryFilterButton
                screenKey={screenKey}
                categories={searchData.categories}
              />
            )}
            {searchData?.categories && <GmOnlyButton screenKey={screenKey} />}
          </div>
        </div>
      )}
      <TableCombo data={data} screenKey={screenKey} searchData={searchData} />
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

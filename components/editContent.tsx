"use client";
import { Categories, GameElement, ScreenSlice } from "@/lib/types";
import { CategoryFilterButton } from "./editor/toolbar/categoryFilterButton";
import { GmOnlyButton } from "./editor/toolbar/gmOnlyButton";
import { TableCombo } from "./editor/major/tableCombo";
import { useSelector } from "@/lib/redux/store";
import { selectScreenMode } from "@/lib/redux/slices/appSlice";

export const EditContent = ({ data, screenKey, searchData }: Props) => {
  const screenMode = useSelector(selectScreenMode);
  return (
    <>
      {searchData && (
        <div className="w-full flex justify-between items-center gap-2 mb-4 p-2 rounded-md border">
          <div className="flex grow-0 gap-2">
            {searchData?.categories && <GmOnlyButton screenKey={screenKey} />}
          </div>
          <div className="flex-1"></div>
          <div className="flex grow-0 gap-2">
            {searchData?.categories && (
              <CategoryFilterButton
                screenKey={screenKey}
                categories={searchData.categories}
              />
            )}
          </div>
        </div>
      )}
      {screenMode === "table-select" && (
        <TableCombo data={data} screenKey={screenKey} searchData={searchData} />
      )}
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

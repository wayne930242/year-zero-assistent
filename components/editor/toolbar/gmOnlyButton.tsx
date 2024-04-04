"use client";

import { ScreenSlice } from "@/lib/types";
import { useDispatch, useSelector } from "@/lib/redux/store";
import { selectScreen, setGmOnly } from "@/lib/redux/slices/screenSlice";
import { Button } from "../../ui/button";

export const GmOnlyButton = ({ screenKey }: Props) => {
  const dispatch = useDispatch();
  const screen = useSelector(selectScreen);
  const globalData = screen[screenKey];
  const iamGM = globalData.toolbar?.iamGM;

  return (
    <Button
      variant={iamGM ? "destructive" : "secondary"}
      size="icon"
      onClick={() => {
        dispatch(
          setGmOnly({
            key: screenKey,
            open: !iamGM,
          })
        );
      }}
    >
      {iamGM ? "GM" : "PL"}
    </Button>
  );
};

interface Props {
  screenKey: keyof ScreenSlice;
}

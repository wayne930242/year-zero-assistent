"use client";
import { Button } from "@/components/ui/button";
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

export const TableSelector = () => {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button>新增表格</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>將表格加到你的 GM 屏幕</DrawerTitle>
        </DrawerHeader>

        <DrawerFooter className="flex items-center justify-center sm:flex-row">
          <Button className="w-full max-w-36">確定</Button>
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

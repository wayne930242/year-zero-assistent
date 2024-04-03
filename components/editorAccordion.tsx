"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  selectScreenEditorState,
  setScreenEditorState,
} from "@/lib/redux/slices/appSlice";
import { useDispatch, useSelector } from "@/lib/redux/store";

export const EditorAccordion = ({ children }: Props) => {
  const state = useSelector(selectScreenEditorState);
  const value = state === "open" ? ["item"] : [];
  const dispatch = useDispatch();
  return (
    <Accordion
      type="multiple"
      value={value}
      onValueChange={(value) => {
        if (value.length === 0) {
          dispatch(setScreenEditorState("closed"));
        } else {
          dispatch(setScreenEditorState("open"));
        }
      }}
    >
      <AccordionItem value="item">
        <AccordionTrigger className="px-4">編輯屏幕</AccordionTrigger>
        <AccordionContent>
          <div className="w-full px-4">{children}</div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

interface Props {
  children: React.ReactNode;
}

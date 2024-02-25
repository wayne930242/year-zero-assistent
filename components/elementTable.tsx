import { useState } from "react";
import { Dices, Eraser, WrapText } from "lucide-react";
import { animated, useSpring } from "@react-spring/web";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { GameElement } from "@/lib/types";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

export function ElementTable({ element }: Props) {
  const [isRolling, setIsRolling] = useState<boolean>(false);
  const [diceResult, setDiceResult] = useState<number | string>();
  const [nowrap, setNowrap] = useState<boolean>(true);

  const animation = useSpring({
    to: { transform: "rotate(360deg)" },
    from: { transform: "rotate(0deg)" },
    reset: isRolling,
    reverse: false,
    onRest: () => setIsRolling(false),
    config: { duration: 300 },
  });

  return (
    <div className="my-2">
      <div className="flex gap-4 justify-end pb-2">
        <Button
          size="icon"
          variant={nowrap ? "outline" : "default"}
          onClick={() => setNowrap(!nowrap)}
        >
          <WrapText />
        </Button>

        {element.type === "random-table" && (
          <>
            <Button
              size="icon"
              variant="outline"
              onClick={() => setDiceResult(undefined)}
              disabled={diceResult === undefined}
            >
              <Eraser />
            </Button>
            <Button
              size="icon"
              disabled={isRolling}
              onClick={() => {
                if (isRolling) return;
                setIsRolling(true);
                if (element.type === "random-table") {
                  const totalWeight = element.rows.reduce(
                    (acc, row) => acc + (row.weight ?? 1),
                    0
                  );
                  const random = Math.random() * totalWeight;
                  let resultIndex = 0;
                  let currentWeight = 0;
                  while (currentWeight < random) {
                    currentWeight += element.rows[resultIndex].weight ?? 1;
                    resultIndex++;
                  }
                  resultIndex = Math.max(0, resultIndex - 1);
                  const result = element.rows[resultIndex].rowId;
                  setDiceResult(result);
                }
              }}
            >
              <animated.div style={animation}>
                <Dices />
              </animated.div>
            </Button>
          </>
        )}
      </div>
      <Table>
        <TableCaption className="text-xs">{element.originalName}</TableCaption>
        {element.headers && (
          <TableHeader>
            <TableRow>
              {element.headers.map((header) => (
                <TableHead key={header}>{header}</TableHead>
              ))}
            </TableRow>
          </TableHeader>
        )}
        <TableBody>
          {element.rows.map((row, rowOuterIndex) => {
            if (diceResult !== undefined && row.rowId !== diceResult) {
              return null;
            }
            const rows = row.editedRows || row.defaultRows;

            let rowSpans = rows.map((rowArray) => rowArray.map(() => 1));
            rows.forEach((rowArray, rowIndex) => {
              rowArray.forEach((cell, cellIndex) => {
                if (cell === "") {
                  for (let i = rowIndex - 1; i >= 0; i--) {
                    if (rows[i][cellIndex] !== "") {
                      rowSpans[i][cellIndex] += 1;
                      break;
                    }
                  }
                  rowSpans[rowIndex][cellIndex] = 0;
                }
              });
            });

            return rows.map((rowArray, rowIndex) => (
              <TableRow key={`${row.rowId}-${rowIndex}`}>
                {rowArray.map((cell, cellIndex) => {
                  if (rowSpans[rowIndex][cellIndex] === 0) return null;
                  return (
                    <TableCell
                      className={cn(
                        "align-top",
                        nowrap ? "whitespace-nowrap" : "whitespace-normal"
                      )}
                      key={`${rowOuterIndex}-${rowIndex}-${cellIndex}`}
                      rowSpan={rowSpans[rowIndex][cellIndex]}
                    >
                      {cell || " "}
                    </TableCell>
                  );
                })}
              </TableRow>
            ));
          })}
        </TableBody>
      </Table>
    </div>
  );
}

interface Props {
  element: GameElement;
}

import { ExampleTableElement, RandomTableElement } from "@/lib/types";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";

export const TableElement = ({ element, diceResult, nowrap }: Props) => {
  return (
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
  );
};

interface Props {
  element: RandomTableElement | ExampleTableElement;
  diceResult?: string | number;
  nowrap: boolean;
}

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { GameElement } from "@/lib/types";

export function ElementTable({ element }: Props) {
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
                    className="align-top"
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
      <TableFooter></TableFooter>
    </Table>
  );
}

interface Props {
  element: GameElement;
}

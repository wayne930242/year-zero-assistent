/* ScreenSlice */
interface ScreenSlice {
  walkingDead: {
    elements: GameElement[];
  };
}

export type GameElement = RandomTableElement | ExampleTableElement;

export interface GameElementBase {
  id: string;
  name: string;
  originalName: string;
  description: string;
  editable?: boolean;
  order?: number;
}

export type TableType = "example" | "random-table";

export interface ExampleTableElement extends GameElementBase {
  type: "example";
  headers?: string[];
  rows: Row[];
}

export interface RandomTableElement extends GameElementBase {
  type: "random-table";
  headers: string[];
  rows: RandomRow[];
}

export interface Row {
  rowId: string | number;
  rows?: string[][];
  defaultRows: string[][];
}

export interface RandomRow extends Row {
  weight: number;
}

export type TableData = GameElement[];

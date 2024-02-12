interface ScreenSlice {
  walkingDead: {
    elements: RandomTableElement[];
  };
}

export type GameElement = RandomTableElement;

export interface GameElementBase {
  id: string;
  name: string;
  originalName: string;
  description: string;
  editable?: boolean;
}

export type TableType = "example" | "random-table";

export type RefType = "text";

export type GenType = "generator";

export interface ExampleTableElement extends GameElementBase {
  type: "example";
  headers?: string[];
  rows: string[][];
}

export interface RandomTableElement extends GameElementBase {
  type: "random-table";
  headers: string[];
  rows: RandomRow[];
}

export interface RandomRow {
  rowId: string | number;
  weight: number;
  cols?: (string[])[];
  defaultCols: (string[])[];
}

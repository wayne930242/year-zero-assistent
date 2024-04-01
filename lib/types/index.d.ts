import { ElementCategories } from "@/app/walking-dead/schema-data";

/* ScreenSlice */
export interface ScreenSlice {
  walkingDead: {
    elements: GameElement[];
    searchs: ScreenSearch;
  };
}

export interface ScreenSearch {
  categories?: string[];
  gmOnly?: boolean;
}

export type GameElement = RandomTableElement | ExampleTableElement;

export interface GameElementBase {
  id: string;
  tags?: string[];
  name: string;
  originalName: string;
  description: string;
  editable?: boolean;
  order?: number;
  category: keyof typeof ElementCategories;
}

export type TableType = "example" | "random-table" | "generator";

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
  editedRows?: string[][];
  defaultRows: string[][];
}

export interface RandomRow extends Row {
  weight?: number;
}

export interface GeneratorElement extends GameElementBase {
  type: "generator";
  rows: GeneratorRow[];
}

export interface GeneratorRow extends Row {
  rowName: string;
}

export type TableData = GameElement[];

/* Schema Element */
export interface Categories {
  [path: string]: {
    name: string;
    description: string;
    gmOnly?: boolean;
  };
}

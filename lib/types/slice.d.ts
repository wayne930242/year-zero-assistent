interface ScreenSlice {
  walkingDead: {
    elements: TableElement[];
  };
}

export interface GameElement {
  id: string;
  order: number;
  name: string;
  description: string;
  type: TableType | RefType | GenType;
  editable?: boolean;
}

export type TableType = "example" | "random-table";

export type RefType = "text"

export type GenType = 'generator'

export interface TableElement extends GameElement {
  type: TableType;
  headers: string[];
  rows: Row[];
}

export interface Row {
  rowId: string | number;
  text: string;
  defaultText: string;
}

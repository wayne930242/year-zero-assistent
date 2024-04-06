/* AppSlice */
export interface AppSlice {
  screenEditorState: ScreenEditorState;
  screenMode: ScreenMode;
}

export type ScreenMode =
  | "table-select"
  | "table-edit"
  | "generator"
  | "rule-viewer";

export type ScreenEditorState = "open" | "closed";

/* ScreenSlice */
export interface ScreenSlice {
  walkingDead: {
    elements: GameElement[];
    toolbar: Toolbar;
  };
}

export interface Toolbar {
  categories?: string[];
  iamGM?: boolean;
}

export type GameElement<T extends Categories = Categories> =
  | RandomTableElement<T>
  | ExampleTableElement<T>

export interface RuleElement<T extends Categories> extends GameElementBase<T> {
  type: "rule";
  rows: RuleRow[];
}

export interface RuleRow extends Row {
  tables?: string[];
}

export interface GameElementBase<T extends Categories> {
  id: string;
  tags?: string[];
  name: string;
  originalName: string;
  description: string;
  editable?: boolean;
  order?: number;
  category: keyof T;
}

export type TableType = "example" | "random-table" | "generator";

export interface ExampleTableElement<T extends Categories>
  extends GameElementBase<T> {
  type: "example";
  headers?: string[];
  rows: Row[];
}

export interface RandomTableElement<T extends Categories>
  extends GameElementBase<T> {
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

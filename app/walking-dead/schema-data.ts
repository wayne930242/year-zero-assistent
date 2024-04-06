import { Categories } from "@/lib/types";
import * as TableElements from "./table-data";

export const TableElementCategories = {
  "core/pc": {
    name: "PC",
    description: "PC 相關。",
  },
  "core/item": {
    name: "物品",
    description: "物品相關，包括武器。",
  },
  "core/combat": {
    name: "戰鬥",
    description: "戰鬥相關。",
  },
  "core/health_and_armor": {
    name: "健康與傷害",
    description: "健康與傷害相關，包含護甲效果。",
  },
  "core/hazard": {
    name: "危害",
    description: "危害相關。",
  },
  "core/vehicle": {
    name: "載具",
    description: "載具相關。",
  },
  "core/haven": {
    name: "避難港",
    description: "避難港相關。",
  },
  "core/travel": {
    name: "旅行",
    description: "旅行相關。",
  },
  "core/gm/challenge": {
    name: "挑戰",
    description: "挑戰相關。",
    gmOnly: true,
  },
  "core/gm/travel": {
    name: "旅行環境",
    description: "旅行環境相關。",
    gmOnly: true,
  },
  "core/gm/encounter": {
    name: "遭遇",
    description: "遭遇相關。",
    gmOnly: true,
  },
  "core/gm/walker": {
    name: "行屍",
    description: "行屍。",
    gmOnly: true,
  },
  "core/gm/npc_and_animal": {
    name: "NPC 與動物",
    description: "NPC 與動物相關。",
    gmOnly: true,
  },
  "campaign/gm/atlanta-default": {
    name: "Atlanta 戰役",
    description: "Atlanta 預設戰役。",
    gmOnly: true,
  },
} as const satisfies Categories;

export type TableElementId = typeof TableElements[keyof typeof TableElements]["id"];

export const RuleElementCategories = {
  "core/rule/pc": {
    name: "玩家角色",
    description: "創建玩家角色的規則。",
  },
  "core/rule/skills-and-talents": {
    name: "技能與天賦",
    description: "技能與天賦的規則。",
  },
  "core/rule/combat-and-healing": {
    name: "戰鬥與治療",
    description: "戰鬥與治療的規則。",
  },
  "core/rule/home-and-away": {
    name: "回家與離家",
    description: "關於避難港和旅行的規則。",
  },
} as const satisfies Categories;

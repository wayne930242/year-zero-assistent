import { Categorys } from "@/lib/types";

export const ElementCategories = {
  "core/pc": {
    name: "PC",
    description: "PC 相關。",
  },
  "core/item": {
    name: "物品",
    description: "物品相關，包括武器。",
  },
  "core/session": {
    name: "聚會",
    description: "聚會相關。",
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
  "core/walker": {
    name: "行屍",
    description: "行屍。",
  },
  "core/npc": {
    name: "NPC",
    description: "NPC 相關。",
    gmOnly: true,
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
    name: "旅行遭遇",
    description: "旅行遭遇相關。",
    gmOnly: true,
  },
  "core/gm/npc_and_animal": {
    name: "NPC 與動物",
    description: "NPC 與動物相關。",
    gmOnly: true,
  },
  "campaign/atlanta-default": {
    name: "Atlanta 戰役",
    description: "Atlanta 預設戰役。",
    gmOnly: true,
  },
} as const satisfies Categorys;

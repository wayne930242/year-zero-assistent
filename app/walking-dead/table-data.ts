import { GameElement } from "@/lib/types";

/*
Every export modules should be a named export, and types should be GameElement.
*/

export const overwhilmedTable = {
  id: "overwhelmed-table",
  originalName: "Overwhelmed Table",
  name: "擊垮表",
  description: "若你無法處理好你的恐懼，擲擊垮表",
  type: "random-table",
  category: "core/pc",
  headers: ["D6", "效果"],
  rows: [
    {
      rowId: 1,
      defaultRows: [["1-2", "你失去你的原動力"]],
      weight: 2,
    },
    {
      rowId: 2,
      defaultRows: [["3-5", "你變得耗竭"]],
      weight: 3,
    },
    {
      rowId: 3,
      defaultRows: [["6", "改變議題或得到新議題"]],
      weight: 1,
    },
  ],
} as const satisfies GameElement;

export const QuestionForXP = {
  id: "question-for-xp",
  originalName: "Question for XP",
  name: "經驗問題",
  description: "每有一個問題是「是」，獲得 XP。",
  category: "core/pc",
  type: "example",
  rows: [
    {
      rowId: "1",
      defaultRows: [["1", "你是否有參與這次聚會（你至少可以得到 1 點 XP）？"]],
    },
    {
      rowId: "2",
      defaultRows: [["2", "你是否達成重要的成果？是什麼？"]],
    },
    {
      rowId: "3",
      defaultRows: [["3", "你是否學到新東西？是什麼？"]],
    },
    {
      rowId: "4",
      defaultRows: [["4", "你是否有探索旅行地圖上的新分區？"]],
    },
    {
      rowId: "5",
      defaultRows: [["5", "你的趨力、議題或任何關係是否有被衝擊？"]],
    },
    {
      rowId: "6",
      defaultRows: [["6", "你是否有進行摯愛悼辭？（擲雙低看你獲得多少 XP）"]],
    },
  ],
} as const satisfies GameElement;

export const NpcSurviors = {
  id: "npc-surviors",
  originalName: "NPC Surviors",
  name: "NPC 倖存者",
  description: "擲 D6 決定遊戲開始時有哪群 NPC 倖存者跟你們在一起",
  type: "random-table",
  category: "core/haven",
  headers: ["D6", "NPC 倖存者", "背景", "專家", "受訓", "議題", "裝備"],
  rows: [
    {
      rowId: 1,
      weight: 1,
      defaultRows: [
        [
          "1",
          "Anthony Brooks",
          "教師",
          "-",
          "生存, 技術",
          "頑固，和 Abigail 睡過",
          "車, 左輪手槍, 標注一間安全屋的地圖",
        ],
        [
          "",
          "Melissa Anderson",
          "編劇",
          "-",
          "操縱",
          "容易受驚嚇，尋求他人的保護",
          "廚刀, 大手電筒, 電擊槍",
        ],
        [
          "",
          "Robert Young",
          "孩子",
          "-",
          "隱匿, 機動",
          "覺得他自己可以照顧好自己, 氣喘",
          "-",
        ],
        [
          "",
          "Bobby Miller",
          "拳擊手與賊",
          "近戰",
          "機動",
          "想要成為領導者，暗戀 Melissa",
          "槌子，Vespa 機車",
        ],
        [
          "",
          "Abigail Miller",
          "農夫",
          "-",
          "技術, 忍耐",
          "會以任何代價保護他的兒子 Bill，和 Anthony 睡過，治癒不良的斷腿",
          "霰彈槍, 乾草叉, 能栽種的種子",
        ],
      ],
    },
    {
      rowId: 2,
      weight: 1,
      defaultRows: [
        [
          "2",
          "George Lee",
          "水管工人",
          "-",
          "偵查, 技術",
          "單眼",
          "斧頭, 帳篷, 生存工具, 罐頭食物",
        ],
        [
          "",
          "Kayla Clark",
          "舞者",
          "-",
          "近戰, 機動",
          "容易被侮辱，想知道發生什麼事",
          "矛, 單車, 橄欖球帽",
        ],
        [
          "",
          "Doris Young",
          "老者",
          "技術",
          "領導",
          "病弱，固守舊道德與法律",
          "輪椅, 幾瓶琴酒",
        ],
        [
          "",
          "Elijah Flores",
          "政治家",
          "-",
          "操縱",
          "善於言詞，有遠見，不喜歡 Doris Young",
        ],
        [
          "",
          "Amber King",
          "士兵",
          "-",
          "遠戰, 近戰",
          "保護 Elijah Flores 並相信他說的每句話",
          "突擊步槍, 三枚手榴彈, 刺刀, 迷彩服, 生存裝備, 良好地圖, 指南針, 發條收音機",
        ],
      ],
    },
    {
      rowId: 3,
      weight: 1,
      defaultRows: [
        [
          "3",
          "Betty “Anvil” Hall",
          "青少年龐克搖滾手",
          "-",
          "生存, 隱匿",
          "不願談論發生在她身上的事情",
          "刀",
        ],
        [
          "",
          "Daniel Perez",
          "股票經紀人",
          "近戰",
          "領導, 操縱",
          "誇大自己的能力，想要讓團隊保持團結",
          "手槍",
        ],
        [
          "",
          "Samuel Carter",
          "建築工人",
          "-",
          "近戰",
          "照顧他的女兒 Denise，會跟隨最強者的領導",
          "鎚子, 步槍",
        ],
        [
          "",
          "Nicole Perez",
          "移民/家庭幫工",
          "-",
          "醫療, 偵查",
          "不信任任何人",
          "手槍, 基本醫療用品",
        ],
        [
          "",
          "Denise Carter",
          "孩子",
          "-",
          "隱匿",
          "受到創傷，情感敏感且具有同理心",
          "隱藏的左輪手槍",
        ],
      ],
    },
    {
      rowId: 4,
      weight: 1,
      defaultRows: [
        [
          "4",
          "Raymond Green",
          "醫生",
          "醫學",
          "操縱",
          "憂鬱，悼念他的家人",
          "高級醫療器材",
        ],
        [
          "",
          "Emma Wilson",
          "運動員",
          "-",
          "忍耐, 機動",
          "受傷，敬畏上帝",
          "弓箭, 帳篷",
        ],
        [
          "",
          "Ryan Smith",
          "退休者",
          "-",
          "技術, 生存",
          "沉默寡言，為最壞情況做計劃",
          "流動家園, 工具包, 步槍",
        ],
        [
          "",
          "Sharon Smith",
          "退休者",
          "-",
          "遠戰",
          "粗心，希望每個人都感覺良好，喧鬧",
          "左輪手槍, 3瓶烈酒",
        ],
        [
          "",
          "Anna Jones",
          "靈媒",
          "-",
          "醫學, 操縱",
          "相信她將拯救人類，解離",
          "短棍, 聖物, 補夢網, 香, 魔法蘑菇",
        ],
      ],
    },
    {
      rowId: 5,
      weight: 1,
      defaultRows: [
        [
          "5",
          "Nicolas White",
          "罪犯",
          "-",
          "近戰, 遠戰",
          "只尊重蠻力，喜歡戲弄和騷擾他人",
          "砍刀, 左輪手槍",
        ],
        [
          "",
          "Amy Hall",
          "士兵",
          "遠戰",
          "蠻力",
          "鐵腕統治，大男人主義",
          "突擊步槍, 爆炸膏, 手槍, 刀, 夜視鏡",
        ],
        [
          "",
          "Ronald Green",
          "工程師",
          "-",
          "技術, 偵查",
          "不想給人帶來麻煩，依賴他人保護，一名詩人",
          "工具包, 手動電台",
        ],
        [
          "",
          "Ki Wilson",
          "護士",
          "-",
          "醫學, 操縱",
          "不擇手段",
          "基本醫療用品",
        ],
        [
          "",
          "Demián Vergara",
          "流浪者",
          "-",
          "生存",
          "尋找還能信仰的東西，無法容忍責難",
          "左輪手槍, 螺絲刀",
        ],
      ],
    },
    {
      rowId: 6,
      weight: 1,
      defaultRows: [
        [
          "6",
          "Gael Barraza",
          "心理治療師",
          "-",
          "領導, 操縱",
          "願意做出艱難決定，感情上疲憊",
          "步槍, 一對銳利的剪刀, 數包香煙",
        ],
        [
          "",
          "Angela Flores",
          "醫學生",
          "-",
          "醫學, 技術, 操縱",
          "不分享痛苦和擔憂，照顧她的嬰兒",
          "基本醫療用品",
        ],
        [
          "",
          "Jacob Flores",
          "嬰兒",
          "-",
          "-",
          "意外的嬰兒, 害怕、餓了、累了或生病時會哭鬧",
          "-",
        ],
        [
          "",
          "Jason Lee",
          "農夫",
          "-",
          "生存, 忍耐",
          "認為自己對他人負有責任，想讓所有人幸福",
          "狙擊步槍, 大刀, 吉他, 隱藏的棉花糖",
        ],
        [
          "",
          "Barbara Ferrara",
          "逃家少女",
          "-",
          "近戰, 隱匿",
          "暗戀 Angela Flores, 想保護其他人免受世界殘酷現實的傷害, 喜歡冒險",
          "大斧頭, 高跟鞋刀, 左輪手槍, 摩托車",
        ],
      ],
    },
  ],
} as const satisfies GameElement;

export const MessingUpInCombat = {
  id: "messing-up-in-combat",
  originalName: "Messing up in Combat",
  name: "戰鬥失誤",
  category: "core/combat",
  description: "在壓力骰擲出 1 時，若在戰鬥中，擲一次 D6 決定失誤效果。",
  type: "random-table",
  headers: ["D6", "效果"],
  rows: [
    {
      rowId: 1,
      defaultRows: [["1", "彈藥用盡 / 武器損壞。"]],
      weight: 1,
    },
    {
      rowId: 2,
      defaultRows: [["2", "傷到自己：意外墜落、被劃傷、被擊中（1 點傷害）。"]],
      weight: 1,
    },
    {
      rowId: 3,
      defaultRows: [["3", "友軍開火。武器擊中了隊友，擲隨機骰來決定是誰。"]],
      weight: 1,
    },
    {
      rowId: 4,
      defaultRows: [["4", "吸引行屍（威脅提升 1 級，或是吸引一次行屍攻擊）。"]],
      weight: 1,
    },
    {
      rowId: 5,
      defaultRows: [["5", "整體的狀況變得更糟（房屋倒塌、摔出窗戶、滑倒）。"]],
      weight: 1,
    },
    {
      rowId: 6,
      defaultRows: [["6", "站位不佳，對手在下一次擲骰中獲得額外的成功。"]],
      weight: 1,
    },
  ],
} as const satisfies GameElement;

export const BrawlPhases = {
  id: "brawl-phases",
  originalName: "Brawl Phases",
  name: "戰鬥階段",
  description: "戰鬥按照下述回合進行。",
  category: "core/combat",
  type: "example",
  rows: [
    {
      rowId: "1",
      defaultRows: [["1", "尋找掩護"]],
    },
    {
      rowId: "2",
      defaultRows: [["2", "遠距攻擊"]],
    },
    {
      rowId: "3",
      defaultRows: [["3", "近戰攻擊"]],
    },
    {
      rowId: "4",
      defaultRows: [["4", "移動"]],
    },
    {
      rowId: "5",
      defaultRows: [["5", "急救"]],
    },
    {
      rowId: "6",
      defaultRows: [["6", "其他"]],
    },
  ],
} as const satisfies GameElement;

export const ArmorTypes = {
  id: "armor-types",
  originalName: "Types of Armor",
  name: "護甲類型",
  description: "根據護甲，可在此查詢護甲等級和懲罰。",
  type: "example",
  category: "core/health_and_armor",
  headers: ["護甲類型", "護甲等級", "懲罰"],
  rows: [
    {
      rowId: "1",
      defaultRows: [["軟質背心", "4", "–1"]],
    },
    {
      rowId: "2",
      defaultRows: [["身體護甲", "6", "–2"]],
    },
    {
      rowId: "3",
      defaultRows: [["金屬板甲", "8", "–3"]],
    },
  ],
} as const satisfies GameElement;

export const CriticalInjuries = {
  id: "critical-injuries",
  originalName: "Critical Injuries",
  name: "嚴重傷害",
  description:
    "在戰鬥和治療過程中可能遭受的嚴重傷害。B 表示只需要使用基本醫療器材，A 表示需要使用高級醫療器材。",
  type: "random-table",
  category: "core/health_and_armor",
  headers: ["D66", "嚴重傷害", "致命", "時限", "懲罰", "恢復時間"],
  rows: [
    {
      rowId: "11",
      defaultRows: [["11", "喘不過氣", "否", "-", "-1", "數小時"]],
    },
    {
      rowId: "12",
      defaultRows: [["12", "手指骨折", "否", "-", "-1", "數小時"]],
    },
    {
      rowId: "13",
      defaultRows: [["13", "肌腱撕裂", "否", "-", "-1", "數小時"]],
    },
    {
      rowId: "14",
      defaultRows: [["14", "皮膚病變", "否", "-", "-1", "數小時"]],
    },
    {
      rowId: "15",
      defaultRows: [["15", "肩膀割傷", "否", "-", "-1", "數小時"]],
    },
    {
      rowId: "16",
      defaultRows: [["16", "肩部割傷", "否", "-", "-1", "數小時"]],
    },
    {
      rowId: "21",
      defaultRows: [["21", "膝蓋損傷", "否", "-", "-1", "數天"]],
    },
    {
      rowId: "22",
      defaultRows: [["22", "敲掉牙齒", "否", "-", "-1", "數天"]],
    },
    {
      rowId: "23",
      defaultRows: [["23", "耳朵分離", "否", "-", "-1", "數天"]],
    },
    {
      rowId: "24",
      defaultRows: [["24", "鼻梁骨折", "否", "-", "-1", "數天"]],
    },
    {
      rowId: "25",
      defaultRows: [["25", "肋骨斷裂", "否", "-", "-1", "數天"]],
    },
    {
      rowId: "26",
      defaultRows: [["26", "腳部壓碎", "否", "-", "-1", "數天"]],
    },
    {
      rowId: "31",
      defaultRows: [["31", "喉嚨受傷", "是", "B 天", "-2", "數天"]],
    },
    {
      rowId: "32",
      defaultRows: [["32", "腿部割開", "是", "B 天", "-2", "數天"]],
    },
    {
      rowId: "33",
      defaultRows: [["33", "深層肌肉傷害", "是", "B 天", "-2", "數天"]],
    },
    {
      rowId: "34",
      defaultRows: [["34", "骨碎並鬆動", "是", "B 天", "-2", "數天"]],
    },
    {
      rowId: "35",
      defaultRows: [["35", "腦震盪", "是", "B 天", "-2", "數周"]],
    },
    {
      rowId: "36",
      defaultRows: [["36", "肺部穿孔", "是", "B 天", "-2", "數周"]],
    },
    {
      rowId: "41",
      defaultRows: [["41", "內出血", "是", "B 小時", "-2", "數天"]],
    },
    {
      rowId: "42",
      defaultRows: [["42", "嚴重內出血", "是", "B 小時", "-2", "數天"]],
    },
    {
      rowId: "43",
      defaultRows: [["43", "髒傷口", "是", "B 小時", "-2", "數天"]],
    },
    {
      rowId: "44",
      defaultRows: [["44", "腿部壓碎", "是", "B 小時", "-2", "數天"]],
    },
    {
      rowId: "45",
      defaultRows: [["45", "腸道壓碎", "是", "B 小時", "-3", "數周"]],
    },
    {
      rowId: "46",
      defaultRows: [["46", "嚴重出血", "是", "A 小時", "-3", "數周"]],
    },
    {
      rowId: "51",
      defaultRows: [["51", "眼睛壞死", "是", "A 天", "-3", "數周"]],
    },
    {
      rowId: "52",
      defaultRows: [["52", "腸破裂", "是", "A 天", "-3", "數周"]],
    },
    {
      rowId: "53",
      defaultRows: [["53", "腎臟破裂", "是", "A 天", "-3", "數周"]],
    },
    {
      rowId: "54",
      defaultRows: [["54", "額頭凹陷", "是", "A 天", "-3", "數周"]],
    },
    {
      rowId: "55",
      defaultRows: [["55", "脊髓損傷", "是", "A 小時", "-4", "數月"]],
    },
    {
      rowId: "56",
      defaultRows: [["56", "昏迷", "是", "A 分鐘", "無法行動", "數月"]],
    },
    {
      rowId: "61",
      defaultRows: [["61", "休克", "是", "A 天", "無法行動", "數月"]],
    },
    {
      rowId: "62",
      defaultRows: [["62", "主動脈破裂", "是", "A 分鐘", "-5", "數周"]],
    },
    {
      rowId: "63",
      defaultRows: [["63", "身體壓碎", "是", "-", "你死了", "-"]],
    },
    {
      rowId: "64",
      defaultRows: [["64", "開膛", "是", "-", "你死了", "-"]],
    },
    {
      rowId: "65",
      defaultRows: [["65", "頭部穿刺", "是", "-", "你死了", "-"]],
    },
    {
      rowId: "66",
      defaultRows: [["66", "心臟穿刺", "是", "-", "你死了", "-"]],
    },
  ],
} as const satisfies GameElement;

export const StabilizingIssuesTable = {
  id: "stabilizing-issues-table",
  originalName: "Stabilizing Issues Table",
  name: "穩定傷勢失誤表",
  description: "在擲醫藥以穩定傷勢時失誤的後果",
  type: "random-table",
  category: "core/health_and_armor",
  headers: ["D6", "醫藥擲骰成功", "醫藥擲骰失敗"],
  rows: [
    {
      rowId: 1,
      weight: 4,
      defaultRows: [["1-4", "醫藥器材耗盡/損壞", "醫藥器材耗盡/損壞"]],
    },
    {
      rowId: 2,
      weight: 1,
      defaultRows: [["5", "恢復時間加倍", "時限減半"]],
    },
    {
      rowId: 3,
      weight: 1,
      defaultRows: [["6", "下次擲骰懲罰 -1", "（某個技能）永久懲罰 -1"]],
    },
  ],
} as const satisfies GameElement;

export const ExplosiveWeaponTable = {
  id: "explosive-weapon-table",
  originalName: "Explosive Weapon Table",
  name: "爆炸武器表",
  description: "不同爆炸武器的爆炸力（BP）對應範例",
  type: "example",
  category: "core/hazard",
  headers: ["爆炸與火焰源", "爆炸力（BP）"],
  rows: [
    {
      rowId: "molotov-cocktail",
      defaultRows: [["汽油彈", "6"]],
    },
    {
      rowId: "hand-grenade",
      defaultRows: [["手榴彈", "8"]],
    },
    {
      rowId: "rocket-launcher",
      defaultRows: [["火箭發射器", "10"]],
    },
    {
      rowId: "mortar",
      defaultRows: [["迫擊砲", "12"]],
    },
    {
      rowId: "howitzer",
      defaultRows: [["榴彈砲", "14"]],
    },
  ],
} as const satisfies GameElement;

export const FireTable = {
  id: "fire-table",
  originalName: "Fire Table",
  name: "火焰表",
  description: "火源與強度的對應範例",
  type: "example",
  category: "core/hazard",
  headers: ["火焰源", "強度"],
  rows: [
    {
      rowId: "torch",
      defaultRows: [["火把", "4"]],
    },
    {
      rowId: "burning-forniture",
      defaultRows: [["燃燒家具", "6"]],
    },
    {
      rowId: "burning-room",
      defaultRows: [["燃燒房間", "8"]],
    },
  ],
} as const satisfies GameElement;

export const DeseaseTable = {
  id: "desease-table",
  originalName: "Desease Table",
  name: "疾病表",
  description: "疾病與嚴重性的對應範例",
  type: "example",
  category: "core/hazard",
  headers: ["疾病", "嚴重性"],
  rows: [
    {
      rowId: "flu",
      defaultRows: [["流感", "4"]],
    },
    {
      rowId: "Pneumonia",
      defaultRows: [["肺炎", "6"]],
    },
    {
      rowId: "sars",
      defaultRows: [["SARS", "8"]],
    },
    {
      rowId: "mrsa",
      defaultRows: [["MRSA", "10"]],
    },
  ],
} as const satisfies GameElement;

export const TrapTable = {
  id: "trap-table",
  originalName: "Trap Table",
  name: "陷阱表",
  description: "陷阱與效果的對應範例",
  type: "example",
  category: "core/hazard",
  headers: ["陷阱", "效果"],
  rows: [
    {
      rowId: "Shotgun-behind-door",
      defaultRows: [["門後的霰彈槍", "攻擊 4，傷害 2"]],
    },
    {
      rowId: "pit-trap",
      defaultRows: [["陷阱坑", "陷在坑裡，掉落傷害 2（4 公尺）"]],
    },
    {
      rowId: "Poisoned arrow",
      defaultRows: [["毒箭", "攻擊 2，毒性 6 的毒"]],
    },
    {
      rowId: "Tripwire-with-grenade",
      defaultRows: [["繩索與手榴彈", "爆炸力 8"]],
    },
    {
      rowId: "walker-trap",
      defaultRows: [["行屍陷阱", "集群大小 2，威脅等級 4"]],
    },
  ],
} as const satisfies GameElement;

export const QualityOfItemsTable = {
  id: "quality-of-items-table",
  originalName: "Item Quality",
  name: "物品品質",
  description: "物品品質",
  type: "random-table",
  category: "core/item",
  headers: ["D6", "品質"],
  rows: [
    {
      rowId: 1,
      defaultRows: [["1", "破損/無用"]],
    },
    {
      rowId: 2,
      defaultRows: [["2-4", "不良"]],
      weight: 3,
    },
    {
      rowId: 3,
      defaultRows: [["5", "還行"]],
    },
    {
      rowId: 6,
      defaultRows: [
        ["6", "還行，並再擲一次，若依然是 6，則該物品的品質極佳。"],
      ],
    },
  ],
} as const satisfies GameElement;

export const GerneralGearTable = {
  id: "general-gear-table",
  originalName: "General Gear",
  name: "一般裝備表",
  description: "一般裝備的數值對應",
  type: "example",
  category: "core/item",
  headers: ["道具", "佔位", "加成"],
  rows: [
    {
      rowId: "advanced-medical-gear",
      defaultRows: [["高級醫療裝備", "看情況", "醫藥 +2"]],
    },
    {
      rowId: "basic-medical-gear",
      defaultRows: [["基本醫療裝備", "看情況", "醫藥 +1"]],
    },
    {
      rowId: "binoculars",
      defaultRows: [["望遠鏡", "1/2", "偵查 +2"]],
    },
    {
      rowId: "book-of-maps",
      defaultRows: [["地圖書", "1/2", "偵查 +1"]],
    },
    {
      rowId: "bottle-of-liquor",
      defaultRows: [["一瓶酒", "1/2", "操縱 +2"]],
    },
    {
      rowId: "camera",
      defaultRows: [["相機", "1/2", "-"]],
    },
    {
      rowId: "compass",
      defaultRows: [["羅盤", "1/2", "生存 +2"]],
    },
    {
      rowId: "crowbar",
      defaultRows: [["撬棍", "1", "蠻力 +2"]],
    },
    {
      rowId: "dog",
      defaultRows: [["狗", "-", "近戰 +1"]],
    },
    {
      rowId: "field-kitchen",
      defaultRows: [["野戰廚房", "1", "-"]],
    },
    {
      rowId: "horse",
      defaultRows: [["馬", "-", "-"]],
    },
    {
      rowId: "guitar",
      defaultRows: [["吉他", "1", "領導 +1"]],
    },
    {
      rowId: "lockpicks",
      defaultRows: [["開鎖工具", "-", "隱匿 +2"]],
    },
    {
      rowId: "pack-of-gum/cigarettes",
      defaultRows: [["一包口香糖/香菸", "-", "操縱 +1"]],
    },
    {
      rowId: "ration-of-food",
      defaultRows: [["一份食物", "1/2", "-"]],
    },
    {
      rowId: "rope(10meters)",
      defaultRows: [["繩索（10公尺）", "1", "機動 +2"]],
    },
    {
      rowId: "sleeping-bag",
      defaultRows: [["睡袋", "1", "生存 +1"]],
    },
    {
      rowId: "tent",
      defaultRows: [["帳篷", "2", "生存 +2"]],
    },
    {
      rowId: "toolbox",
      defaultRows: [["工具箱", "1", "技術"]],
    },
    {
      rowId: "walkie-talkie",
      defaultRows: [["對講機", "1/2", "領導 +1"]],
    },
  ],
} as const satisfies GameElement;

export const CloseCombatWeaponTable = {
  id: "close-combat-weapon-table",
  originalName: "Close Combat Weapon",
  name: "近戰武器",
  description: "近戰武器的數值對應",
  type: "example",
  category: "core/item",
  headers: ["武器", "傷害", "加成", "佔位"],
  rows: [
    {
      rowId: "foot-or-fist",
      defaultRows: [["腳/拳", "1", "0", "-"]],
    },
    {
      rowId: "improvised-weapon",
      defaultRows: [["即興武器", "1", "+1", "1/2"]],
    },
    {
      rowId: "knuckle-duster",
      defaultRows: [["手指虎", "1", "+1", "1/2"]],
    },
    {
      rowId: "rifle-butt",
      defaultRows: [["槍托撞擊", "1", "+1", "1"]],
    },
    {
      rowId: "knife",
      defaultRows: [["小刀", "1", "+2", "1/2"]],
    },
    {
      rowId: "small-axe",
      defaultRows: [["小斧", "1", "+2", "1/2"]],
    },
    {
      rowId: "quarterstaff",
      defaultRows: [["鐵頭木棒", "1", "+3", "1"]],
    },
    {
      rowId: "crowbar",
      defaultRows: [["撬棍", "2", "+1", "1"]],
    },
    {
      rowId: "baseball-bat",
      defaultRows: [["球棒", "2", "+1", "1"]],
    },
    {
      rowId: "spear",
      defaultRows: [["矛", "2", "+2", "1"]],
    },
    {
      rowId: "big-axe",
      defaultRows: [["大斧", "2", "+2", "1"]],
    },
    {
      rowId: "siedgehammer",
      defaultRows: [["長柄大錘", "3", "0", "2"]],
    },
  ],
} as const satisfies GameElement;

export const RangedWeaponTable = {
  id: "ranged-weapon-table",
  originalName: "Ranged Weapon",
  name: "遠程武器",
  description: "遠程武器的數值對應",
  type: "example",
  category: "core/item",
  headers: ["武器", "傷害", "加成", "距離", "佔位"],
  rows: [
    {
      rowId: "throwing-knife",
      defaultRows: [["投擲刀", "1", "+1", "短", "1/2"]],
    },
    {
      rowId: "bow",
      defaultRows: [["弓", "1", "+2", "長", "1"]],
    },
    {
      rowId: "crossbow",
      defaultRows: [["弩", "2", "+2", "長", "1"]],
    },
    {
      rowId: "pistol-or-revolver",
      defaultRows: [["手槍/左輪", "2", "+2", "短", "1"]],
    },
    {
      rowId: "pipe-gun",
      defaultRows: [["管製霰彈槍", "2", "+1", "短", "1"]],
    },
    {
      rowId: "shotgun",
      defaultRows: [["霰彈槍", "2", "+3", "短", "1"]],
    },
    {
      rowId: "rifle",
      defaultRows: [["步槍", "2", "+2", "長", "1"]],
    },
    {
      rowId: "sniper-rifle",
      defaultRows: [["狙擊步槍", "2", "+2", "極限", "1"]],
    },
    {
      rowId: "submachine-gun",
      defaultRows: [["衝鋒槍", "2", "+3", "短", "1"]],
    },
    {
      rowId: "assault-rifle",
      defaultRows: [["突擊步槍", "2", "+3", "長", "1"]],
    },
    {
      rowId: "heavy-machine-gun",
      defaultRows: [["重機槍", "3", "+3", "極限", "3"]],
    },
    {
      rowId: "molotov-cocktail",
      defaultRows: [["汽油彈", "BP 6", "0", "短", "1/2"]],
    },
    {
      rowId: "hand-grenade",
      defaultRows: [["手榴彈", "BP 8", "+1", "短", "1/2"]],
    },
    {
      rowId: "rocket-launcher",
      defaultRows: [["火箭發射器", "BP 10", "+2", "長", "2"]],
    },
    {
      rowId: "tank-cannon",
      defaultRows: [["坦克炮", "BP 12", "+3", "極限", "X"]],
    },
  ],
} as const satisfies GameElement;

export const VechicleConditionTable = {
  id: "vehicle-condition-table",
  originalName: "Vehicle Condition",
  name: "載具狀況",
  description: "載具狀況隨機表",
  type: "random-table",
  category: "core/vehicle",
  headers: ["D6", "狀況", "燃料"],
  rows: [
    {
      rowId: 1,
      defaultRows: [["1", "損壞並無法修復", "空"]],
    },
    {
      rowId: 2,
      defaultRows: [["2", "損壞並需要大規模維修", "空"]],
    },
    {
      rowId: 3,
      defaultRows: [["3", "損壞並需要維修", "空"]],
    },
    {
      rowId: 4,
      defaultRows: [
        ["4", "功能正常但若未維修，會在行駛 D6 區域後損壞", "冒煙"],
      ],
    },
    {
      rowId: 5,
      defaultRows: [["5", "功能正常但若未維修，會在行駛 D6 天後損壞", "半滿"]],
    },
    {
      rowId: 6,
      defaultRows: [["6", "功能正常", "滿"]],
    },
  ],
} as const satisfies GameElement;

export const VehicleTypeTable = {
  id: "vehicle-type-table",
  originalName: "Vehicle Type",
  name: "載具類型",
  category: "core/vehicle",
  description: "載具類型隨機表",
  type: "example",
  headers: ["載具", "操控性", "傷害", "殼體", "護甲", "問題"],
  rows: [
    {
      rowId: "car",
      defaultRows: [["車", "+2", "2", "4", "4", "汽油可能用完"]],
    },
    {
      rowId: "bicycle",
      defaultRows: [["自行車", "+2", "0", "2", "0", "容易爆胎"]],
    },
    {
      rowId: "horse",
      defaultRows: [["馬", "+2", "1", "4", "0", "需要餵食，容易受驚"]],
    },
    {
      rowId: "motorcycle",
      defaultRows: [["機車", "+3", "2", "3", "2", "汽油可能用完"]],
    },
    {
      rowId: "battle-tank",
      defaultRows: [
        ["戰車", "+1", "4（不含武器）", "10", "8", "汽油可能用完，吵鬧"],
      ],
    },
  ],
} as const satisfies GameElement;

export const CrashObjectsTable = {
  id: "crash-objects-table",
  originalName: "Crash Objects",
  name: "撞擊物",
  description: "撞擊物隨機表",
  type: "random-table",
  category: "core/vehicle",
  headers: ["D6", "撞上", "撞擊骰", "耐久度"],
  rows: [
    {
      rowId: "soft-material(haystack)",
      defaultRows: [["1", "軟物質（乾草堆）", "2", "1"]],
    },
    {
      rowId: "fragile-construction",
      defaultRows: [["2", "脆弱構造物", "3", "2"]],
    },
    {
      rowId: "another-car",
      defaultRows: [["3", "另一輛車", "4", "車輛殼體"]],
    },
    {
      rowId: "wooden-house",
      defaultRows: [["4", "木屋", "6", "3"]],
    },
    {
      rowId: "brick-wall",
      defaultRows: [["5", "磚牆", "8", "4"]],
    },
    {
      rowId: "enhanced-concrete-wall",
      defaultRows: [["6", "強化水泥牆", "10", "5"]],
    },
  ],
} as const satisfies GameElement;

export const criticalVehicleDamageTable = {
  id: "critical-vehicle-damage-table",
  originalName: "Critical Vehicle Damage",
  name: "嚴重載具傷害",
  description: "嚴重載具傷害隨機表",
  type: "random-table",
  category: "core/vehicle",
  headers: ["D6", "結果"],
  rows: [
    {
      rowId: 1,
      defaultRows: [["1", "在載具中的隨機一人受傷，並受到 3 點傷害"]],
    },
    {
      rowId: 2,
      defaultRows: [["2", "駕駛受傷，並受到 2 點傷害"]],
    },
    {
      rowId: 3,
      defaultRows: [["3", "油箱損壞，燃料開始洩漏"]],
    },
    {
      rowId: 4,
      defaultRows: [["4", "擋風玻璃和幾扇窗戶被破壞"]],
    },
    {
      rowId: 5,
      defaultRows: [
        [
          "5",
          "駕駛失去控制，車輛撞上了某物。以「重擊物」表擲骰，但碰撞造成是對駕駛的傷害而非車輛。",
        ],
      ],
    },
    {
      rowId: 6,
      defaultRows: [
        [
          "6",
          "車輛開始燃燒。車內的每個人都受到強度 6 的火焰傷害。擲骰子確定車還有幾分鐘爆炸（爆炸力 8）。",
        ],
      ],
    },
  ],
} as const satisfies GameElement;

export const SwarmSizeTable = {
  id: "swarm-size-table",
  originalName: "Swarm Size",
  name: "群體大小",
  description: "群體大小對照表",
  type: "random-table",
  category: "core/gm/walker",
  headers: ["行屍數量", "群體大小"],
  rows: [
    {
      rowId: 1,
      defaultRows: [["5-10", "1"]],
    },
    {
      rowId: 2,
      defaultRows: [["11-20", "2"]],
    },
    {
      rowId: 3,
      defaultRows: [["21-50", "3"]],
    },
    {
      rowId: 4,
      defaultRows: [["51-100", "4"]],
    },
    {
      rowId: 5,
      defaultRows: [["100+", "5"]],
    },
    {
      rowId: 6,
      defaultRows: [["1000+", "6"]],
    },
  ],
} as const satisfies GameElement;

export const ThreatLevelsTable = {
  id: "threat-levels-table",
  originalName: "The Threat Levels",
  name: "威脅等級",
  description: "不同情境下的威脅等級對照表",
  type: "random-table",
  category: "core/gm/walker",
  headers: ["威脅等級", "情境"],
  rows: [
    {
      rowId: "0",
      defaultRows: [["0", "你處於一個已經清理過的安全區域。暫時安全。"]],
    },
    {
      rowId: "1",
      defaultRows: [
        [
          "1",
          "周圍有行屍，但它們沒有注意到你。如果你在技能測試中失敗，你可能會遭受單一行屍的攻擊。",
        ],
      ],
    },
    {
      rowId: "2",
      defaultRows: [
        [
          "2",
          "附近有行屍，但它們還沒有察覺到你。遊戲主持可以畫出該區域的地圖，並指出行屍的確切位置。",
        ],
      ],
    },
    {
      rowId: "3",
      defaultRows: [
        [
          "3",
          "行屍已經意識到你。所有附近的行屍將向你蹣跚而來，你必須戰鬥才能活著離開。所有在場的玩家角色承受一點壓力。",
        ],
      ],
    },
    {
      rowId: "4",
      defaultRows: [["4", "行屍正在向你靠近。"]],
    },
    {
      rowId: "5",
      defaultRows: [["5", "它們在手臂的距離之內。"]],
    },
    {
      rowId: "6",
      defaultRows: [["6", "殭屍正面對著你，包圍了你。"]],
    },
  ],
} as const satisfies GameElement;

export const WalkerAttackTable = {
  id: "walker-attack-table",
  originalName: "Walker Attack",
  name: "行屍攻擊",
  description: "遭遇行屍攻擊時可能發生的效果。",
  type: "random-table",
  category: "core/gm/walker",
  headers: ["D66", "效果"],
  rows: [
    {
      rowId: "11",
      defaultRows: [["11", "它們追逐你，但你逃脱了。得到一點壓力點。"]],
    },
    {
      rowId: "12",
      defaultRows: [
        [
          "12",
          "你設法抵擋住行屍，但它在你臉上流了滿口的口水。你開始嚴重嘔吐。得到一點壓力點。",
        ],
      ],
    },
    {
      rowId: "13",
      defaultRows: [
        [
          "13",
          "它們把你逼入絕境，你知道這可能是末路。但不知怎的你存活了下來。描述發生了什麼。得到一點壓力點。",
        ],
      ],
    },
    {
      rowId: "14",
      defaultRows: [
        ["14", "你殺死了它，但你損壞或丟失了你的武器或其他重要物品。"],
      ],
    },
    {
      rowId: "15",
      defaultRows: [["15", "你壓制住它，用石頭砸碎了它的頭。得到一點壓力點。"]],
    },
    {
      rowId: "16",
      defaultRows: [
        [
          "16",
          "它在試圖把你拖得足夠近來咬你時，扯掉了你的頭髮。你不停地用拳頭打它的臉，直到它死去。受到一點傷害。",
        ],
      ],
    },
    {
      rowId: "21",
      defaultRows: [
        ["21", "它用頭撞你，把你扔到地上。但隨後你殺了它。受到一點傷害。"],
      ],
    },
    {
      rowId: "22",
      defaultRows: [
        [
          "22",
          "它的死體重量壓在你身上，當你殺死它時，你的後腦勺撞到了地上。受到一點傷害。",
        ],
      ],
    },
    {
      rowId: "23",
      defaultRows: [
        [
          "23",
          "在與它戰鬥時，你不小心在某物銳利的東西上割傷了自己。受到一點傷害，如果你沒有通過醫學擲骰來停止失血，再受到一點傷害。",
        ],
      ],
    },
    {
      rowId: "24",
      defaultRows: [
        [
          "24",
          "你跳起來試圖逃離它們。進行一次機動擲骰。如果你失敗，你跌倒並受到一點傷害。",
        ],
      ],
    },
    {
      rowId: "25",
      defaultRows: [
        [
          "25",
          "它們壓在你身上，但你設法殺死了它們且避免被咬。你必須進行一次蠻力擲骰來推開它們。如果你失敗，你被屍體壓制並在D6分鐘內失去意識。",
        ],
      ],
    },
    {
      rowId: "26",
      defaultRows: [
        [
          "26",
          "它追逐你。你逃脫了，但你必須進行一次機動擲骰以免絆倒跌倒。如果你失敗，你的頭撞在某個銳利的物體上，受到兩點傷害。",
        ],
      ],
    },
    {
      rowId: "31",
      defaultRows: [
        [
          "31",
          "它抓住你的頭試圖咬你的臉。進行一次近戰擲骰來阻止它不斷用頭撞你試圖咬你。如果你失敗，受到兩點傷害。",
        ],
      ],
    },
    {
      rowId: "32",
      defaultRows: [
        [
          "32",
          "它試圖咬你的衣服、頭髮甚至是你的鞋子。但你設法用肘部擊中它的臉，多次，直到頭骨破裂。你的手臂狀況很不好。受到兩點傷害。",
        ],
      ],
    },
    {
      rowId: "33",
      defaultRows: [
        ["33", "不知怎的你殺死了它，並且同時打到了自己。受到自己武器的傷害。"],
      ],
    },
    {
      rowId: "34",
      defaultRows: [
        [
          "34",
          "你在地上與它搏鬥，似乎過了一輩子，但最終你殺死了它。受到一點傷害和一點壓力。",
        ],
      ],
    },
    {
      rowId: "35",
      defaultRows: [["35", "它撕掉了你的一隻耳朵，你失血嚴重。受到兩點傷害。"]],
    },
    {
      rowId: "36",
      defaultRows: [
        [
          "36",
          "你被兩個行屍夾在中間，它們從相反方向拉扯你。你感到手臂和腿部的皮膚、肌肉和韌帶被拉伸並斷裂。得到兩點傷害並進行一次忍耐擲骰，以免昏迷D6分鐘。",
        ],
      ],
    },
    {
      rowId: "41",
      defaultRows: [
        [
          "41",
          "它反覆用一隻手中卡著的生鏽、鋒利的物體割傷和刺傷你。受到兩點傷害。",
        ],
      ],
    },
    {
      rowId: "42",
      defaultRows: [
        [
          "42",
          "你失去平衡，被它逼退。你撞到尖銳的物體上；跌倒並撞到頭；絆倒，嚴重扭傷腳踝和手腕。受到兩點傷害。",
        ],
      ],
    },
    {
      rowId: "43",
      defaultRows: [
        [
          "43",
          "它壓在你身上，你的頭被反覆撞擊地面直到你將其殺死。受到三點傷害。",
        ],
      ],
    },
    {
      rowId: "44",
      defaultRows: [["44", "在你與它搏鬥時，它折斷了你的手臂。受到三點傷害。"]],
    },
    {
      rowId: "45",
      defaultRows: [
        [
          "45",
          "它用牙齒撕下你的左膝蓋並開始咀嚼。你需要在D6×10分鐘內截肢，否則你會死亡。受到三點傷害。",
        ],
      ],
    },
    {
      rowId: "46",
      defaultRows: [
        [
          "46",
          "你保護你的臉，但它在你的兩個耳垂上咬了一口。你唯一的生存機會是在D6小時內切掉耳垂。受到兩點傷害。",
        ],
      ],
    },
    {
      rowId: "51",
      defaultRows: [
        [
          "51",
          "只是一個小擦傷，但幾天內感染會生根，你會死去。你唯一的機會是在D6小時內割掉受感染的肉。受到兩點傷害。",
        ],
      ],
    },
    {
      rowId: "52",
      defaultRows: [
        [
          "52",
          "你的腳趾被咬。你唯一的生存機會是在D6小時內截掉腳。受到兩點傷害。",
        ],
      ],
    },
    {
      rowId: "53",
      defaultRows: [
        [
          "53",
          "你的一個手指被咬斷，咬傷處的感染蔓延到你的身體。你唯一的生存機會是在D6分鐘內截掉手。受到兩點傷害。",
        ],
      ],
    },
    {
      rowId: "54",
      defaultRows: [
        [
          "54",
          "你的肚子被咬。傷口不是很深，但你很快會發燒，在D6天內你會死亡。",
        ],
      ],
    },
    {
      rowId: "55",
      defaultRows: [["55", "你的喉嚨被咬。到處都是血。你會死去。"]],
    },
    {
      rowId: "56",
      defaultRows: [["56", "你的背部被咬了好幾次。在D6小時內你就會死亡。"]],
    },
    {
      rowId: "61",
      defaultRows: [
        [
          "61",
          "你設法擊退它們，但不知怎麼你的頭被自己的武器或友方火力擊中。你在詛咒自己的壞運氣中死去。",
        ],
      ],
    },
    {
      rowId: "62",
      defaultRows: [
        [
          "62",
          "當你與一個行屍搏鬥時，你沒有注意到另一個在地上的行屍伸手抓你的腿。它咬了你的小腿一大口。當兩個行屍壓倒你時，你尖叫著倒下。在你倒地前你就已經失去了致命量的血。",
        ],
      ],
    },
    {
      rowId: "63",
      defaultRows: [
        [
          "63",
          "你擊敗了它，一切看似都好。但你沒有注意到其中一個仍然向你靠近。它咬入你的背部，你在尖叫聲中死去。",
        ],
      ],
    },
    {
      rowId: "64",
      defaultRows: [
        [
          "64",
          "它們包圍你並將你推倒在地。幾秒鐘你設法反抗，但隨後其中一個把臉壓在你的肚子上，開始用牙齒撕裂你的腸子。你在尖叫中死去。",
        ],
      ],
    },
    {
      rowId: "65",
      defaultRows: [
        [
          "65",
          "一個行屍咬了你的臉，並用牙齒撕開了你的眼睛和鼻子。你試圖反抗，但很快就因失血過多而死亡。",
        ],
      ],
    },
    {
      rowId: "66",
      defaultRows: [
        ["66", "你被行屍們壓倒，它們將你的肉從骨頭上撕扯下來。你死了。"],
      ],
    },
  ],
} as const satisfies GameElement;

export const SwarmAttackTable = {
  id: "swarm-attack-table",
  originalName: "Swarm Attack",
  name: "群體攻擊",
  description: "群體攻擊對照表",
  type: "example",
  category: "core/gm/walker",
  headers: ["威脅等級", "技能", "攻擊"],
  rows: [
    {
      rowId: "1",
      defaultRows: [["3", "忍受, 蠻力, 機動, 遠戰, 隱匿", "單一攻擊, 阻隔"]],
    },
    {
      rowId: "2",
      defaultRows: [["4", "蠻力, 機動, 遠戰", "單一攻擊, 阻隔"]],
    },
    {
      rowId: "3",
      defaultRows: [["5", "蠻力, 近戰, 遠戰", "單一攻擊, 阻隔"]],
    },
    {
      rowId: "4",
      defaultRows: [["6", "蠻力, 近戰", "大量攻擊"]],
    },
  ],
} as const satisfies GameElement;

export const HavenCapacityTable = {
  id: "haven-capacity-table",
  originalName: "Haven Capacity",
  name: "避難港容量",
  description: "避難港容量對照表",
  type: "example",
  category: "core/haven",
  headers: ["D6", "居民數", "描述"],
  rows: [
    {
      rowId: "0",
      defaultRows: [["0", "0", "不斷需要尋找其他食物來源"]],
    },
    {
      rowId: "1",
      defaultRows: [
        ["1", "10", "有供狩獵用的步槍、一些罐頭食品，並且附近有新鮮水源"],
      ],
    },
    {
      rowId: "2",
      defaultRows: [["2", "20", "一些牲畜和良好的漁獵設備"]],
    },
    {
      rowId: "3",
      defaultRows: [["3", "50", "小農場，有牲畜和農作物"]],
    },
    {
      rowId: "4",
      defaultRows: [["4", "80", "大型農場，有牲畜和農作物"]],
    },
    {
      rowId: "5",
      defaultRows: [["5", "200", "與其他社區有良好的貿易協議"]],
    },
    {
      rowId: "6",
      defaultRows: [
        ["6", "500", "一系列農場和建立良好的貿易路線、工作坊和初步的工業"],
      ],
    },
  ],
} as const satisfies GameElement;

export const HavenDefenseTable = {
  id: "haven-defense-table",
  originalName: "Haven Defense",
  name: "防禦",
  description: "不同防禦等級的描述與防禦加成。",
  type: "example",
  category: "core/haven",
  headers: ["防禦等級", "防禦加成", "示例"],
  rows: [
    {
      rowId: "0",
      defaultRows: [["0", "+0", "一棟前門損壞的房子"]],
    },
    {
      rowId: "1",
      defaultRows: [["1", "+1", "帳篷周圍有由繩子和鈴鐺組成的警報系統"]],
    },
    {
      rowId: "2",
      defaultRows: [["2", "+2", "農場周圍有木籬笆，屋頂上有瞭望員"]],
    },
    {
      rowId: "3",
      defaultRows: [
        ["3", "+3", "一棟有加固堅固門、封鎖窗戶、圍欄和加固門的房子"],
      ],
    },
    {
      rowId: "4",
      defaultRows: [
        [
          "4",
          "+4",
          "有石頭高牆和金屬門的圍欄監獄，塔樓上有斥候，並有全天候檢查安全系統",
        ],
      ],
    },
    {
      rowId: "5",
      defaultRows: [["5", "+5", "有高牆和金屬門的圍欄監獄"]],
    },
    {
      rowId: "6",
      defaultRows: [
        [
          "6",
          "+6",
          "一個有電子監控、守衛塔樓、混凝土牆和電子鎖金屬門的軍事基地",
        ],
      ],
    },
  ],
} as const satisfies GameElement;

export const HavenOverrunTable = {
  id: "haven-overrun-table",
  originalName: "Haven Overrun",
  name: "避難港淹沒表",
  description: "不同防禦等級和群體大小下，直到避難港被淹沒的時間。",
  type: "random-table",
  category: "core/haven",
  headers: ["防禦等級", "群體大小", "直到被淹沒的時間"],
  rows: [
    {
      rowId: "0",
      defaultRows: [["0", "單一攻擊", "0"]],
    },
    {
      rowId: "1",
      defaultRows: [["1", "1 (5–10)", "數秒"]],
    },
    {
      rowId: "2",
      defaultRows: [["2", "2 (11–20)", "數分鐘"]],
    },
    {
      rowId: "3",
      defaultRows: [["3", "3 (21–50)", "數小時"]],
    },
    {
      rowId: "4",
      defaultRows: [["4", "4 (51-100)", "數小時（兩倍）"]],
    },
    {
      rowId: "5",
      defaultRows: [["5", "5 (100+)", "數日"]],
    },
    {
      rowId: "6",
      defaultRows: [["6", "6 (1,000+)", "數週"]],
    },
  ],
} as const satisfies GameElement;

export const HavenIssueTable = {
  id: "haven-issue-table",
  originalName: "HavenIssue",
  name: "避難港問題",
  description: "避難港可能面臨的問題。",
  type: "random-table",
  headers: ["D66", "問題"],
  category: "core/haven",
  rows: [
    {
      rowId: "11",
      defaultRows: [["11", "依賴即將耗盡的食物來源"]],
    },
    {
      rowId: "12",
      defaultRows: [["12", "依賴子彈和火器"]],
    },
    {
      rowId: "13",
      defaultRows: [["13", "冬季極度寒冷"]],
    },
    {
      rowId: "14",
      defaultRows: [["14", "部分食物或水可能被污染"]],
    },
    {
      rowId: "15",
      defaultRows: [["15", "可以從遠處輕易被發現"]],
    },
    {
      rowId: "16",
      defaultRows: [["16", "難以加固防禦"]],
    },
    {
      rowId: "21",
      defaultRows: [["21", "靠近大群行屍"]],
    },
    {
      rowId: "22",
      defaultRows: [["22", "另一群體認為這是他們的領土"]],
    },
    {
      rowId: "23",
      defaultRows: [["23", "擁擠，導致群體內部衝突"]],
    },
    {
      rowId: "24",
      defaultRows: [["24", "避難港的部分區域尚未被確保"]],
    },
    {
      rowId: "25",
      defaultRows: [["25", "到處都是老鼠"]],
    },
    {
      rowId: "26",
      defaultRows: [["26", "對其他人來說是個眾所周知的地點"]],
    },
    {
      rowId: "31",
      defaultRows: [["31", "附近有一群狼在狩獵"]],
    },
    {
      rowId: "32",
      defaultRows: [["32", "你與另一個群體共享這個地方"]],
    },
    {
      rowId: "33",
      defaultRows: [["33", "經常有事情吸引行屍到這個位置"]],
    },
    {
      rowId: "34",
      defaultRows: [["34", "入口不安全"]],
    },
    {
      rowId: "35",
      defaultRows: [["35", "有個NPC在這個地方稱王"]],
    },
    {
      rowId: "36",
      defaultRows: [["36", "這裡的人變得軟弱和粗心"]],
    },
    {
      rowId: "41",
      defaultRows: [["41", "NPC倖存者中有幾名成癮者"]],
    },
    {
      rowId: "42",
      defaultRows: [["42", "有許多入口需要留意"]],
    },
    {
      rowId: "43",
      defaultRows: [["43", "沒有人談論那個黑暗的秘密"]],
    },
    {
      rowId: "44",
      defaultRows: [["44", "許多入口需要保持警惕"]],
    },
    {
      rowId: "45",
      defaultRows: [["45", "需要照顧和保護的幾個嬰兒"]],
    },
    {
      rowId: "46",
      defaultRows: [["46", "有幾個需要照顧和保護的嬰兒"]],
    },
    {
      rowId: "51",
      defaultRows: [["51", "沒有足夠的衣服、床墊和毯子"]],
    },
    {
      rowId: "52",
      defaultRows: [["52", "沒有適當的人類廢物處理系統 — 易於散發惡臭和疾病"]],
    },
    {
      rowId: "53",
      defaultRows: [["53", "沒有建造或修理任何東西的工具"]],
    },
    {
      rowId: "54",
      defaultRows: [["54", "這個地方又老又破舊"]],
    },
    {
      rowId: "55",
      defaultRows: [["55", "建築物是一個火災隱患"]],
    },
    {
      rowId: "56",
      defaultRows: [["56", "某些部分被水淹沒"]],
    },
    {
      rowId: "61",
      defaultRows: [["61", "沒有適當的方式烹飪食物"]],
    },
    {
      rowId: "62",
      defaultRows: [["62", "入口難以加固和守衛"]],
    },
    {
      rowId: "63",
      defaultRows: [["63", "土地不適合耕種 — 作物不容易生長"]],
    },
    {
      rowId: "64",
      defaultRows: [["64", "地面布滿了未爆炸的地雷"]],
    },
    {
      rowId: "65",
      defaultRows: [["65", "需要從不安全的地方取來新鮮水"]],
    },
    {
      rowId: "66",
      defaultRows: [["66", "群體中未解決的衝突"]],
    },
  ],
} as const satisfies GameElement;

export const TeachingSurvivorsTable = {
  id: "teaching-survivors-table",
  originalName: "Teaching Survivors",
  name: "教導倖存者",
  description: "不同級別的教學需求和條件。",
  type: "example",
  category: "core/haven",
  headers: ["級別", "技能等級", "學生數量", "時間", "教師技能"],
  rows: [
    {
      rowId: "trained",
      defaultRows: [["訓練有素", "+2", "1–5", "一個月", "2+"]],
    },
    {
      rowId: "expert",
      defaultRows: [["專家", "+3", "6", "六個月", "4+"]],
    },
  ],
} as const satisfies GameElement;

export const ProjectExamplesTable = {
  id: "project-examples-table",
  originalName: "Project Examples",
  name: "項目示例",
  description: "避難港可以進行的項目示例及其效果、所需時間和條件。",
  type: "example",
  category: "core/haven",
  headers: ["項目", "效果", "時間", "勞動力", "要求"],
  rows: [
    {
      rowId: "beehives",
      defaultRows: [["蜂箱", "容量 2", "數月", "3-4", "裝備、野蜂、技術 3"]],
    },
    {
      rowId: "potato-field",
      defaultRows: [
        ["馬鈴薯田", "容量 3", "數月", "3-4", "馬鈴薯、一塊安全的田地、技術 2"],
      ],
    },
    {
      rowId: "pigsty",
      defaultRows: [["豬圈", "容量 3", "數月", "10", "豬、飼料、圍籬、技術3"]],
    },
    {
      rowId: "trade-route",
      defaultRows: [
        [
          "貿易路線",
          "容量 5",
          "數週",
          "20-30",
          "有價值的交易物品、與其他避難港的聯繫、技術 1",
        ],
      ],
    },
    {
      rowId: "simple-alarm-system",
      defaultRows: [
        ["簡易警報系統", "容量 1", "1 天", "2-3", "繩子、鐵罐、技術 1"],
      ],
    },
    {
      rowId: "defense-barriers",
      defaultRows: [["防禦障礙", "防禦 2", "2 天", "5", "工具、裝備、技術 1"]],
    },
    {
      rowId: "reinforced-stone-walls",
      defaultRows: [["強化石牆", "防禦 4", "1 個月", "50", "工具、技術 4"]],
    },
    {
      rowId: "bullet-production",
      defaultRows: [
        ["子彈生產", "防禦 4", "1 個月", "5", "工具、工作坊、技術5"],
      ],
    },
  ],
} as const satisfies GameElement;

export const GearProjectsTable = {
  id: "gear-projects-table",
  originalName: "Gear Projects",
  name: "裝備項目",
  description: "製作或修理裝備的項目示例及其所需時間、工作力和要求。",
  type: "example",
  category: "core/haven",
  headers: ["裝備", "時間", "勞動力", "要求"],
  rows: [
    {
      rowId: "simple-body-armor",
      defaultRows: [["簡易身體護甲", "數週", "1", "鍛造、材料、技術 2"]],
    },
    {
      rowId: "pipe-gun",
      defaultRows: [["管製霰彈槍", "數日", "1", "廢料、霰彈藥殼、技術 3"]],
    },
    {
      rowId: "repair-clothes",
      defaultRows: [["修理衣物", "數小時", "1", "縫紉設備、材料、技術 1"]],
    },
    {
      rowId: "molotov-cocktails",
      defaultRows: [["汽油彈", "數分鐘", "1", "瓶子、汽油、技術 1"]],
    },
    {
      rowId: "repair-radio-transmitter",
      defaultRows: [["修理無線電發射器", "數日", "1", "工具、電力、技術 4"]],
    },
    {
      rowId: "repair-rifle",
      defaultRows: [["修理步槍", "幾日", "1", "工具、技術 3"]],
    },
  ],
} as const satisfies GameElement;

export const VehicleMovementTable = {
  id: "vehicle-movement-table",
  originalName: "Vehicle Movement",
  name: "車輛移動",
  description: "不同車輛每天能夠移動的區域數及其它相關信息。",
  type: "example",
  category: "core/travel",
  headers: ["車輛", "每天區域數"],
  rows: [
    {
      rowId: "car",
      defaultRows: [["汽車", "5"]],
    },
    {
      rowId: "motorcycle",
      defaultRows: [["摩托車", "5"]],
    },
    {
      rowId: "scooter",
      defaultRows: [["滑板車", "4"]],
    },
    {
      rowId: "horse",
      defaultRows: [["馬", "2"]],
    },
    {
      rowId: "bicycle",
      defaultRows: [["自行車", "2"]],
    },
    {
      rowId: "horse-drawn-carriage",
      defaultRows: [["馬車", "1"]],
    },
    {
      rowId: "on-foot",
      defaultRows: [["步行", "1"]],
    },
  ],
} as const satisfies GameElement;

export const RandomResultTable = {
  id: "npcs-run-result-table",
  originalName: "NPCs Run Result",
  name: "NPCs 任務結果",
  description: "NPCs 出去探索或執行任務後的可能結果。",
  type: "random-table",
  category: "core/travel",
  headers: ["D6", "結果"],
  rows: [
    {
      rowId: "1",
      defaultRows: [["1", "所有 NPC 都再也沒有消息。"]],
    },
    {
      rowId: "2",
      defaultRows: [
        ["2", "一個或幾個 NPC 活著回來了，但沒有找到任何有用的東西。"],
      ],
    },
    {
      rowId: "3",
      defaultRows: [["3", "幾個 NPC 回來了，他們帶回了一些有價值的東西。"]],
    },
    {
      rowId: "4",
      defaultRows: [
        ["4", "所有 NPC 都疲憊、受傷且害怕地返回，但帶著一些有價值的東西。"],
      ],
    },
    {
      rowId: "5",
      defaultRows: [["5", "所有 NPC 都帶著他們出去尋找的東西回來了。"]],
    },
    {
      rowId: "6",
      defaultRows: [
        [
          "6",
          "所有 NPC 都帶著他們出去尋找的東西回來了，而且他們還發現了一些有價值且意料之外的東西。",
        ],
      ],
    },
  ],
} as const satisfies GameElement;

export const ChallengeNeedsTable = {
  id: "challenge-needs-table",
  originalName: "Challenge Needs",
  name: "挑戰需求",
  description: "根據隨機需求以建立挑戰。",
  type: "random-table",
  category: "core/gm/challenge",
  headers: ["D6", "需求"],
  rows: [
    {
      rowId: "1",
      defaultRows: [["1", "食物"]],
    },
    {
      rowId: "2",
      defaultRows: [["2", "水"]],
    },
    {
      rowId: "3",
      defaultRows: [["3", "藥品"]],
    },
    {
      rowId: "4",
      defaultRows: [["4", "工具與裝備"]],
    },
    {
      rowId: "5",
      defaultRows: [["5", "武器與彈藥"]],
    },
    {
      rowId: "6",
      defaultRows: [
        [
          "6",
          "耗材（汽油、保暖衣物、衛生巾、尿布、建築材料、備用零件、農作物、牲畜等）。",
        ],
      ],
    },
  ],
} as const satisfies GameElement;

export const ChallengeRandomEventTable = {
  id: "challenge-random-event-table",
  originalName: "Challenge Random Event",
  name: "挑戰隨機事件",
  description: "根據隨機需求以建立挑戰。",
  type: "random-table",
  category: "core/gm/challenge",
  headers: ["D66", "事件"],
  rows: [
    {
      rowId: "11",
      defaultRows: [["11", "避難港內傳播一種病毒，致病力7。"]],
    },
    {
      rowId: "12",
      defaultRows: [["12", "團體中有人懷孕了。"]],
    },
    {
      rowId: "13",
      defaultRows: [
        [
          "13",
          "一個孩子或青少年走失了。擲骰子以確定他們的遭遇。1-2：被行屍吃掉。3-4：被綁架。5：逃跑了。6：迷路但安全。",
        ],
      ],
    },
    {
      rowId: "14",
      defaultRows: [["14", "有人試圖自殺。"]],
    },
    {
      rowId: "15",
      defaultRows: [["15", "一群行屍正接近避難港。擲一個雙高來確定其大小。"]],
    },
    {
      rowId: "16",
      defaultRows: [["16", "一場火災將會燒毀避難港，如果不加以處理的話。"]],
    },
    {
      rowId: "21",
      defaultRows: [["21", "某種方式下，一個行屍找到了進入避難港的方法。"]],
    },
    {
      rowId: "22",
      defaultRows: [["22", "團體中有人經歷了宗教覺醒——或是妄想性的迷戀。"]],
    },
    {
      rowId: "23",
      defaultRows: [
        [
          "23",
          "團體中有人找到一張紙條，鼓勵倖存者聚集在某個地方以建立新的社會。",
        ],
      ],
    },
    {
      rowId: "24",
      defaultRows: [
        [
          "24",
          "在避難港附近發現了一個赤裸的昏迷男子。他是一個小偷和臭名昭著的說謊者，因為偷竊而被他之前的團體懲罰。",
        ],
      ],
    },
    {
      rowId: "25",
      defaultRows: [
        [
          "25",
          "團體中的某人從荒野回來，被動物咬傷。或者他們這麼聲稱……但牙印看起來可能是人類的。",
        ],
      ],
    },
    {
      rowId: "26",
      defaultRows: [["26", "地震/龍捲風/暴風雪/野火威脅避難港。"]],
    },
    {
      rowId: "31",
      defaultRows: [
        ["31", "一群野狗（或狼，或其他掠食者）喜歡吃人肉，在附近定居下來。"],
      ],
    },
    {
      rowId: "32",
      defaultRows: [["32", "行屍群接近，擲一個雙低來確定其大小。"]],
    },
    {
      rowId: "33",
      defaultRows: [
        ["33", "直升機飛過，回來，然後在避難港上空盤旋一會兒再飛走。"],
      ],
    },
    {
      rowId: "34",
      defaultRows: [
        ["34", "避難港的水源意外被污染。喝了這水的每個人都會生病，毒性值6。"],
      ],
    },
    {
      rowId: "35",
      defaultRows: [
        [
          "35",
          "團體中的某人在事故中斷了腿或手臂。這個人要麼需要在避難港找不到的醫療援助，要麼被困在荒野中無法回到避難港。",
        ],
      ],
    },
    {
      rowId: "36",
      defaultRows: [
        ["36", "日食發生。一個未知的倖存者群體在黑暗中包圍並向避難港移動。"],
      ],
    },
    {
      rowId: "41",
      defaultRows: [["41", "行屍群接近，擲骰子以確定其大小。"]],
    },
    {
      rowId: "42",
      defaultRows: [["42", "團體中的某人發現了一家還沒有被洗劫的酒吧。"]],
    },
    {
      rowId: "43",
      defaultRows: [
        [
          "43",
          "一隻饑餓的狗走進避難港，試圖讓人類收養它。它從另一個倖存者群體逃走，那群人正在尋找它。",
        ],
      ],
    },
    {
      rowId: "44",
      defaultRows: [["44", "團體中的某人對酒精、毒品或其他東西上癮。"]],
    },
    {
      rowId: "45",
      defaultRows: [["45", "團體中的某人絕望地愛上了錯誤的人。"]],
    },
    {
      rowId: "46",
      defaultRows: [["46", "團體中的某人開始討厭某人。"]],
    },
    {
      rowId: "51",
      defaultRows: [
        [
          "51",
          "一件重要物品失踪了。擲D6看是誰拿走了它。1–2：NPC倖存者。3–4：來自另一派系的人。5–6：一個躲在附近的孤獨倖存者。",
        ],
      ],
    },
    {
      rowId: "52",
      defaultRows: [
        [
          "52",
          "附近發現了農場動物，可能是豬或羊。如果被帶進避難港，它們將開始傳播一種致病力8的疾病。",
        ],
      ],
    },
    {
      rowId: "53",
      defaultRows: [
        [
          "53",
          "在樹木間發現了十幾個新鮮的墳墓。PCs可以聽到來自地下的呻吟聲。行屍正試圖掙扎到地面上。",
        ],
      ],
    },
    {
      rowId: "54",
      defaultRows: [["54", "避難港中的某人被另一派系的人聯繫。"]],
    },
    {
      rowId: "55",
      defaultRows: [
        [
          "55",
          "發現一個穿著防彈背心，攜帶自動卡賓槍和一整包彈藥的行屍。狙擊手躲在山脊上，看看是否有人會上餌。",
        ],
      ],
    },
    {
      rowId: "56",
      defaultRows: [["56", "避難港中的某人被一個人從另一派系聯繫。"]],
    },
    {
      rowId: "61",
      defaultRows: [["61", "不同群體的陌生人在避難港附近開始交火。"]],
    },
    {
      rowId: "62",
      defaultRows: [
        [
          "62",
          "一個摩天輪。在其中一個頂部車廂中有毯子、食物和水，好像有人正在將它用作臨時基地。在毯子中有一張相當準確的避難港圖，上面標出了薄弱點。",
        ],
      ],
    },
    {
      rowId: "63",
      defaultRows: [["63", "一個哭泣的嬰兒。"]],
    },
    {
      rowId: "64",
      defaultRows: [
        ["64", "一架老式螺旋槳飛機拖著橫幅：“Sommerville是安全的。”"],
      ],
    },
    {
      rowId: "65",
      defaultRows: [
        [
          "65",
          "避難港中的某個重要設施在無人注意的情況下壞了。可能是作物的灌溉系統、安全系統的某部分、槍支之一或車輛。也許是蓄意破壞？",
        ],
      ],
    },
    {
      rowId: "66",
      defaultRows: [
        [
          "66",
          "一個隨機決定的NPC嚴重割傷自己，並感染了敗血症。幾小時內他們發燒，如果不獲得適當的抗生素治療，情況會惡化。擲一個雙低來確定他們在死亡前能撐多久。",
        ],
      ],
    },
  ],
} as const satisfies GameElement;

export const TravelWeatherTable = {
  id: "travel-weather-table",
  originalName: "Travel Weather",
  name: "旅行天氣",
  description: "旅行天氣對應表",
  type: "random-table",
  category: "core/gm/travel",
  headers: ["D6", "天氣"],
  rows: [
    {
      rowId: "1",
      defaultRows: [["1", "雨/雪/霧"]],
    },
    {
      rowId: "2",
      defaultRows: [["2", "多雲"]],
    },
    {
      rowId: "3",
      defaultRows: [["3", "比平常冷"]],
    },
    {
      rowId: "4",
      defaultRows: [["4", "比平常暖和"]],
    },
    {
      rowId: "5",
      defaultRows: [["5", "晴朗且陽光明媚"]],
    },
    {
      rowId: "6",
      defaultRows: [
        ["6", "有風（再次擲骰，另一個6表示是暴風雨或極端熱或冷）。"],
      ],
    },
  ],
} as const satisfies GameElement;

export const TravelRuinTable = {
  id: "travel-ruin-table",
  originalName: "Travel Ruin",
  name: "旅行遺跡",
  description: "旅行遺跡對應表",
  type: "random-table",
  category: "core/gm/travel",
  headers: ["D66", "描述"],
  rows: [
    {
      rowId: "11",
      defaultRows: [
        [
          "11",
          "一個被遺棄的避難港，屋頂上掛著一面旗幟。不知為何，裡面的大多數行屍都穿著粉紅色的連身衣。",
        ],
      ],
    },
    {
      rowId: "12",
      defaultRows: [["12", "汙水處理廠。那裡的工作人員在其中一座塔樓自盡。"]],
    },
    {
      rowId: "13",
      defaultRows: [["13", "一所學校。士兵們曾嘗試在此抵抗。"]],
    },
    {
      rowId: "14",
      defaultRows: [
        [
          "14",
          "一隊被超載的黑色豪華轎車。行屍戴著黑色太陽眼鏡、耳塞和隱藏的肩帶槍套。曾經是名人或富有之人的某人在附近躲藏。",
        ],
      ],
    },
    {
      rowId: "15",
      defaultRows: [["15", "住宅區。泳池就像是行屍掉進去後無法出來的陷阱。"]],
    },
    {
      rowId: "16",
      defaultRows: [
        ["16", "一座空蕩蕩的教堂。內牆上塗鴉著關於上帝拋棄了我們的字樣。"],
      ],
    },
    {
      rowId: "21",
      defaultRows: [
        ["21", "圖書館。大部分完好無損。關於生存和農業的書籍位於二樓。"],
      ],
    },
    {
      rowId: "22",
      defaultRows: [
        ["22", "雜草叢生的公園內有一個巨大的遊樂場。一群野狗在這裡獵食。"],
      ],
    },
    {
      rowId: "23",
      defaultRows: [
        ["23", "一輛戰鬥坦克。它能運行，但沒有彈藥。內有一個行屍。"],
      ],
    },
    {
      rowId: "24",
      defaultRows: [
        [
          "24",
          "縣級市集。顯然，在疫情爆發那天，幾位客人的臉上畫著小丑、小貓或超級英雄的臉繪。",
        ],
      ],
    },
    {
      rowId: "25",
      defaultRows: [["25", "高層建築。頂樓被火燒黑，就像一個巨大的火柴杆。"]],
    },
    {
      rowId: "26",
      defaultRows: [["26", "電影院。一些自動販賣機裡還有蘇打罐。"]],
    },
    {
      rowId: "31",
      defaultRows: [
        [
          "31",
          "一個被遺忘的難民營。一面帶有紅十字的旗幟。銀色的急救毯在風中飄揚。",
        ],
      ],
    },
    {
      rowId: "32",
      defaultRows: [["32", "停車場。在其中一層，幾輛車相互碰撞。"]],
    },
    {
      rowId: "33",
      defaultRows: [["33", "一輛翻覆的校車阻擋了道路。"]],
    },
    {
      rowId: "34",
      defaultRows: [
        ["34", "博物館。展覽名為「我們將再次相見」。關於死亡和復活的藝術。"],
      ],
    },
    {
      rowId: "35",
      defaultRows: [
        ["35", "澡堂。行屍已污染了水源，但還有新鮮的毛巾和洗髮水。"],
      ],
    },
    {
      rowId: "36",
      defaultRows: [
        [
          "36",
          "一個購物中心。底層的門從內部被堵住了，但行屍已經通過地下停車場進入。",
        ],
      ],
    },
    {
      rowId: "41",
      defaultRows: [["41", "地面上的一個開口，可能是一個地鐵站入口。"]],
    },
    {
      rowId: "42",
      defaultRows: [["42", "一座橋。下面有一個空蕩蕩的帳篷營地。"]],
    },
    {
      rowId: "43",
      defaultRows: [
        ["43", "劇院。一個告示讓你知道當時正在上演塞繆爾·貝克特的戲劇。"],
      ],
    },
    {
      rowId: "44",
      defaultRows: [
        [
          "44",
          "舊火車站。巨大的紅磚建築群。現在已空無一人，但明顯曾經有一個大型定居點在這裡生活。有著難以計數的燒烤坑。空氣中還飄著淡淡的烤肉味。",
        ],
      ],
    },
    {
      rowId: "45",
      defaultRows: [["45", "警局。一隻鹿或麋鹿找到了進入的方式。"]],
    },
    {
      rowId: "46",
      defaultRows: [
        ["46", "體育場。它曾被用作難民營，但被超載了。一架直升機墜毀在此。"],
      ],
    },
    {
      rowId: "51",
      defaultRows: [["51", "工業區。警告標誌勿進入。一個NPC正在躲藏。"]],
    },
    {
      rowId: "52",
      defaultRows: [["52", "射擊場。大量槍械。"]],
    },
    {
      rowId: "53",
      defaultRows: [["53", "研究設施。牆上寫著信，請名叫勞拉的人待在原地。"]],
    },
    {
      rowId: "54",
      defaultRows: [
        [
          "54",
          "樹林中發現了十二個新鮮墳墓。玩家角色可以聽到來自地下的呻吟聲。行屍正試圖爬到地面上。",
        ],
      ],
    },
    {
      rowId: "55",
      defaultRows: [["55", "有人在避難港內被另一個派系的人聯繫。"]],
    },
    {
      rowId: "56",
      defaultRows: [["56", "有人在避難港內被另一個派系的人聯繫。"]],
    },
    {
      rowId: "61",
      defaultRows: [["61", "不同群體的陌生人在避難港附近開始交火。"]],
    },
    {
      rowId: "62",
      defaultRows: [
        [
          "62",
          "摩天輪。其中一個頂部車廂中有毯子、食物和水，好像有人正在將它用作臨時基地。在毯子中有一張相當準確的避難港圖，標出了薄弱點。",
        ],
      ],
    },
    {
      rowId: "63",
      defaultRows: [["63", "一個哭泣的嬰兒。"]],
    },
    {
      rowId: "64",
      defaultRows: [
        ["64", "一架老式螺旋槳飛機拖著橫幅：「Sommerville是安全的。」"],
      ],
    },
    {
      rowId: "65",
      defaultRows: [
        [
          "65",
          "避難港內的某個重要設施在無人注意的情況下壞掉。可能是作物的灌溉系統、安全系統的一部分、一把槍，或者是一輛車。也許是蓄意破壞？",
        ],
      ],
    },
    {
      rowId: "66",
      defaultRows: [
        [
          "66",
          "一個隨機決定的NPC嚴重割傷自己，並感染了敗血症。幾小時內他們發燒，如果不獲得適當的抗生素治療，情況會惡化。擲一個雙低來確定他們在死亡前能撐多久。",
        ],
      ],
    },
  ],
} as const satisfies GameElement;

export const TravelWildnessTable = {
  id: "travel-wildness-table",
  originalName: "Travel Wildness",
  name: "野外遭遇",
  description: "野外遭遇隨機表",
  type: "random-table",
  category: "core/gm/travel",
  headers: ["D66", "描述"],
  rows: [
    {
      rowId: "11",
      defaultRows: [["11", "一個新立的巨大十字架位於看似空蕩蕩的田野中間。"]],
    },
    {
      rowId: "12",
      defaultRows: [["12", "一個高爾夫球場。有一輛功能正常的高爾夫球車。"]],
    },
    {
      rowId: "13",
      defaultRows: [["13", "沼澤，沉下的行屍會從下面攻擊。"]],
    },
    {
      rowId: "14",
      defaultRows: [["14", "過度生長的田野。這裡住著一匹野馬。"]],
    },
    {
      rowId: "15",
      defaultRows: [["15", "樹林密集，野生動物生存。"]],
    },
    {
      rowId: "16",
      defaultRows: [["16", "軍事基地，已被廢棄。"]],
    },
    {
      rowId: "21",
      defaultRows: [["21", "陡峭的山丘或山脈。餓了的山獅，甚至是貂鼠。"]],
    },
    {
      rowId: "22",
      defaultRows: [
        [
          "22",
          "一架墜毀的飛機。駕駛艙門被鎖，死去的飛行員被安全帶困在座椅上。",
        ],
      ],
    },
    {
      rowId: "23",
      defaultRows: [
        [
          "23",
          "雷區。警告標誌已被移除。幸運骰擲出一或二意味著領頭的PC奇蹟般地引導團隊穿越雷區間隙。地雷的爆炸力為8。",
        ],
      ],
    },
    {
      rowId: "24",
      defaultRows: [
        [
          "24",
          "一個被遺棄的帳篷營地位於小樹林中。可以找到一封似乎寫給其中一名PC的信。",
        ],
      ],
    },
    {
      rowId: "25",
      defaultRows: [["25", "一個洞或峽谷，行屍落入其中但無法自行爬出。"]],
    },
    {
      rowId: "26",
      defaultRows: [
        ["26", "一片美麗的草地。一隻豬開始尖叫，因為行屍正在吃它。"],
      ],
    },
    {
      rowId: "31",
      defaultRows: [
        ["31", "山丘中的一條溪流，一些鮭魚跳躍。一個熊洞就隱藏在轉角處。"],
      ],
    },
    {
      rowId: "32",
      defaultRows: [["32", "荊棘叢中。有人或某物被困在其中。"]],
    },
    {
      rowId: "33",
      defaultRows: [["33", "一片美麗的湖泊、河流或池塘。許多青蛙。"]],
    },
    {
      rowId: "34",
      defaultRows: [
        [
          "34",
          "帶有塔樓和奇異雕像的破敗大宅。一隻穿著小型人類衣物的猴子。主人已被吃掉。",
        ],
      ],
    },
    {
      rowId: "35",
      defaultRows: [
        ["35", "一個荒涼的休息之家或療養院。一隻大角鴞似乎在監視著PC們。"],
      ],
    },
    {
      rowId: "36",
      defaultRows: [["36", "炸彈坑。腐爛屍體中的蛆蟲。"]],
    },
    {
      rowId: "41",
      defaultRows: [["41", "一群行屍接近，擲骰子以確定其大小。"]],
    },
    {
      rowId: "42",
      defaultRows: [["42", "一個完全被植物覆蓋的獵屋。到處都是螢火蟲。"]],
    },
    {
      rowId: "43",
      defaultRows: [["43", "有人試圖通過在樹梢之間連接繩索來避開行屍。"]],
    },
    {
      rowId: "44",
      defaultRows: [["44", "高速公路上排列著燒毀的汽車。"]],
    },
    {
      rowId: "45",
      defaultRows: [["45", "一隻行屍被困在熊陷阱中。"]],
    },
    {
      rowId: "46",
      defaultRows: [
        [
          "46",
          "一個被生存主義者用作靶場的堤壩，在疫情爆發前。他們沒有倖存下來。",
        ],
      ],
    },
    {
      rowId: "51",
      defaultRows: [["51", "巨大的石塊，要麼崩塌擋在PC的路上，要麼即將崩塌。"]],
    },
    {
      rowId: "52",
      defaultRows: [
        [
          "52",
          "枯萎的樹林中有莓果、蘋果、蘑菇或其他可食用的植物（一份口糧）。",
        ],
      ],
    },
    {
      rowId: "53",
      defaultRows: [
        ["53", "被大批行屍淹沒的新聞團隊與他們的車輛，在森林中央。"],
      ],
    },
    {
      rowId: "54",
      defaultRows: [["54", "流沙或深泥濘。"]],
    },
    {
      rowId: "55",
      defaultRows: [
        ["55", "一個大池塘周圍被高蕨類植物環繞。池塘裡潛藏著鱷魚或鰻魚。"],
      ],
    },
    {
      rowId: "56",
      defaultRows: [["56", "一個孤獨的營火，附近的地面被掃過，灰燼仍然溫熱。"]],
    },
    {
      rowId: "61",
      defaultRows: [["61", "兩輛完好無損的山地自行車靠在柵欄柱子上。"]],
    },
    {
      rowId: "62",
      defaultRows: [
        [
          "62",
          "一個摩天輪。其中最高的車廂中有毯子、食物和水，似乎有人將其用作臨時基地。在毯子中可以找到一張畫得相當準確的PC避難港及其弱點的圖。",
        ],
      ],
    },
    {
      rowId: "63",
      defaultRows: [["63", "一條山脊上插著斷頭的棍子，還在空中咬合。"]],
    },
    {
      rowId: "64",
      defaultRows: [
        ["64", "一架拖著橫幅的老式螺旋槳飛機：「Sommerville是安全的。」"],
      ],
    },
    {
      rowId: "65",
      defaultRows: [
        [
          "65",
          "避難港中的某個重要裝置在無人注意的情況下壞掉了。可能是作物的灌溉系統、某處的安全系統、一把槍或一輛車。或許是被人蓄意破壞？",
        ],
      ],
    },
    {
      rowId: "66",
      defaultRows: [
        [
          "66",
          "一位隨機決定的NPC嚴重割傷自己，並感染了敗血症。幾小時內他們就發燒了，如果不獲得適當的抗生素治療，病情會惡化。擲一個雙低來看他們在死亡前能撐多少天。",
        ],
      ],
    },
  ],
} as const satisfies GameElement;

export const EncounterTable = {
  id: "encounter-table",
  originalName: "Encounter",
  name: "遭遇表",
  description: "決定發生哪一種遭遇",
  type: "random-table",
  category: "core/gm/encounter",
  headers: ["D6", "描述"],
  rows: [
    {
      rowId: "1-2",
      defaultRows: [
        ["1-2", "NPC 遭遇。擲 NPC 遭遇表，並以 NPC 反應表決定反應。"],
      ],
    },
    {
      rowId: "3-4",
      defaultRows: [["3-4", "行屍群。擲骰決定群集大小。"]],
    },
    {
      rowId: "5-6",
      defaultRows: [["5-6", "陣營遭遇。擲你的陣營遭遇表。"]],
    },
  ],
} as const satisfies GameElement;

export const NPCEncounterTable = {
  id: "npc-encounter-table",
  originalName: "NPC Encounter",
  name: "NPC 遭遇表",
  description: "NPC 遭遇表",
  type: "random-table",
  category: "core/gm/encounter",
  headers: ["D66", "姓名", "背景", "專家", "受訓", "議題", "裝備"],
  rows: [
    {
      rowId: "11",
      defaultRows: [
        [
          "11",
          "Jason Brooks",
          "獵人",
          "生存, 遠戰",
          "機動, 近戰, 隱匿",
          "傷痕累累且孤單，冷靜沉著。秘密問題：殘酷殺手團體的最後一員，操縱型的虐待狂",
          "狩獵步槍, 6份口糧, 大刀",
        ],
      ],
    },
    {
      rowId: "12",
      defaultRows: [
        [
          "12",
          "Rita, Danny, 和 Rosalynn Harvey",
          "小孩",
          "-",
          "隱匿, 機動",
          "彼此忠誠，目睹父母被謀殺，不信任任何人",
          "自行車, 開山刀, 3份口糧",
        ],
      ],
    },
    {
      rowId: "13",
      defaultRows: [
        [
          "13",
          "Santiago Perez",
          "外科醫生",
          "醫藥",
          "技術",
          "懦弱。秘密問題：藥物成癮",
          "基本醫療裝備, 藥物, Vespa滑板車, 4份口糧",
        ],
      ],
    },
    {
      rowId: "14",
      defaultRows: [
        [
          "14",
          "Paula Rodriguez",
          "教師",
          "-",
          "技術、生存",
          "糖尿病",
          "跑車, 胰島素注射, 沒子彈的槍, 4份口糧",
        ],
      ],
    },
    {
      rowId: "15",
      defaultRows: [
        [
          "15",
          "Lenny Smith 和 Ross Brown",
          "音樂家及愛侶",
          "—",
          "遠戰",
          "無法處理恐懼",
          "小提琴, 機關槍, 6份口糧, 看門狗 Lennon, 小汽車",
        ],
      ],
    },
    {
      rowId: "16",
      defaultRows: [
        [
          "16",
          "Joey Chard",
          "建築工人",
          "忍耐",
          "力量, 近戰",
          "害羞，為死去的女兒尋求復仇。秘密問題：對待他好的人容易墜入愛河",
          "大錘, 6份口糧, 汽油不足的皮卡車",
        ],
      ],
    },
    {
      rowId: "21",
      defaultRows: [
        [
          "21",
          "Peter Sloan 和 Patricia Anderson",
          "青少年",
          "—",
          "隱匿, 近戰, 操縱",
          "飢餓。秘密問題：小偷和謀殺犯",
          "每人隱藏的刀, 胡椒噴霧和一把鏟子",
        ],
      ],
    },
    {
      rowId: "22",
      defaultRows: [
        [
          "22",
          "Zoe Valdez",
          "警員",
          "遠戰",
          "隱匿, 領導, 近戰",
          "喜歡掌握指揮權",
          "左輪手槍, 帽子, 徽章, 警車, 6份口糧, 獵槍, 刀, 剛殺死的動物, 5瓶葡萄酒",
        ],
      ],
    },
    {
      rowId: "23",
      defaultRows: [
        [
          "23",
          "Harry Lee",
          "菁英運動員",
          "機動",
          "近戰, 偵查",
          "依循舊世界的道德觀",
          "摩托車, 左輪手槍, 手斧, 4份口糧, 6張來自死去朋友的身份證",
        ],
      ],
    },
    {
      rowId: "24",
      defaultRows: [
        [
          "24",
          "Angelina Banich",
          "家庭主婦",
          "遠戰",
          "生存, 隱匿, 近戰",
          "精神不穩定、孤獨者。秘密問題：殺死了她的舊幫派，用殺戮來解決衝突",
          "手槍, 刀, 2份口糧",
        ],
      ],
    },
    {
      rowId: "25",
      defaultRows: [
        [
          "25",
          "Viviane 和 James Moore",
          "夫妻",
          "-",
          "近戰, 生存",
          "夢想找到一個安全的地方撫養即將出生的孩子，Viviane正在懷孕，迫切尋找食物和安全",
          "2份口糧, 2把手槍, 一輛汽車",
        ],
      ],
    },
    {
      rowId: "26",
      defaultRows: [
        [
          "26",
          "Lucas Resick",
          "心理學家",
          "操縱",
          "偵查",
          "為了生存不擇手段",
          "獵槍, 2份口糧, 一輛汽車, 一頂帳篷",
        ],
      ],
    },
    {
      rowId: "31",
      defaultRows: [
        [
          "31",
          "Kai Patel",
          "汽車技師",
          "技術",
          "近戰",
          "遠離衝突。秘密問題：對最強者忠誠",
          "滿載工具的吉普車, 機關槍, 斧頭, 6份口糧, 數個汽油桶",
        ],
      ],
    },
    {
      rowId: "32",
      defaultRows: [
        [
          "32",
          "Roger Hammond 和 Kit Wilson",
          "士兵",
          "遠戰",
          "近戰, 生存, 忍耐, 機動",
          "受創傷，攜帶著他們重傷垂死的朋友",
          "突擊步槍, 手槍, 刀, 12份口糧, 生存裝備",
        ],
      ],
    },
    {
      rowId: "33",
      defaultRows: [
        [
          "33",
          "Melissa Jackson",
          "前藥癮者",
          "-",
          "隱匿, 醫藥",
          "對人惡意推測",
          "基本醫療裝備, 十字鎬, 2份口糧, 1個手榴彈",
        ],
      ],
    },
    {
      rowId: "34",
      defaultRows: [
        [
          "34",
          "Ellen Kay",
          "教授",
          "技術",
          "操縱",
          "擅長讓其他人為她戰鬥，冷靜沉著。秘密問題：永不忘記不公",
          "廚房刀, 防暴盾, 4份口糧, 另一個為她戰鬥的倖存者（再次擲骰）",
        ],
      ],
    },
    {
      rowId: "35",
      defaultRows: [
        [
          "35",
          "Ming–Na Ho",
          "消防員",
          "耐力",
          "生存, 近戰, 蠻力",
          "抑鬱、秘密問題：潛伏性肺結核",
          "消防斧, 10份口糧, 摩托車, 帳篷",
        ],
      ],
    },
    {
      rowId: "36",
      defaultRows: [
        [
          "36",
          "Kayd 和 Scott Pierson",
          "父子",
          "—",
          "偵查, 隱匿, 機動",
          "準備做任何事來生存",
          "刀, 斧, 絞索, 2份口糧",
        ],
      ],
    },
    {
      rowId: "41",
      defaultRows: [
        [
          "41",
          "Madeline Rivera",
          "股票經紀人",
          "操縱",
          "-",
          "過度自信、商人。秘密問題：指責最弱者",
          "汽車, 20份口糧, 霰彈槍",
        ],
      ],
    },
    {
      rowId: "42",
      defaultRows: [
        [
          "42",
          "Stu Harrison",
          "卡通作家",
          "-",
          "-",
          "依賴運氣。秘密問題：將他人置於危險之中",
          "鏟子, 生存裝備, 2份口糧",
        ],
      ],
    },
    {
      rowId: "43",
      defaultRows: [
        [
          "43",
          "Ezra Faheem",
          "護士",
          "—",
          "醫藥, 近戰",
          "信任問題",
          "基本醫療裝備, 小汽車, 10份口糧, 魚叉槍",
        ],
      ],
    },
    {
      rowId: "44",
      defaultRows: [
        [
          "44",
          "Eliot Harper",
          "工程師",
          "技術",
          "-",
          "對兒童有軟肋。秘密問題：為了拯救一個孩子願意犧牲任何東西",
          "2份口糧, 穿著破洞的披風以便在死者中混入, 一個號角用來為了保護而呼喚死者",
        ],
      ],
    },
    {
      rowId: "45",
      defaultRows: [["45", "Wayne Vo", "房東", "—", "—", "酒鬼", "—"]],
    },
    {
      rowId: "46",
      defaultRows: [
        [
          "46",
          "Anne Jackson",
          "演員",
          "—",
          "遠戰, 生存",
          "從不睡覺。秘密問題：有聲音告訴她事情",
          "劍, 2份口糧",
        ],
      ],
    },
    {
      rowId: "51",
      defaultRows: [
        [
          "51",
          "Zane Sparks",
          "動物訓練師",
          "—",
          "遠戰, 生存",
          "從不改變對任何事情的看法",
          "動物控制桿, 防護手套, 網, 鏟子, 電擊槍, 5份口糧",
        ],
      ],
    },
    {
      rowId: "52",
      defaultRows: [
        [
          "52",
          "Jessica Fryers",
          "飛行員",
          "機動",
          "近戰, 操縱",
          "固執，受傷。秘密問題：某秘密派系的成員",
          "卡賓槍, 沒油的螺旋槳飛機, 刀",
        ],
      ],
    },
    {
      rowId: "53",
      defaultRows: [
        [
          "53",
          "Luke McGowan",
          "刺客",
          "遠戰、近戰",
          "隱匿",
          "從不按規則來玩。秘密問題：只對自己忠誠",
          "狩獵步槍, 鏟子, 刀, Vespa滑板車, 4份口糧, 寵物貓Cindy",
        ],
      ],
    },
    {
      rowId: "54",
      defaultRows: [
        [
          "54",
          "Mira Bello",
          "工廠工人",
          "—",
          "忍受",
          "孤獨且害怕",
          "雙手斧, 1份口糧",
        ],
      ],
    },
    {
      rowId: "55",
      defaultRows: [
        [
          "55",
          "Selena 與 Eva Cabello",
          "廚師與記者",
          "—",
          "生存",
          "從不讓任何人靠近，使用卑鄙手段戰鬥。秘密問題：Selena最近失去了她的雙胞胎嬰兒。",
          "球棒, 矛, 設置陷阱的裝備, 2顆手榴彈, 8份口糧。",
        ],
      ],
    },
    {
      rowId: "56",
      defaultRows: [
        [
          "56",
          "Jacky Hearts",
          "名人",
          "—",
          "-",
          "欺負弱小，秘密問題：是個小偷和殺人犯。",
          "運動自行車, 左輪手槍, 錘子, 手持相機帶電池, 一位從不說話的男友 Claude, 8份口糧",
        ],
      ],
    },
    {
      rowId: "61",
      defaultRows: [
        [
          "61",
          "Esmerelda Rains",
          "公車司機",
          "—",
          "機動",
          "知道一個安全地點，但沒有幫助無法到達。秘密問題：說謊成性",
          "警長徽章, 左輪手槍, 假鑽戒, 手臂上的繃帶隱藏了一個醜陋的刺青",
        ],
      ],
    },
    {
      rowId: "62",
      defaultRows: [
        [
          "62",
          "Oscar Lahm",
          "垃圾收集者",
          "-",
          "—",
          "小人之心度人",
          "帶有隨機裝備的垃圾車, 步槍, 雙節棍, 磨尖螺絲刀, 20份口糧",
        ],
      ],
    },
    {
      rowId: "63",
      defaultRows: [
        [
          "63",
          "Sheila Barboza",
          "清潔女工",
          "—",
          "—",
          "一直躲在預備者的地堡裡，直到最近才出來，幾乎在行屍面前無用。秘密問題：預備者沒有允許她離開",
          "狩獵步槍, 生存裝備, 急救包, 10份口糧, 斧頭, 帳篷, 太陽能充電器, 無線電發射器, 兩個輪胎爆了的汽車",
        ],
      ],
    },
    {
      rowId: "64",
      defaultRows: [
        [
          "64",
          "「少校」",
          "獄卒",
          "近戰、操縱",
          "隱匿, 生存, 近戰",
          "過度自信，且無畏。秘密問題：想要控制下屬，願燒毀世界以對敵人復仇",
          "配有消音器的兩把槍, 防彈衣, 吉普車, 一個藏身處, 望遠鏡, 10份口糧",
        ],
      ],
    },
    {
      rowId: "65",
      defaultRows: [
        [
          "65",
          "Adam Stark",
          "屠夫",
          "近戰",
          "—",
          "太過善良無法善待自己",
          "屠夫的切肉刀, 屠夫刀, 左輪手槍, 6份口糧, 帳篷, 馬",
        ],
      ],
    },
    {
      rowId: "66",
      defaultRows: [
        [
          "66",
          "Dax Heinz",
          "汽車銷售員",
          "-",
          "操縱、隱匿",
          "要照顧他重傷的兄弟",
          "生存裝備, 6份口糧, 3個汽油彈, 斧頭",
        ],
      ],
    },
  ],
} as const satisfies GameElement;
export const RandomThreatLevelTable = {
  id: "random-threat-level-table",
  originalName: "Random Threat Level",
  name: "隨機威脅等級",
  description: "根據PC（玩家角色）行動產生的聲響等因素，決定威脅等級。",
  type: "random-table",
  category: "core/gm/walker",
  headers: ["D6", "威脅等級"],
  rows: [
    {
      rowId: "0",
      defaultRows: [["1–2", "0"]],
    },
    {
      rowId: "1",
      defaultRows: [["3–4", "1"]],
    },
    {
      rowId: "2",
      defaultRows: [["5–6", "2"]],
    },
  ],
} as const satisfies GameElement;

export const WalkersApproachingTable = {
  id: "walkers-approaching-table",
  originalName: "Walkers Approaching",
  name: "行屍接近時間",
  description: "決定行屍群到達玩家所在位置所需的時間。",
  type: "random-table",
  category: "core/gm/walker",
  headers: ["D6", "時間"],
  rows: [
    {
      rowId: "seconds",
      defaultRows: [["1", "秒"]],
    },
    {
      rowId: "minutes",
      defaultRows: [["2", "分鐘"]],
    },
    {
      rowId: "hours",
      defaultRows: [
        ["3", "小時"],
        ["4", "一小時"],
      ],
    },
    {
      rowId: "days",
      defaultRows: [["5", "天"]],
    },
    {
      rowId: "too-far",
      defaultRows: [["6", "太遠而找不到路徑來這裡"]],
    },
  ],
} as const satisfies GameElement;

export const NpcReactionsTable = {
  id: "npc-reactions-table",
  originalName: "NPC Reactions",
  name: "NPC 反應",
  description: "遭遇 NPC 時可能的反應。",
  type: "random-table",
  category: "core/gm/npc_and_animal",
  headers: ["D6", "反應"],
  rows: [
    {
      rowId: "1",
      defaultRows: [["1", "友好或需要幫助。"]],
    },
    {
      rowId: "2",
      defaultRows: [["2", "謹慎但好奇。"]],
    },
    {
      rowId: "3",
      defaultRows: [["3", "想要交換物品、謠言或其他東西。"]],
    },
    {
      rowId: "4",
      defaultRows: [["4", "害怕且準備逃跑、躲藏或自衛。"]],
    },
    {
      rowId: "5",
      defaultRows: [["5", "敵對。"]],
    },
    {
      rowId: "6",
      defaultRows: [["6", "計劃通過武力或詭計奪取PC擁有的物品。"]],
    },
  ],
} as const satisfies GameElement;

export const AnimalsExampleTable = {
  id: "animals-example-table",
  originalName: "Animals Example",
  name: "動物列表",
  description: "一些動物的例子。",
  type: "example",
  category: "core/gm/npc_and_animal",
  headers: ["動物", "攻擊骰", "傷害", "健康"],
  rows: [
    {
      rowId: "Alligator",
      defaultRows: [["短吻鱷", "6", "2", "4"]],
    },
    {
      rowId: "Bear",
      defaultRows: [["熊", "8", "2", "4"]],
    },
    {
      rowId: "Dog",
      defaultRows: [["狗", "4", "1", "3"]],
    },
    {
      rowId: "Eagle",
      defaultRows: [["鷹", "4", "1", "2"]],
    },
    {
      rowId: "Elk",
      defaultRows: [["麋鹿", "5", "1", "4"]],
    },
    {
      rowId: "Venomous snake",
      defaultRows: [["蝮蛇", "5", "1 （+毒性）", "2"]],
    },
    {
      rowId: "Tiger",
      defaultRows: [["虎", "8", "2", "4"]],
    },
    {
      rowId: "Trained watchdog",
      defaultRows: [["看門狗", "6", "1", "3"]],
    },
    {
      rowId: "Wolf",
      defaultRows: [["狼", "6", "1", "3"]],
    },
    {
      rowId: "Wolverine",
      defaultRows: [["狼獾", "5", "1", "3"]],
    },
  ],
} as const satisfies GameElement;

export const AtlantaFractionEncounterTable = {
  id: "atlanta-fraction-encounter-table",
  originalName: "Atlanta Fraction Encounter",
  name: "Atlanta 戰役派系遭遇",
  description: "Atlanta 戰役的派系遭遇表",
  type: "random-table",
  category: "campaign/gm/atlanta-default",
  headers: ["D6", "事件"],
  rows: [
    {
      rowId: "1",
      defaultRows: [["1", "兩個來自「再生者」的人正在外面尋找物資。"]],
    },
    {
      rowId: "2",
      defaultRows: [
        [
          "2",
          "「生者」的五名成員找到了一批酒精。他們喝醉了，站在屋頂上向行屍投擲莫洛托夫雞尾酒作為酒後運動。",
        ],
      ],
    },
    {
      rowId: "3",
      defaultRows: [
        [
          "3",
          "一個叫 Lisa 的害怕的孩子從學校逃跑了。她躲在某個地方，快要餓死了。Lisa 很害怕，但如果玩家角色獲得她的信任，她會想回去救她的朋友。",
        ],
      ],
    },
    {
      rowId: "4",
      defaultRows: [
        [
          "4",
          "「再生者」在一個被遺棄的村莊的牆上釘了論述摩根神父教義的紙張。所有紙張上都標有一個帶有大寫M的十字架。",
        ],
      ],
    },
    {
      rowId: "5",
      defaultRows: [
        ["5", "「生者」的兩名成員正在教訓他們的一名僕人一個教訓。"],
      ],
    },
    {
      rowId: "6",
      defaultRows: [
        [
          "6",
          "一輛裝滿補給品的卡車在返回學校的途中壞了。如果它沒有到達，議會將派出安全隊去查明發生了什麼。",
        ],
      ],
    },
  ],
} as const satisfies GameElement;

export const AtlantaRumorsTable = {
  id: "atlanta-rumors-table",
  originalName: "Atlanta Rumors",
  name: "Atlanta 戰役謠言",
  description: "Atlanta 戰役謠言表",
  type: "random-table",
  category: "campaign/gm/atlanta-default",
  headers: ["D6", "結果"],
  rows: [
    {
      rowId: "1",
      defaultRows: [
        [
          "1",
          "「人類的最後希望是一所學校，就在這附近。教師們一直在照顧數百名孩子，但他們迫切需要食物、保護和幫助。他們接納任何新來者。」",
        ],
      ],
    },
    {
      rowId: "2",
      defaultRows: [
        [
          "2",
          "「有個叫 Jack Morgen 的人死了，但沒有變成行屍。我親眼所見。他的團體中的狂熱分子認為這是一個奇跡，證明摩根是耶穌的第二次降臨。如果科學家能得到那具屍體，或許他們能創造出抗病毒的解藥。」",
        ],
      ],
    },
    {
      rowId: "3",
      defaultRows: [
        [
          "3",
          "「全國各地的人們已經開始通過無線電相互聯繫。許多人都在制定如何重建文明的計劃。我真希望能找到一個無線電發射器。」",
        ],
      ],
    },
    {
      rowId: "4",
      defaultRows: [
        [
          "4",
          "「蘭尼爾湖上有一個船屋定居點。我生病的時候在那裡住了一段時間。他們收留了我，給我食物，幫助了我，並沒有要求任何回報。如果地球上還有好人，他們中的一些正在那些船上漂浮。」",
        ],
      ],
    },
    {
      rowId: "5",
      defaultRows: [
        [
          "5",
          "「我正前往貝斯利家族的農場——這是周圍最大的一個。我的父母在那裡工作。你想和我一起去嗎？這個時候他們總是在找好工人。」",
        ],
      ],
    },

    {
      rowId: "6",
      defaultRows: [
        [
          "6",
          "「有一群善良的基督徒叫做『再生者』。他們幫助任何有需要的人，並且能夠對抗劫掠者。當他們找到我時，我快要死了，但他們幫助了我。」",
        ],
      ],
    },
  ],
} as const satisfies GameElement;

import { ExampleTableElement, RandomTableElement } from "@/lib/types";

/*
Every export modules should be a named export, and types should be GameElement.
*/

export const overwhilmedTable: RandomTableElement = {
  id: "overwhelmed-table",
  originalName: "Overwhelmed Table",
  name: "擊垮表",
  description: "若你無法處理好你的恐懼，擲擊垮表",
  type: "random-table",
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
};

export const QuestionForXP: ExampleTableElement = {
  id: "question-for-xp",
  originalName: "Question for XP",
  name: "經驗問題",
  description: "每有一個問題是「是」，獲得 XP。",
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
};

export const NpcSurviors: RandomTableElement = {
  id: "npc-surviors",
  originalName: "NPC Surviors",
  name: "NPC 倖存者",
  description: "擲 D6 決定遊戲開始時有哪群 NPC 倖存者跟你們在一起",
  type: "random-table",
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
          "只尊重力量，喜歡戲弄和騷擾他人",
          "砍刀, 左輪手槍",
        ],
        [
          "",
          "Amy Hall",
          "士兵",
          "遠戰",
          "力量",
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
};

export const MessingUpInCombat: RandomTableElement = {
  id: "messing-up-in-combat",
  originalName: "Messing up in Combat",
  name: "戰鬥失誤",
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
};

export const BrawlPhases: ExampleTableElement = {
  id: "brawl-phases",
  originalName: "Brawl Phases",
  name: "爭鬥階段",
  description: "爭鬥按照下述回合進行。",
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
};

export const ArmorTypes: ExampleTableElement = {
  id: "armor-types",
  originalName: "Types of Armor",
  name: "護甲類型",
  description: "根據護甲，可在此查詢護甲等級和懲罰。",
  type: "example",
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
};

export const CriticalInjuries: RandomTableElement = {
  id: "critical-injuries",
  originalName: "Critical Injuries",
  name: "嚴重傷害",
  description:
    "在戰鬥和治療過程中可能遭受的嚴重傷害。B 表示只需要使用基本醫療器材，A 表示需要使用高級醫療器材。",
  type: "random-table",
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
};

export const StabilizingIssuesTable: RandomTableElement = {
  id: "stabilizing-issues-table",
  originalName: "Stabilizing Issues Table",
  name: "穩定傷勢失誤表",
  description: "在擲醫藥以穩定傷勢時失誤的後果",
  type: "random-table",
  keywords: ["戰鬥"],
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
};

export const ExplosiveWeaponTable: ExampleTableElement = {
  id: "explosive-weapon-table",
  originalName: "Explosive Weapon Table",
  name: "爆炸武器表",
  description: "不同爆炸武器的爆炸力（BP）對應範例",
  type: "example",
  keywords: ["危害", "hazard"],
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
};

export const FireTable: ExampleTableElement = {
  id: "fire-table",
  originalName: "Fire Table",
  name: "火焰表",
  description: "火源與強度的對應範例",
  type: "example",
  headers: ["火焰源", "強度"],
  keywords: ["危害", "hazard"],
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
};

export const DeseaseTable: ExampleTableElement = {
  id: "desease-table",
  originalName: "Desease Table",
  name: "疾病表",
  description: "疾病與嚴重性的對應範例",
  type: "example",
  headers: ["疾病", "嚴重性"],
  keywords: ["危害", "hazard"],
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
};

export const TrapTable: ExampleTableElement = {
  id: "trap-table",
  originalName: "Trap Table",
  name: "陷阱表",
  description: "陷阱與效果的對應範例",
  type: "example",
  headers: ["陷阱", "效果"],
  keywords: ["危害", "hazard"],
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
};

export const QualityOfItemsTable: RandomTableElement = {
  id: "quality-of-items-table",
  originalName: "Item Quality",
  name: "物品品質",
  description: "物品品質",
  type: "random-table",
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
};

export const GerneralGearTable: ExampleTableElement = {
  id: "general-gear-table",
  originalName: "General Gear",
  name: "一般裝備表",
  description: "一般裝備的數值對應",
  type: "example",
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
      defaultRows: [["撬棍", "1", "力量 +2"]],
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
      defaultRows: [["工具箱", "1", "科技"]],
    },
    {
      rowId: "walkie-talkie",
      defaultRows: [["對講機", "1/2", "領導 +1"]],
    },
  ],
};

export const CloseCombatWeaponTable: ExampleTableElement = {
  id: "close-combat-weapon-table",
  originalName: "Close Combat Weapon",
  name: "近戰武器",
  description: "近戰武器的數值對應",
  type: "example",
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
      defaultRows: [["短矛", "2", "+2", "1"]],
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
};

export const RangedWeaponTable: ExampleTableElement = {
  id: "ranged-weapon-table",
  originalName: "Ranged Weapon",
  name: "遠程武器",
  description: "遠程武器的數值對應",
  type: "example",
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
      defaultRows: [["土砲霰彈槍", "2", "+1", "短", "1"]],
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
};

export const VechicleConditionTable: RandomTableElement = {
  id: "vehicle-condition-table",
  originalName: "Vehicle Condition",
  name: "載具狀況",
  description: "載具狀況隨機表",
  type: "random-table",
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
};

export const VehicleTypeTable: ExampleTableElement = {
  id: "vehicle-type-table",
  originalName: "Vehicle Type",
  name: "載具類型",
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
};

export const CrashObjectsTable: RandomTableElement = {
  id: "crash-objects-table",
  originalName: "Crash Objects",
  name: "撞擊物",
  description: "撞擊物隨機表",
  type: "random-table",
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
};

export const criticalVehicleDamageTable: RandomTableElement = {
  id: "critical-vehicle-damage-table",
  originalName: "Critical Vehicle Damage",
  name: "嚴重載具傷害",
  description: "嚴重載具傷害隨機表",
  type: "random-table",
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
};

export const SwarmSizeTable: RandomTableElement = {
  id: "swarm-size-table",
  originalName: "Swarm Size",
  name: "群體大小",
  description: "群體大小對照表",
  type: "random-table",
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
};

export const ThreatLevelsTable: RandomTableElement = {
  id: "threat-levels-table",
  originalName: "The Threat Levels",
  name: "威脅等級",
  description: "不同情境下的威脅等級對照表",
  type: "random-table",
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
};

export const WalkerAttackTable: RandomTableElement = {
  id: "walker-attack-table",
  originalName: "Walker Attack",
  name: "行屍攻擊",
  description: "遭遇行屍攻擊時可能發生的效果。",
  type: "random-table",
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
          "它們壓在你身上，但你設法殺死了它們且避免被咬。你必須進行一次力量擲骰來推開它們。如果你失敗，你被屍體壓制並在D6分鐘內失去意識。",
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
};

export const SwarmAttackTable: ExampleTableElement = {
  id: "swarm-attack-table",
  originalName: "Swarm Attack",
  name: "群體攻擊",
  description: "群體攻擊對照表",
  type: "example",
  headers: ["威脅等級", "技能", "攻擊"],
  rows: [
    {
      rowId: "1",
      defaultRows: [["3", "忍受, 力量, 機動, 遠戰, 隱匿", "單攻擊, 阻隔"]],
    },
    {
      rowId: "2",
      defaultRows: [["4", "力量, 機動, 遠戰", "單攻擊, 阻隔"]],
    },
    {
      rowId: "3",
      defaultRows: [["5", "力量, 近戰, 遠戰", "單攻擊, 阻隔"]],
    },
    {
      rowId: "4",
      defaultRows: [["6", "力量, 近戰", "大量攻擊"]],
    },
  ],
};

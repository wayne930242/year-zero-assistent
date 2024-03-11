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
          "潛行, 機動",
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
          "生存, 潛行",
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
          "潛行",
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
          "近戰, 潛行",
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

export const GerneralGearTable: ExampleTableElement = {
  id: "general-gear-table",
  originalName: "General Gear Table",
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

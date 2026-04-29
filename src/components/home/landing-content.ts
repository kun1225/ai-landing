export const navigation = [
  { href: "#fit", label: "痛點" },
  { href: "#why", label: "為什麼會有 AI 味" },
  { href: "#method", label: "方法" },
  { href: "#results", label: "你會得到什麼" },
  { href: "#waitlist", label: "候補名單" },
];

export const painPoints = [
  {
    title: "做出來的設計充滿 AI 味",
    description:
      "科技感的漸層色調、公式化版型、到處用 Emoji⋯⋯",
    icon: "repeated-cards",
  },
  {
    title: "想調整設計，怎麼改都不對",
    description:
      "AI 經常越改越糟糕，不知問題出在指令、工具還是模型",
    icon: "misaligned-slider",
  },
  {
    title: "看不懂程式碼，出錯只能祈禱",
    description:
      "畫面、功能出錯向 AI 求救，常常改 A 壞 B",
    icon: "broken-code",
  },
  {
    title: "做出一個成功網站，不知道怎麼再做出第二個",
    description:
      "缺少穩定的設計流程，每次下指令都像在抽卡",
    icon: "branching-path",
  },
] as const;

export const fitSignals = [
  {
    title: "你不想做出一個看得出來是 AI 生的網站",
    description:
      "你在意的不只是有沒有頁面，而是它看起來夠不夠準、夠不夠像你、夠不夠值得信任。",
  },
  {
    title: "你要的不是模板速度，而是可用的第一版",
    description:
      "你希望網站可以真的拿去介紹服務、收集名單、測試市場，而不是做完之後還是不敢放出去。",
  },
  {
    title: "你願意用 AI，但不想把判斷力也一起外包",
    description:
      "你想學的是怎麼把 AI 拉回正確方向，而不是堆更多指令、換更多工具試運氣。",
  },
];

export const diagnosisPoints = [
  {
    title: "架構沒有主次",
    description:
      "每個區塊都在講差不多的話，訪客看完一輪還是不知道你真正要他理解什麼、下一步要做什麼。",
  },
  {
    title: "文案像拼貼",
    description:
      "句子單看好像沒問題，但放在一起沒有節奏，也沒有把價值、信任與行動串成一條線。",
  },
  {
    title: "畫面像套模板",
    description:
      "資訊被塞進熟悉的卡片與版型裡，快速是快速了，但看不出品牌感，也看不出判斷。",
  },
  {
    title: "有頁面，沒有信任感",
    description:
      "網站長得完整，不代表它有說服力。真正的差異通常出在 refinement：細節、層級、取捨與轉換設計。",
  },
];

export const methodSteps = [
  {
    title: "先定義網站要完成的任務",
    description:
      "先釐清這個網站是要介紹服務、收名單、建立信任，還是驗證需求，再決定頁面主次。",
  },
  {
    title: "用 AI 拆出第一版結構與文案",
    description:
      "讓 AI 幫你整理內容，但不直接照單全收，而是把重點拉回更清楚的資訊層級。",
  },
  {
    title: "把內容轉成頁面，修掉模板感",
    description:
      "透過版面、節奏、視覺權重與用字調整，把粗稿修成比較像作品、而不是像生成結果的頁面。",
  },
  {
    title: "補上 CTA 與關鍵轉換細節",
    description:
      "最後把行動路徑、表單與聯絡機制補齊，讓網站不只看起來完成，也真的能接住下一步。",
  },
];

export const resultPoints = [
  "一個更像你自己、而不是像 AI 範本的第一版網站。",
  "一套之後做服務頁、活動頁、產品驗證頁都能沿用的整理方法。",
  "更清楚知道什麼地方會讓網站有 AI 味，也更知道該怎麼修。",
];

export const resultProof = [
  {
    label: "你會帶走的不是一堆指令",
    value: "而是能反覆使用的判斷框架。",
  },
  {
    label: "最有價值的不是生成速度",
    value: "而是知道怎麼把粗稿修成能上線的版本。",
  },
];

export const studentShowcaseItems = [
  {
    name: "Thisweb Atelier",
    type: "個人品牌網站",
    layoutClassName: "lg:col-span-4 lg:col-start-1 lg:row-start-1",
  },
  {
    name: "Between Lines",
    type: "服務介紹網站",
    layoutClassName: "lg:col-span-7 lg:col-start-6 lg:row-start-1",
  },
  {
    name: "North Echo",
    type: "作品集網站",
    layoutClassName: "lg:col-span-4 lg:col-start-6 lg:row-start-2",
  },
  {
    name: "Slow Form",
    type: "課程活動網站",
    layoutClassName: "lg:col-span-3 lg:col-start-10 lg:row-start-2",
  },
  {
    name: "Frame Zero",
    type: "品牌形象首頁",
    layoutClassName: "lg:col-span-5 lg:col-start-1 lg:row-start-3",
  },
  {
    name: "Quiet Goods",
    type: "品牌展示網站",
    layoutClassName: "lg:col-span-5 lg:col-start-8 lg:row-start-3",
  },
];

export const waitlistFields = [
  {
    id: "email",
    label: "電子郵件",
    placeholder: "you@example.com",
    type: "email",
  },
  {
    id: "role",
    label: "你現在的身份／工作",
    placeholder: "例如：接案者、顧問、品牌主理人",
    type: "text",
  },
];

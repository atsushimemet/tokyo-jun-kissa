export type Cafe = {
  id: string
  name: string
  station: string
  stationSlug: string
  googleMapUrl: string
  recommendationLinks: {
    label: string
    url: string
  }[]
}

export const cafes: Cafe[] = [
  {
    id: "coffee-hall-kugutsusou",
    name: "COFFEE HALL くぐつ草",
    station: "吉祥寺",
    stationSlug: "kichijoji",
    googleMapUrl: "https://www.google.com/maps?q=COFFEE%20HALL%20%E3%81%8F%E3%81%90%E3%81%A4%E8%8D%89&ftid=0x6018ee4864a8e61b:0x7a6d7066eb2fbe0e",
    recommendationLinks: [
      {
        label: "Time Out Tokyo：COFFEE HALL くぐつ草",
        url: "https://www.timeout.jp/tokyo/ja/%E3%83%AC%E3%82%B9%E3%83%88%E3%83%A9%E3%83%B3/coffee-hall-kugutsusou",
      },
    ],
  },
  {
    id: "yuriapemuperu",
    name: "ゆりあぺむぺる",
    station: "吉祥寺",
    stationSlug: "kichijoji",
    googleMapUrl: "https://www.google.com/maps?q=%E3%82%86%E3%82%8A%E3%81%82%E3%81%BA%E3%82%80%E3%81%BA%E3%82%8B&ftid=0x6018ee480f7acd9d:0x9471a8b8ffc2bb3",
    recommendationLinks: [
      {
        label: "Time Out Tokyo：ゆりあぺむぺる",
        url: "https://www.timeout.jp/tokyo/ja/%E3%83%AC%E3%82%B9%E3%83%88%E3%83%A9%E3%83%B3/yuriapemuperu",
      },
    ],
  },
  {
    id: "coffee-seibu-honten",
    name: "珈琲西武 本店",
    station: "新宿",
    stationSlug: "shinjuku",
    googleMapUrl: "https://www.google.com/maps?q=%E7%8F%88%E7%90%B2%E8%A5%BF%E6%AD%A6%20%E6%9C%AC%E5%BA%97&ftid=0x60188cda66c6d6af:0xb97e4e8d2b1b05db",
    recommendationLinks: [
      {
        label: "Time Out Tokyo：珈琲西武 本店",
        url: "https://www.timeout.jp/tokyo/ja/%E3%83%AC%E3%82%B9%E3%83%88%E3%83%A9%E3%83%B3/coffee-seibu-honten",
      },
    ],
  },
  {
    id: "monozuki",
    name: "物豆奇",
    station: "西荻窪",
    stationSlug: "nishi-ogikubo",
    googleMapUrl: "https://www.google.com/maps?q=%E7%89%A9%E8%B1%86%E5%A5%87&ftid=0x6018ee122b7ee0cb:0xadda2ed5ba27fe11",
    recommendationLinks: [
      {
        label: "Time Out Tokyo：物豆奇",
        url: "https://www.timeout.jp/tokyo/ja/%E3%83%AC%E3%82%B9%E3%83%88%E3%83%A9%E3%83%B3/monozuki",
      },
    ],
  },
  {
    id: "sabouru",
    name: "味の珈琲屋さぼうる",
    station: "神保町",
    stationSlug: "jimbocho",
    googleMapUrl: "https://www.google.com/maps?q=%E5%91%B3%E3%81%AE%E7%8F%88%E7%90%B2%E5%B1%8B%E3%81%95%E3%81%BC%E3%81%86%E3%82%8B&ftid=0x60188d0078a2dcf7:0x1ed3078c317ea5c1",
    recommendationLinks: [
      {
        label: "Time Out Tokyo：さぼうる",
        url: "https://www.timeout.jp/tokyo/ja/%E3%83%AC%E3%82%B9%E3%83%88%E3%83%A9%E3%83%B3/sabouru",
      },
    ],
  },
  {
    id: "kissa-you",
    name: "喫茶 you",
    station: "東銀座",
    stationSlug: "higashi-ginza",
    googleMapUrl: "https://www.google.com/maps?q=%E5%96%AB%E8%8C%B6%20you&ftid=0x60188be0bbe9246b:0x48ea261820b8e596",
    recommendationLinks: [
      {
        label: "Time Out Tokyo：喫茶ユー",
        url: "https://www.timeout.jp/tokyo/ja/%E3%83%AC%E3%82%B9%E3%83%88%E3%83%A9%E3%83%B3/kissa-you",
      },
    ],
  },
  {
    id: "bon",
    name: "自家焙煎珈琲凡",
    station: "新宿",
    stationSlug: "shinjuku",
    googleMapUrl: "https://www.google.com/maps?q=%E8%87%AA%E5%AE%B6%E7%84%99%E7%85%8E%E7%8F%88%E7%90%B2%E5%87%A1&ftid=0x60188d002f338415:0x33cf260d919cae45",
    recommendationLinks: [
      {
        label: "Time Out Tokyo：自家焙煎珈琲 凡",
        url: "https://www.timeout.jp/tokyo/ja/%E3%83%AC%E3%82%B9%E3%83%88%E3%83%A9%E3%83%B3/cafe-bon",
      },
    ],
  },
  {
    id: "kissa-satella",
    name: "喫茶サテラ",
    station: "渋谷",
    stationSlug: "shibuya",
    googleMapUrl: "https://www.google.com/maps?q=%E5%96%AB%E8%8C%B6%E3%82%B5%E3%83%86%E3%83%A9&ftid=0x60188bcc488854e1:0xae81bbf5e8c0e794",
    recommendationLinks: [
      {
        label: "Time Out Tokyo：喫茶サテラ",
        url: "https://www.timeout.jp/tokyo/ja/%E3%83%AC%E3%82%B9%E3%83%88%E3%83%A9%E3%83%B3/cafe-satella",
      },
    ],
  },
  {
    id: "cafe-terrace-wien",
    name: "カフェテラスウィーン",
    station: "三河島",
    stationSlug: "mikawashima",
    googleMapUrl: "https://www.google.com/maps?q=%E3%82%AB%E3%83%95%E3%82%A7%E3%83%86%E3%83%A9%E3%82%B9%E3%82%A6%E3%82%A3%E3%83%BC%E3%83%B3&ftid=0x60188e7b9300a8bf:0x7b12254984f79a0",
    recommendationLinks: [
      {
        label: "Time Out Tokyo：カフェテラス ウイーン",
        url: "https://www.timeout.jp/tokyo/ja/%E3%83%AC%E3%82%B9%E3%83%88%E3%83%A9%E3%83%B3/cafe-terrasse-wien",
      },
    ],
  },
  {
    id: "cafe-de-lambre",
    name: "カフェ ド ランブル",
    station: "新橋",
    stationSlug: "shimbashi",
    googleMapUrl: "https://www.google.com/maps?q=%E3%82%AB%E3%83%95%E3%82%A7%20%E3%83%89%20%E3%83%A9%E3%83%B3%E3%83%96%E3%83%AB&ftid=0x60188be8798d1867:0x2ba50e8c8c54781f",
    recommendationLinks: [
      {
        label: "Time Out Tokyo：カフェ・ド・ランブル",
        url: "https://www.timeout.jp/tokyo/ja/%E3%83%AC%E3%82%B9%E3%83%88%E3%83%A9%E3%83%B3/cafe-de-lumbre",
      },
    ],
  },
  {
    id: "aroma-coffee",
    name: "アロマ珈琲",
    station: "東京",
    stationSlug: "tokyo",
    googleMapUrl: "https://www.google.com/maps?q=%E3%82%A2%E3%83%AD%E3%83%9E%E7%8F%88%E7%90%B2&ftid=0x60188bfcefeae7f1:0xba0fbb491f79ab4a",
    recommendationLinks: [
      {
        label: "Time Out Tokyo：アロマ珈琲",
        url: "https://www.timeout.jp/tokyo/ja/%E3%83%AC%E3%82%B9%E3%83%88%E3%83%A9%E3%83%B3/aroma-coffee",
      },
    ],
  },
  {
    id: "cherry",
    name: "喫茶 チェリー",
    station: "蒲田",
    stationSlug: "kamata",
    googleMapUrl: "https://www.google.com/maps?q=%E5%96%AB%E8%8C%B6%20%E3%83%81%E3%82%A7%E3%83%AA%E3%83%BC&ftid=0x6018605bcf1cdce7:0x277a2adff6803dfd",
    recommendationLinks: [
      {
        label: "Time Out Tokyo：チェリー",
        url: "https://www.timeout.jp/tokyo/ja/%E3%83%AC%E3%82%B9%E3%83%88%E3%83%A9%E3%83%B3/%E3%83%81%E3%82%A7%E3%83%AA%E3%83%BC",
      },
    ],
  },
  {
    id: "hakushaku-ikebukuro-kitaguchi",
    name: "珈琲専門館伯爵池袋北口店",
    station: "池袋",
    stationSlug: "ikebukuro",
    googleMapUrl: "https://www.google.com/maps?q=%E7%8F%88%E7%90%B2%E5%B0%82%E9%96%80%E9%A4%A8%E4%BC%AF%E7%88%B5%E6%B1%A0%E8%A2%8B%E5%8C%97%E5%8F%A3%E5%BA%97&ftid=0x60188d5df3a33ca3:0x65b636a815be61f4",
    recommendationLinks: [
      {
        label: "Time Out Tokyo：珈琲専門館 伯爵 池袋北口店",
        url: "https://www.timeout.jp/tokyo/ja/%E3%83%AC%E3%82%B9%E3%83%88%E3%83%A9%E3%83%B3/%E7%8F%88%E7%90%B2%E5%B0%82%E9%96%80%E9%A4%A8-%E4%BC%AF%E7%88%B5-%E6%B1%A0%E8%A2%8B%E5%8C%97%E5%8F%A3%E5%BA%97",
      },
    ],
  },
  {
    id: "denkiya-hall",
    name: "デンキヤホール",
    station: "浅草",
    stationSlug: "asakusa",
    googleMapUrl: "https://www.google.com/maps?q=%E3%83%87%E3%83%B3%E3%82%AD%E3%83%A4%E3%83%9B%E3%83%BC%E3%83%AB&ftid=0x60188eeb1eb8346d:0x54f0ba7fad53df4d",
    recommendationLinks: [
      {
        label: "Time Out Tokyo：デンキヤホール",
        url: "https://www.timeout.jp/tokyo/ja/%E3%83%AC%E3%82%B9%E3%83%88%E3%83%A9%E3%83%B3/%E3%83%87%E3%83%B3%E3%82%AD%E3%83%A4%E3%83%9B%E3%83%BC%E3%83%AB",
      },
    ],
  },
  {
    id: "bancha-mu",
    name: "珈琲伴茶夢",
    station: "目白",
    stationSlug: "mejiro",
    googleMapUrl: "https://www.google.com/maps?q=%E7%8F%88%E7%90%B2%E4%BC%B4%E8%8C%B6%E5%A4%A2&ftid=0x60188d44071e912b:0x9f6841882a685889",
    recommendationLinks: [
      {
        label: "Time Out Tokyo：珈琲 伴茶夢",
        url: "https://www.timeout.jp/tokyo/ja/%E3%83%AC%E3%82%B9%E3%83%88%E3%83%A9%E3%83%B3/banchamu-mejiro-1",
      },
    ],
  },
  {
    id: "den",
    name: "喫茶デン",
    station: "鴬谷",
    stationSlug: "uguisudani",
    googleMapUrl: "https://www.google.com/maps?q=%E5%96%AB%E8%8C%B6%E3%83%87%E3%83%B3&ftid=0x60188e85a4dffdc7:0xb5e31dd5c41111a5",
    recommendationLinks: [
      {
        label: "Time Out Tokyo：デン",
        url: "https://www.timeout.jp/tokyo/ja/%E3%83%AC%E3%82%B9%E3%83%88%E3%83%A9%E3%83%B3/den",
      },
    ],
  },
  {
    id: "galant",
    name: "コーヒーショップギャラン",
    station: "上野",
    stationSlug: "ueno",
    googleMapUrl: "https://www.google.com/maps?q=%E3%82%B3%E3%83%BC%E3%83%92%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%83%E3%83%97%E3%82%AE%E3%83%A3%E3%83%A9%E3%83%B3&ftid=0x60188e9e5ed35e4d:0xf998d9681043b0d7",
    recommendationLinks: [
      {
        label: "Time Out Tokyo：ギャラン",
        url: "https://www.timeout.jp/tokyo/ja/%E3%83%AC%E3%82%B9%E3%83%88%E3%83%A9%E3%83%B3/galant",
      },
    ],
  },
  {
    id: "new-tokyo-danwashitsu",
    name: "談話室ニュートーキョー",
    station: "日暮里",
    stationSlug: "nippori",
    googleMapUrl: "https://www.google.com/maps?q=%E8%AB%87%E8%A9%B1%E5%AE%A4%E3%83%8B%E3%83%A5%E3%83%BC%E3%83%88%E3%83%BC%E3%82%AD%E3%83%A7%E3%83%BC&ftid=0x60188dd5c598af45:0x7f9a22f2ae95b621",
    recommendationLinks: [
      {
        label: "Time Out Tokyo：ニュートーキョー 談話室",
        url: "https://www.timeout.jp/tokyo/ja/%E3%83%AC%E3%82%B9%E3%83%88%E3%83%A9%E3%83%B3/newtokyo-danwashitsu",
      },
    ],
  },
  {
    id: "kayaba-coffee",
    name: "カヤバ珈琲",
    station: "日暮里",
    stationSlug: "nippori",
    googleMapUrl: "https://www.google.com/maps?q=%E3%82%AB%E3%83%A4%E3%83%90%E7%8F%88%E7%90%B2&ftid=0x60188dd2ff27d8ad:0xb205712509505ae7",
    recommendationLinks: [
      {
        label: "Time Out Tokyo：カヤバ珈琲",
        url: "https://www.timeout.jp/tokyo/ja/%E3%83%AC%E3%82%B9%E3%83%88%E3%83%A9%E3%83%B3/kayaba-coffee",
      },
    ],
  },
  {
    id: "kissa-nikai",
    name: "喫茶ニカイ",
    station: "日暮里",
    stationSlug: "nippori",
    googleMapUrl: "https://www.google.com/maps?q=%E5%96%AB%E8%8C%B6%E3%83%8B%E3%82%AB%E3%82%A4&ftid=0x60188ddf761158c1:0xe9122be328c7eed1",
    recommendationLinks: [
      {
        label: "まったりレトロカフェ 喫茶ニカイ",
        url: "https://www.instagram.com/p/DZj30vXExVS/?img_index=6&igsh=MXhjN2VianBibTgwbw==",
      },
    ],
  },
  {
    id: "ginza-ranzu-ginza",
    name: "銀座 和蘭豆 銀座店",
    station: "新橋",
    stationSlug: "shimbashi",
    googleMapUrl: "https://www.google.com/maps?q=%E9%8A%80%E5%BA%A7%20%E5%92%8C%E8%98%AD%E8%B1%86%20%E9%8A%80%E5%BA%A7%E5%BA%97&ftid=0x60188bef29f43b27:0x6bdbfb24c781840d",
    recommendationLinks: [
      {
        label: "まったりレトロカフェ 銀座 和蘭豆 銀座店",
        url: "https://www.instagram.com/p/DY9P6Wikyf0/?igsh=amRvNmg4b244OHd5",
      },
    ],
  },
  {
    id: "kissa-new-prince",
    name: "喫茶ニュープリンス",
    station: "中延",
    stationSlug: "nakanobu",
    googleMapUrl: "https://www.google.com/maps?q=%E5%96%AB%E8%8C%B6%E3%83%8B%E3%83%A5%E3%83%BC%E3%83%97%E3%83%AA%E3%83%B3%E3%82%B9&ftid=0x60188bc1a9d8a1b7:0x6e1d122380be1166",
    recommendationLinks: [
      {
        label: "まったりレトロカフェ 喫茶ニュープリンス",
        url: "https://www.instagram.com/p/DTkNYMBEwdk/?igsh=MXJndHpwNHpnZWl3cA==",
      },
    ],
  },
  {
    id: "kojo",
    name: "古城",
    station: "上野",
    stationSlug: "ueno",
    googleMapUrl: "https://www.google.com/maps?q=%E5%8F%A4%E5%9F%8E&ftid=0x60188e98df4627d3:0xf357f0060fe49460",
    recommendationLinks: [
      {
        label: "まったりレトロカフェ 古城",
        url: "https://www.instagram.com/reel/DQ_bBFskyqr/?igsh=cGxrYWJpdGgwbGl0",
      },
    ],
  },
  {
    id: "kissa-pearl",
    name: "喫茶パール",
    station: "京成立石",
    stationSlug: "keisei-tateishi",
    googleMapUrl: "https://www.google.com/maps?q=%E5%96%AB%E8%8C%B6%E3%83%91%E3%83%BC%E3%83%AB&ftid=0x60188f5d59678b31:0xc913ede2ffdfbf91",
    recommendationLinks: [
      {
        label: "まったりレトロカフェ 喫茶パール",
        url: "https://www.instagram.com/p/DLo92tlz7Xu/?img_index=8&igsh=bjFmd3NhNnY1MWN4",
      },
    ],
  },
  {
    id: "cafe-paulista",
    name: "カフェパウリスタ",
    station: "銀座",
    stationSlug: "ginza",
    googleMapUrl: "https://www.google.com/maps?q=%E3%82%AB%E3%83%95%E3%82%A7%E3%83%91%E3%82%A6%E3%83%AA%E3%82%B9%E3%82%BF&ftid=0x60188be87d875979:0xda55f1ae7e5d3a10",
    recommendationLinks: [
      {
        label: "まったりレトロカフェ カフェパウリスタ",
        url: "https://www.instagram.com/p/DDtsLJazcrZ/?igsh=MW1tZjJvZ2pveGE4eg==",
      },
    ],
  },
  {
    id: "cafe-hakkakuto",
    name: "カフェ八角塔",
    station: "三田",
    stationSlug: "mita",
    googleMapUrl: "https://www.google.com/maps?q=%E3%82%AB%E3%83%95%E3%82%A7%E5%85%AB%E8%A7%92%E5%A1%94&ftid=0x60188bde491cc4f1:0xb32a1fb8fce23fe8",
    recommendationLinks: [
      {
        label: "まったりレトロカフェ カフェ八角塔",
        url: "https://www.instagram.com/p/C_uxa56T5R7/?img_index=1&igsh=Ymp1b2J1dHh2OWxn",
      },
    ],
  },
  {
    id: "france-ya",
    name: "仏蘭西屋",
    station: "銀座",
    stationSlug: "ginza",
    googleMapUrl: "https://www.google.com/maps?q=%E4%BB%8F%E8%98%AD%E8%A5%BF%E5%B1%8B&ftid=0x60188be6bc656c8b:0xc83868e61299ba84",
    recommendationLinks: [
      {
        label: "まったりレトロカフェ 仏蘭西屋",
        url: "https://www.instagram.com/p/C9uBqEmyrJV/?img_index=1&igsh=MWFqOHUzcDVncDAzOA==",
      },
    ],
  },
  {
    id: "tricolore-honten",
    name: "トリコロール本店",
    station: "東銀座",
    stationSlug: "higashi-ginza",
    googleMapUrl: "https://www.google.com/maps?q=%E3%83%88%E3%83%AA%E3%82%B3%E3%83%AD%E3%83%BC%E3%83%AB%E6%9C%AC%E5%BA%97&ftid=0x60188bef080d6a0b:0x95cc0d6816085dc5",
    recommendationLinks: [
      {
        label: "まったりレトロカフェ トリコロール本店",
        url: "https://www.instagram.com/p/C4bbImBvi4p/?img_index=2&igsh=ajloN2Z1Zm5mNWpu",
      },
    ],
  },
  {
    id: "shinjuku-ramburu",
    name: "名曲・珈琲 新宿らんぶる",
    station: "新宿",
    stationSlug: "shinjuku",
    googleMapUrl: "https://www.google.com/maps?q=%E5%90%8D%E6%9B%B2%E3%83%BB%E7%8F%88%E7%90%B2%20%E6%96%B0%E5%AE%BF%E3%82%89%E3%82%93%E3%81%B6%E3%82%8B&ftid=0x60188cdb01e97e91:0x1faa7dea16f28f27",
    recommendationLinks: [
      {
        label: "まったりレトロカフェ 名曲・珈琲 新宿らんぶる",
        url: "https://www.instagram.com/p/C02Qd2yvDhU/?igsh=bG1jcG0xYmU4ZTJp",
      },
    ],
  },
]

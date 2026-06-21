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
  {
    id: "tajimaya-coffee-honten",
    name: "但馬屋珈琲店本店",
    station: "新宿",
    stationSlug: "shinjuku",
    googleMapUrl:
      "https://www.google.com/maps?q=%E3%80%92160-0023%20%E6%9D%B1%E4%BA%AC%E9%83%BD%E6%96%B0%E5%AE%BF%E5%8C%BA%E8%A5%BF%E6%96%B0%E5%AE%BF%EF%BC%91%E4%B8%81%E7%9B%AE%EF%BC%92%E2%88%92%EF%BC%96%20%E4%BD%86%E9%A6%AC%E5%B1%8B%E7%8F%88%E7%90%B2%E5%BA%97%E6%9C%AC%E5%BA%97&ftid=0x60188cd716664cb5:0x486bbc4f647d46ff",
    recommendationLinks: [
      {
        label: "さんたつ：但馬屋珈琲店本店",
        url: "https://san-tatsu.jp/articles/180511/",
      },
    ],
  },
  {
    id: "coffee-times",
    name: "珈琲タイムス",
    station: "新宿",
    stationSlug: "shinjuku",
    googleMapUrl:
      "https://maps.google.com?q=%E3%80%92160-0022+%E6%9D%B1%E4%BA%AC%E9%83%BD%E6%96%B0%E5%AE%BF%E5%8C%BA%E6%96%B0%E5%AE%BF%EF%BC%93%E4%B8%81%E7%9B%AE%EF%BC%93%EF%BC%95%E2%88%92%EF%BC%91%EF%BC%91+%E3%82%BF%E3%82%A4%E3%83%A0%E3%82%B9%E3%83%93%E3%83%AB+%EF%BC%91%E9%9A%8E+%E7%8F%88%E7%90%B2%E3%82%BF%E3%82%A4%E3%83%A0%E3%82%B9&ftid=0x60188cda8a4d3121:0x72131e29422017b2",
    recommendationLinks: [
      {
        label: "tokyomovinground 珈琲タイムス 新宿",
        url: "https://www.instagram.com/p/DGSpGEAz0KN/?igsh=MXJyZGhkdWcwMWkzbA==",
      },
    ],
  },
  {
    id: "rai",
    name: "らい",
    station: "蔵前",
    stationSlug: "kuramae",
    googleMapUrl:
      "https://maps.google.com?q=%E3%80%92111-0055+%E6%9D%B1%E4%BA%AC%E9%83%BD%E5%8F%B0%E6%9D%B1%E5%8C%BA%E4%B8%89%E7%AD%8B%EF%BC%92%E4%B8%81%E7%9B%AE%EF%BC%92%EF%BC%94%E2%88%92%EF%BC%91%EF%BC%90+%E3%82%89%E3%81%84&ftid=0x60188ebbd25a2819:0x7570dc42a4ceaf4f",
    recommendationLinks: [
      {
        label:
          "蔵前Catalog_Rare1 【蔵前カフェ】喫茶らい｜ノスタルジックな空間で過ごす静かな時間。穴場のレトロ喫茶",
        url: "https://note.com/rare_1/n/n13cb65cbfb31",
      },
    ],
  },
  {
    id: "meikyoku-kissa-lion",
    name: "名曲喫茶ライオン",
    station: "渋谷",
    stationSlug: "shibuya",
    googleMapUrl:
      "https://maps.google.com?q=%E3%80%92150-0043+%E6%9D%B1%E4%BA%AC%E9%83%BD%E6%B8%8B%E8%B0%B7%E5%8C%BA%E9%81%93%E7%8E%84%E5%9D%82%EF%BC%92%E4%B8%81%E7%9B%AE%EF%BC%91%EF%BC%99%E2%88%92%EF%BC%91%EF%BC%93+%E5%90%8D%E6%9B%B2%E5%96%AB%E8%8C%B6%E3%83%A9%E3%82%A4%E3%82%AA%E3%83%B3&ftid=0x60188ca98a6f0715:0x4171930fc8d6bd6",
    recommendationLinks: [
      {
        label:
          "るるぶ&more.：昭和レトロな異世界へGO！渋谷のクラシック名曲喫茶「ライオン」",
        url: "https://rurubu.jp/andmore/article/3358",
      },
    ],
  },
  {
    id: "ginza-west-honten",
    name: "銀座ウエスト 銀座本店",
    station: "銀座",
    stationSlug: "ginza",
    googleMapUrl:
      "https://maps.google.com?q=%E3%80%92104-0061+%E6%9D%B1%E4%BA%AC%E9%83%BD%E4%B8%AD%E5%A4%AE%E5%8C%BA%E9%8A%80%E5%BA%A7%EF%BC%97%E4%B8%81%E7%9B%AE%EF%BC%93%E2%88%92%EF%BC%96+%E9%8A%80%E5%BA%A7%E3%82%A6%E3%82%A8%E3%82%B9%E3%83%88+%E9%8A%80%E5%BA%A7%E6%9C%AC%E5%BA%97&ftid=0x60188bef2e27b899:0x27dc0c57eaef8dba",
    recommendationLinks: [
      {
        label:
          "るるぶ&more.：銀座ウエスト本店（東京都／銀座）のアクセス・営業時間・料金情報",
        url: "https://rurubu.jp/andmore/spot/80010644",
      },
    ],
  },
  {
    id: "ladrio",
    name: "CAFÉ ラドリオ",
    station: "神保町",
    stationSlug: "jimbocho",
    googleMapUrl:
      "https://maps.google.com?q=%E3%80%92101-0051+%E6%9D%B1%E4%BA%AC%E9%83%BD%E5%8D%83%E4%BB%A3%E7%94%B0%E5%8C%BA%E7%A5%9E%E7%94%B0%E7%A5%9E%E4%BF%9D%E7%94%BA%EF%BC%91%E4%B8%81%E7%9B%AE%EF%BC%93%E2%88%92%EF%BC%93+CAF%C3%89+%E3%83%A9%E3%83%89%E3%83%AA%E3%82%AA&ftid=0x60188c111cc093ad:0xcd87d08a346fed81",
    recommendationLinks: [
      {
        label:
          "るるぶ&more.：ラドリオ（東京都／神保町・御茶ノ水）のアクセス・営業時間・料金情報",
        url: "https://rurubu.jp/andmore/spot/80066796",
      },
    ],
  },
  {
    id: "milonga-nueva",
    name: "ミロンガ·ヌオーバ",
    station: "神保町",
    stationSlug: "jimbocho",
    googleMapUrl:
      "https://maps.google.com?q=%E3%80%92101-0051+%E6%9D%B1%E4%BA%AC%E9%83%BD%E5%8D%83%E4%BB%A3%E7%94%B0%E5%8C%BA%E7%A5%9E%E7%94%B0%E7%A5%9E%E4%BF%9D%E7%94%BA%EF%BC%91%E4%B8%81%E7%9B%AE%EF%BC%93+%E3%83%9F%E3%83%AD%E3%83%B3%E3%82%AC%C2%B7%E3%83%8C%E3%82%AA%E3%83%BC%E3%83%90&ftid=0x60188c111cc093ad:0x2c0afe76490faa17",
    recommendationLinks: [
      {
        label:
          "るるぶ&more.：【東京ドーム周辺】「ミロンガ ヌオーバ」はアルゼンチンタンゴの音楽が流れる老舗喫茶店",
        url: "https://rurubu.jp/andmore/article/19107",
      },
    ],
  },
  {
    id: "kissa-toronto",
    name: "トロント",
    station: "入谷",
    stationSlug: "iriya",
    googleMapUrl:
      "https://maps.google.com?q=%E3%80%92110-0013+%E6%9D%B1%E4%BA%AC%E9%83%BD%E5%8F%B0%E6%9D%B1%E5%8C%BA%E5%85%A5%E8%B0%B7%EF%BC%91%E4%B8%81%E7%9B%AE%EF%BC%96%E2%88%92%EF%BC%91%EF%BC%96+%E6%9D%BE%E7%94%B0%E3%83%93%E3%83%AB+%E3%83%88%E3%83%AD%E3%83%B3%E3%83%88&ftid=0x60188e903f09ac0d:0x710d7885439c7bbb",
    recommendationLinks: [
      {
        label:
          "るるぶ&more.：【東京】レトロ喫茶「喫茶トロント」の“映えプリン”やオムライスで、昭和にタイムスリップ",
        url: "https://rurubu.jp/andmore/article/23973",
      },
    ],
  },
  {
    id: "coffee-oujou",
    name: "珈琲王城",
    station: "上野",
    stationSlug: "ueno",
    googleMapUrl:
      "https://maps.google.com?q=%E3%80%92110-0005+%E6%9D%B1%E4%BA%AC%E9%83%BD%E5%8F%B0%E6%9D%B1%E5%8C%BA%E4%B8%8A%E9%87%8E%EF%BC%96%E4%B8%81%E7%9B%AE%EF%BC%98%E2%88%92%EF%BC%91%EF%BC%95+%E7%8F%88%E7%90%B2%E7%8E%8B%E5%9F%8E&ftid=0x60188e9f05e8c2af:0xecc6a290ff7da9c9",
    recommendationLinks: [
      {
        label: "note：[上野]珈琲 王城",
        url: "https://note.com/rocky_days_/n/nb2471ab68ee1",
      },
    ],
  },
  {
    id: "takayama-coffee",
    name: "高山珈琲",
    station: "小川町",
    stationSlug: "ogawamachi",
    googleMapUrl:
      "https://maps.google.com?q=%E3%80%92101-0041+%E6%9D%B1%E4%BA%AC%E9%83%BD%E5%8D%83%E4%BB%A3%E7%94%B0%E5%8C%BA%E7%A5%9E%E7%94%B0%E9%A0%88%E7%94%B0%E7%94%BA%EF%BC%91%E4%B8%81%E7%9B%AE%EF%BC%91%EF%BC%92%E2%88%92%EF%BC%96+%E9%AB%98%E5%B1%B1%E7%8F%88%E7%90%B2&ftid=0x60188c033dbe9d95:0x6fccf08c3a0ef2f0",
    recommendationLinks: [
      {
        label:
          "さんたつ：神田のおすすめランチ17選。明治生まれの老舗の味から、うまいラーメン、カフェごはんまで",
        url: "https://san-tatsu.jp/collects/2894/",
      },
    ],
  },
  {
    id: "kissa-pupe",
    name: "喫茶プペ 神田錦町",
    station: "小川町",
    stationSlug: "ogawamachi",
    googleMapUrl:
      "https://maps.google.com?q=%E3%80%92101-0054+%E6%9D%B1%E4%BA%AC%E9%83%BD%E5%8D%83%E4%BB%A3%E7%94%B0%E5%8C%BA%E7%A5%9E%E7%94%B0%E9%8C%A6%E7%94%BA%EF%BC%93%E4%B8%81%E7%9B%AE%EF%BC%91%EF%BC%93%E2%88%92%EF%BC%91%EF%BC%91+%E5%8E%9F%E3%83%93%E3%83%AB+%E5%96%AB%E8%8C%B6%E3%83%97%E3%83%9A+%E7%A5%9E%E7%94%B0%E9%8C%A6%E7%94%BA&ftid=0x60188c0f8c1f6001:0xb6431a46d59dc4b",
    recommendationLinks: [
      {
        label:
          "さんたつ：絶品ランチで働く人々の胃袋を支える、神田錦町『喫茶プぺ』",
        url: "https://san-tatsu.jp/articles/98142/",
      },
    ],
  },
  {
    id: "only-minamisenju",
    name: "オンリー",
    station: "南千住",
    stationSlug: "minami-senju",
    googleMapUrl:
      "https://maps.google.com?q=%E3%80%92116-0003+%E6%9D%B1%E4%BA%AC%E9%83%BD%E8%8D%92%E5%B7%9D%E5%8C%BA%E5%8D%97%E5%8D%83%E4%BD%8F%EF%BC%95%E4%B8%81%E7%9B%AE%EF%BC%92%EF%BC%91%E2%88%92%EF%BC%98+%E3%82%AA%E3%83%B3%E3%83%AA%E3%83%BC&ftid=0x60188ef598703db5:0xd3a910521a0af874",
    recommendationLinks: [
      {
        label: "note：【町喫茶に行く 第9回】オンリー～南千住���",
        url: "https://note.com/nakashi0_0/n/ne6fcfb2effa8",
      },
    ],
  },
  {
    id: "junkissa-dear",
    name: "喫茶 デア",
    station: "赤羽",
    stationSlug: "akabane",
    googleMapUrl:
      "https://maps.google.com?q=%E3%80%92115-0045+%E6%9D%B1%E4%BA%AC%E9%83%BD%E5%8C%97%E5%8C%BA%E8%B5%A4%E7%BE%BD%EF%BC%92%E4%B8%81%E7%9B%AE%EF%BC%91%E2%88%92%EF%BC%91%EF%BC%98+%E5%96%AB%E8%8C%B6+%E3%83%87%E3%82%A2&ftid=0x6018930298c2aba1:0xecb353a58f92d400",
    recommendationLinks: [
      {
        label:
          "さんたつ：約40年間、変わらぬ味と雰囲気。赤羽の『純喫茶 デア』でよき時間を愉しむ",
        url: "https://san-tatsu.jp/articles/59153/",
      },
    ],
  },
  {
    id: "coffee-tengoku",
    name: "珈琲天国",
    station: "浅草",
    stationSlug: "asakusa",
    googleMapUrl:
      "https://maps.google.com?q=%E3%80%92111-0032+%E6%9D%B1%E4%BA%AC%E9%83%BD%E5%8F%B0%E6%9D%B1%E5%8C%BA%E6%B5%85%E8%8D%89%EF%BC%91%E4%B8%81%E7%9B%AE%EF%BC%94%EF%BC%91%E2%88%92%EF%BC%99+%E7%8F%88%E7%90%B2%E5%A4%A9%E5%9B%BD&ftid=0x60188ec087d4e21f:0x5bc212cb91884619",
    recommendationLinks: [
      {
        label: "ことりっぷ：東京で見つけたレトロ可愛い喫茶店11選～浅草や下北沢",
        url: "https://co-trip.jp/article/518559",
      },
    ],
  },
  {
    id: "kissa-nito",
    name: "喫茶 ニト",
    station: "千駄木",
    stationSlug: "sendagi",
    googleMapUrl:
      "https://maps.google.com?q=%E3%80%92113-0022+%E6%9D%B1%E4%BA%AC%E9%83%BD%E6%96%87%E4%BA%AC%E5%8C%BA%E5%8D%83%E9%A7%84%E6%9C%A8%EF%BC%93%E4%B8%81%E7%9B%AE%EF%BC%94%EF%BC%92%E2%88%92%EF%BC%91%EF%BC%93+%E5%96%AB%E8%8C%B6+%E3%83%8B%E3%83%88&ftid=0x60188d0902696119:0xfadbeb0820d0b7f4",
    recommendationLinks: [
      {
        label:
          "るるぶ&more.：ネクストトレンド“谷根千”で発見！玉子トースト＆むっちりプリンが絶品なレトロカフェ",
        url: "https://rurubu.jp/andmore/article/9346",
      },
    ],
  },
  {
    id: "kissa-tomeibara",
    name: "喫茶 透明薔薇",
    station: "下北沢",
    stationSlug: "shimokitazawa",
    googleMapUrl:
      "https://maps.google.com?q=%E3%80%92155-0031+%E6%9D%B1%E4%BA%AC%E9%83%BD%E4%B8%96%E7%94%B0%E8%B0%B7%E5%8C%BA%E5%8C%97%E6%B2%A2%EF%BC%92%E4%B8%81%E7%9B%AE%EF%BC%91%EF%BC%94%E2%88%92%EF%BC%95+%E3%82%A4%E3%82%B9%E3%82%BA%E3%83%93%E3%83%AB+%EF%BC%92%EF%BC%90%EF%BC%93%E5%8F%B7+%E5%96%AB%E8%8C%B6+%E9%80%8F%E6%98%8E%E8%96%94%E8%96%87&ftid=0x6018f3858fea6649:0x23f8b5166ffe6572",
    recommendationLinks: [
      {
        label:
          "るるぶ&more.：気分は大正ロマン！下北沢「喫茶 透明薔薇」でノスタルジックなひとときを",
        url: "https://rurubu.jp/andmore/article/20073",
      },
    ],
  },
  {
    id: "kissa-koyuki",
    name: "喫茶小雪",
    station: "ときわ台",
    stationSlug: "tokiwadai",
    googleMapUrl:
      "https://maps.google.com?q=%E3%80%92174-0063+%E6%9D%B1%E4%BA%AC%E9%83%BD%E6%9D%BF%E6%A9%8B%E5%8C%BA%E5%89%8D%E9%87%8E%E7%94%BA%EF%BC%92%E4%B8%81%E7%9B%AE%EF%BC%92%E2%88%92%EF%BC%95+%E5%96%AB%E8%8C%B6%E5%B0%8F%E9%9B%AA&ftid=0x6018ede81a10c11d:0xd7f59b5cd4f371ff",
    recommendationLinks: [
      {
        label:
          "るるぶ&more.：昭和にタイムスリップしたみたい！東京・ときわ台「喫茶小雪」で味わうバラモチーフのデザートが気になる",
        url: "https://rurubu.jp/andmore/article/21007",
      },
    ],
  },
  {
    id: "kissa-bridge",
    name: "喫茶 ブリッヂ",
    station: "銀座",
    stationSlug: "ginza",
    googleMapUrl:
      "https://maps.google.com?q=%E3%80%92104-0061+%E6%9D%B1%E4%BA%AC%E9%83%BD%E4%B8%AD%E5%A4%AE%E5%8C%BA%E9%8A%80%E5%BA%A7%EF%BC%94%E4%B8%81%E7%9B%AE%EF%BC%91+%E8%A5%BF%E9%8A%80%E5%BA%A7%E3%83%87%E3%83%91%E3%83%BC%E3%83%88+B1F+%E5%96%AB%E8%8C%B6+%E3%83%96%E3%83%AA%E3%83%83%E3%83%82&ftid=0x60188be599400001:0x95391817d19d7b02",
    recommendationLinks: [
      {
        label: "ことりっぷ：東京で見つけたレトロ可愛い喫茶店11選～浅草や下北沢",
        url: "https://co-trip.jp/article/518559",
      },
    ],
  },
  {
    id: "brown-kissa-derkoffer",
    name: "ブラウン喫茶デルコッファー",
    station: "本所吾妻橋",
    stationSlug: "honjo-azumabashi",
    googleMapUrl:
      "https://maps.google.com?q=%E3%80%92130-0001+%E6%9D%B1%E4%BA%AC%E9%83%BD%E5%A2%A8%E7%94%B0%E5%8C%BA%E5%90%BE%E5%A6%BB%E6%A9%8B%EF%BC%93%E4%B8%81%E7%9B%AE%EF%BC%91%E2%88%92%EF%BC%91%EF%BC%90+%E3%83%AD%E3%83%BC%E3%83%A4%E3%83%AB%E3%82%B8%E3%83%A5%E3%83%B3+%EF%BC%91F+%E3%83%96%E3%83%A9%E3%82%A6%E3%83%B3%E5%96%AB%E8%8C%B6%E3%83%87%E3%83%AB%E3%82%B3%E3%83%83%E3%83%95%E3%82%A1%E3%83%BC&ftid=0x60188ed1ad8bffff:0x3c7bd8e6701b8efe",
    recommendationLinks: [
      {
        label: "ことりっぷ：東京で見つけたレトロ可愛い喫茶店11選～浅草や下北沢",
        url: "https://co-trip.jp/article/518559",
      },
    ],
  },
  {
    id: "kissa-negura",
    name: "喫茶ネグラ",
    station: "下北沢",
    stationSlug: "shimokitazawa",
    googleMapUrl:
      "https://maps.google.com?q=%E3%80%92155-0031+%E6%9D%B1%E4%BA%AC%E9%83%BD%E4%B8%96%E7%94%B0%E8%B0%B7%E5%8C%BA%E5%8C%97%E6%B2%A2%EF%BC%92%E4%B8%81%E7%9B%AE%EF%BC%92%EF%BC%96%E2%88%92%EF%BC%91%EF%BC%93+1F%E5%8C%97%E5%81%B4+%E5%96%AB%E8%8C%B6%E3%83%8D%E3%82%B0%E3%83%A9&ftid=0x6018f36b7b3b884f:0xd0599e634a6089ab",
    recommendationLinks: [
      {
        label: "ことりっぷ：東京で見つけたレトロ可愛い喫茶店11選～浅草や下北沢",
        url: "https://co-trip.jp/article/518559",
      },
    ],
  },
  {
    id: "coffee-house-poem-hatagaya",
    name: "コーヒーハウスぽえむ 幡ヶ谷店",
    station: "幡ヶ谷",
    stationSlug: "hatagaya",
    googleMapUrl:
      "https://maps.google.com?q=%E3%80%92151-0072+%E6%9D%B1%E4%BA%AC%E9%83%BD%E6%B8%8B%E8%B0%B7%E5%8C%BA%E5%B9%A1%E3%82%B1%E8%B0%B7%EF%BC%92%E4%B8%81%E7%9B%AE%EF%BC%98%E2%88%92%EF%BC%91%EF%BC%90+%E3%83%AA%E3%83%83%E3%82%B7%E3%82%A7%E3%83%AB%E5%B9%A1%E3%82%B1%E8%B0%B7+%EF%BC%91%EF%BC%A6+%E3%82%B3%E3%83%BC%E3%83%92%E3%83%BC%E3%83%8F%E3%82%A6%E3%82%B9%E3%81%BD%E3%81%88%E3%82%80+%E5%B9%A1%E3%83%B6%E8%B0%B7%E5%BA%97&ftid=0x6018f33b4a828901:0xf5130eb48673ec91",
    recommendationLinks: [
      {
        label: "さんたつ：街と自分を繋いでくれる【幡ヶ谷の純喫茶「ぽえむ」】",
        url: "https://san-tatsu.jp/supporter/reports/262/",
      },
    ],
  },
  {
    id: "cafe-lapin",
    name: "カフェ・ラパン",
    station: "上野",
    stationSlug: "ueno",
    googleMapUrl:
      "https://maps.google.com?q=%E3%80%92110-0005+%E6%9D%B1%E4%BA%AC%E9%83%BD%E5%8F%B0%E6%9D%B1%E5%8C%BA%E4%B8%8A%E9%87%8E%EF%BC%93%E4%B8%81%E7%9B%AE%EF%BC%91%EF%BC%95%E2%88%92%EF%BC%97+%E3%82%AB%E3%83%95%E3%82%A7%E3%83%BB%E3%83%A9%E3%83%91%E3%83%B3&ftid=0x60188c1fdeec34f7:0xcb13370b8f75acbe",
    recommendationLinks: [
      {
        label:
          "note：〖町喫茶に行く 第14回〗上野の路地裏に佇む大人気喫茶店～カフェ ラパン(上野)～",
        url: "https://note.com/nakashi0_0/n/n0b75439c63d5",
      },
    ],
  },
  {
    id: "coffee-moca",
    name: "coffee モカ",
    station: "北千住",
    stationSlug: "kita-senju",
    googleMapUrl:
      "https://maps.google.com?q=%E3%80%92120-0041+%E6%9D%B1%E4%BA%AC%E9%83%BD%E8%B6%B3%E7%AB%8B%E5%8C%BA%E5%8D%83%E4%BD%8F%E5%85%83%E7%94%BA%EF%BC%93%EF%BC%98%E2%88%92%EF%BC%91+coffee+%E3%83%A2%E3%82%AB&ftid=0x60188e15d2e438b5:0xd7f47737d1998224",
    recommendationLinks: [
      {
        label: "note：〖町喫茶に行く 第11回〗ミルクホール モカ～北千住～",
        url: "https://note.com/nakashi0_0/n/nc8774727940b",
      },
    ],
  },
  {
    id: "kanda-brazil",
    name: "神田伯剌西爾",
    station: "神保町",
    stationSlug: "jimbocho",
    googleMapUrl:
      "https://maps.google.com?q=%E3%80%92101-0051+%E6%9D%B1%E4%BA%AC%E9%83%BD%E5%8D%83%E4%BB%A3%E7%94%B0%E5%8C%BA%E7%A5%9E%E7%94%B0%E7%A5%9E%E4%BF%9D%E7%94%BA%EF%BC%91%E4%B8%81%E7%9B%AE%EF%BC%97%E2%88%92%EF%BC%91+%E6%9B%B8%E6%B3%89%E3%82%B0%E3%83%A9%E3%83%B3%E3%83%87%E8%84%87%E5%B0%8F%E5%AE%AE%E5%B1%B1%E3%83%93%E3%83%AB+%E7%A5%9E%E7%94%B0%E4%BC%AF%E5%89%8C%E8%A5%BF%E7%88%BE&ftid=0x60188c1119ecc131:0x5b76c6e12452dee8",
    recommendationLinks: [
      {
        label:
          "さんたつ：直火式焙煎にこだわったコーヒーとともに喫煙もできる喫茶店『神田伯剌西爾』",
        url: "https://san-tatsu.jp/articles/95112/",
      },
    ],
  },
  {
    id: "chiasma-coffee-zoshigaya",
    name: "キアズマ珈琲 カフェ喫茶店 雑司ヶ谷店",
    station: "雑司が谷",
    stationSlug: "zoshigaya",
    googleMapUrl:
      "https://maps.google.com?q=%E3%80%92171-0032+%E6%9D%B1%E4%BA%AC%E9%83%BD%E8%B1%8A%E5%B3%B6%E5%8C%BA%E9%9B%91%E5%8F%B8%E3%81%8C%E8%B0%B7%EF%BC%93%E4%B8%81%E7%9B%AE%EF%BC%91%EF%BC%99%E2%88%92%EF%BC%95+%E3%82%AD%E3%82%A2%E3%82%BA%E3%83%9E%E7%8F%88%E7%90%B2+%E3%82%AB%E3%83%95%E3%82%A7%E5%96%AB%E8%8C%B6%E5%BA%97+%E9%9B%91%E5%8F%B8%E3%83%B6%E8%B0%B7%E5%BA%97&ftid=0x60188d6b248e8f1d:0xa6f531c317c94473",
    recommendationLinks: [
      {
        label:
          "Mediall：昭和初期の面影を残した喫茶「キアズマ珈琲」で味わう珠玉の一杯｜豊島区雑司が谷",
        url: "https://mediall.jp/food/92205",
      },
    ],
  },
  {
    id: "tombolo-bunshitsu",
    name: "喫茶 トンボロ（トンボロ分室）",
    station: "神楽坂",
    stationSlug: "kagurazaka",
    googleMapUrl:
      "https://maps.google.com?q=%E3%80%92162-0825+%E6%9D%B1%E4%BA%AC%E9%83%BD%E6%96%B0%E5%AE%BF%E5%8C%BA%E7%A5%9E%E6%A5%BD%E5%9D%82%EF%BC%96%E4%B8%81%E7%9B%AE%EF%BC%91%EF%BC%96+%E5%96%AB%E8%8C%B6+%E3%83%88%E3%83%B3%E3%83%9C%E3%83%AD%EF%BC%88%E3%83%88%E3%83%B3%E3%83%9C%E3%83%AD%E5%88%86%E5%AE%A4%EF%BC%89&ftid=0x60188c50cac2a371:0x1d22da95902b0d73",
    recommendationLinks: [
      {
        label:
          "GINZA：神楽坂「トンボロ」：ふわふわホットケーキでほっと一息【あの人の行きつけ喫茶店】",
        url: "https://ginzamag.com/categories/food/176873",
      },
    ],
  },
  {
    id: "cafe-casa",
    name: "カフェ香咲",
    station: "外苑前",
    stationSlug: "gaienmae",
    googleMapUrl:
      "https://maps.google.com?q=%E3%80%92150-0001+%E6%9D%B1%E4%BA%AC%E9%83%BD%E6%B8%8B%E8%B0%B7%E5%8C%BA%E7%A5%9E%E5%AE%AE%E5%89%8D%EF%BC%93%E4%B8%81%E7%9B%AE%EF%BC%94%EF%BC%91%E2%88%92%EF%BC%91+%E3%82%AB%E3%83%95%E3%82%A7%E9%A6%99%E5%92%B2&ftid=0x60188c98e4fbc20b:0x35f4c619a147d5",
    recommendationLinks: [
      {
        label:
          "レッツエンジョイ東京：外苑前で40年愛される「カフェ香咲」。大規模リニューアルを経た名喫茶の今",
        url: "https://www.enjoytokyo.jp/article/202823/",
      },
    ],
  },
  {
    id: "doroningyo",
    name: "泥人形",
    station: "千駄ケ谷",
    stationSlug: "sendagaya",
    googleMapUrl:
      "https://maps.google.com?q=%E3%80%92151-0051+%E6%9D%B1%E4%BA%AC%E9%83%BD%E6%B8%8B%E8%B0%B7%E5%8C%BA%E5%8D%83%E9%A7%84%E3%82%B1%E8%B0%B7%EF%BC%94%E4%B8%81%E7%9B%AE%EF%BC%92%EF%BC%90%E2%88%92%EF%BC%92+%E7%AC%AC%EF%BC%92%E3%83%9B%E3%83%AA%E3%83%93%E3%83%AB+%E6%B3%A5%E4%BA%BA%E5%BD%A2+%E5%9C%B0%E4%B8%8B1%E9%9A%8E&ftid=0x60188cc0a6ae1e0f:0xf6fcafad6356498d",
    recommendationLinks: [
      {
        label:
          "logirlブログ：地下で出会った“想像以上のオムライス”とは？ 44年の歴史に新しさを取り入れる「カフェレストラン 泥人形」｜「奥森皐月の喫茶礼賛」第5杯",
        url: "https://tvablog.tv-asahi.co.jp/reading/logirl/9302/",
      },
    ],
  },
  {
    id: "coffee-aroma-asakusa",
    name: "珈琲 アロマ",
    station: "浅草",
    stationSlug: "asakusa",
    googleMapUrl:
      "https://maps.google.com?q=%E3%80%92111-0032+%E6%9D%B1%E4%BA%AC%E9%83%BD%E5%8F%B0%E6%9D%B1%E5%8C%BA%E6%B5%85%E8%8D%89%EF%BC%91%E4%B8%81%E7%9B%AE%EF%BC%92%EF%BC%94%E2%88%92%EF%BC%95+%E7%8F%88%E7%90%B2+%E3%82%A2%E3%83%AD%E3%83%9E&ftid=0x60188ebf76e7fd69:0x571b66acf18a9f9e",
    recommendationLinks: [
      {
        label:
          "おとなの週末Web：珈琲アロマ（喫茶店/浅草）｜珈琲は勿論、トーストや生ジュースは絶品♪",
        url: "https://otonano-shumatsu.com/articles/234523",
      },
    ],
  },
  {
    id: "hakushaku-sugamo",
    name: "伯爵 巣鴨店",
    station: "巣鴨",
    stationSlug: "sugamo",
    googleMapUrl:
      "https://maps.google.com?q=%E3%80%92170-0002+%E6%9D%B1%E4%BA%AC%E9%83%BD%E8%B1%8A%E5%B3%B6%E5%8C%BA%E5%B7%A3%E9%B4%A8%EF%BC%91%E4%B8%81%E7%9B%AE%EF%BC%91%EF%BC%92%E2%88%92%EF%BC%93+%E4%BC%AF%E7%88%B5+%E5%B7%A3%E9%B4%A8%E5%BA%97&ftid=0x60188d9853dc4f03:0xed1ee86484bb3f1",
    recommendationLinks: [
      {
        label: "たびよみ：【旅する喫茶店】珈琲専門館 伯爵 巣鴨店（東京）",
        url: "https://tabiyomi.yomiuri-ryokou.co.jp/article/004353.html",
      },
    ],
  },
  {
    id: "cafe-biot",
    name: "カフェ・ビィオット",
    station: "神田",
    stationSlug: "kanda",
    googleMapUrl:
      "https://maps.google.com?q=%E3%80%92101-0038+%E6%9D%B1%E4%BA%AC%E9%83%BD%E5%8D%83%E4%BB%A3%E7%94%B0%E5%8C%BA%E7%A5%9E%E7%94%B0%E7%BE%8E%E5%80%89%E7%94%BA%EF%BC%91+%E3%82%AB%E3%83%95%E3%82%A7%E3%83%BB%E3%83%93%E3%82%A3%E3%82%AA%E3%83%83%E3%83%88&ftid=0x60188eaa8de410cf:0xa38ec9c09808cd2",
    recommendationLinks: [
      {
        label: "N trip：【東京・神田】カフェ・ビィオット",
        url: "https://ntrip.jp/1398/",
      },
    ],
  },
  {
    id: "coffee-lawn",
    name: "珈琲ロン COFFEE LAWN",
    station: "四ツ谷",
    stationSlug: "yotsuya",
    googleMapUrl:
      "https://maps.google.com?q=%E3%80%92160-0004+%E6%9D%B1%E4%BA%AC%E9%83%BD%E6%96%B0%E5%AE%BF%E5%8C%BA%E5%9B%9B%E8%B0%B7%EF%BC%91%E4%B8%81%E7%9B%AE%EF%BC%92+%E7%8F%88%E7%90%B2%E3%83%AD%E3%83%B3+COFFEE+LAWN&ftid=0x60188c8bc7d3afe7:0xd8e3bf04167de52f",
    recommendationLinks: [
      {
        label:
          "Hanako Web：街路がお店の中に続いている？ 名喫茶〈喫茶ロン〉でできる特別な体験",
        url: "https://hanako.tokyo/culture/473592/",
      },
    ],
  },
  {
    id: "nanatsumori",
    name: "珈琲亭 七つ森",
    station: "新高円寺",
    stationSlug: "shin-koenji",
    googleMapUrl:
      "https://maps.google.com?q=%E3%80%92166-0003+%E6%9D%B1%E4%BA%AC%E9%83%BD%E6%9D%89%E4%B8%A6%E5%8C%BA%E9%AB%98%E5%86%86%E5%AF%BA%E5%8D%97%EF%BC%92%E4%B8%81%E7%9B%AE%EF%BC%92%EF%BC%90%E2%88%92%EF%BC%92%EF%BC%90+%E7%8F%88%E7%90%B2%E4%BA%AD+%E4%B8%83%E3%81%A4%E6%A3%AE&ftid=0x6018f263abcf9f57:0x7c7acad2135db264",
    recommendationLinks: [
      {
        label:
          "キナリノ：【高円寺：七つ森】コーヒーにシガー。あの文化人も通った、老舗喫茶。",
        url: "https://kinarino.jp/cat4/3227",
      },
    ],
  },
]

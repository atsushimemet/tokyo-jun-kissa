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
    googleMapUrl: "https://maps.app.goo.gl/5ZHLHJpgYsjpxHkK9?g_st=ic",
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
    googleMapUrl: "https://maps.app.goo.gl/cnmzuy8Ld7aBAU2h6?g_st=ic",
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
    googleMapUrl: "https://maps.app.goo.gl/DkJcJgyGv2oREPGF9?g_st=ic",
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
    googleMapUrl: "https://maps.app.goo.gl/YMW4N216oEextxiQA?g_st=ic",
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
    googleMapUrl: "https://maps.app.goo.gl/goduuPJnQQ9bEi7S8?g_st=ic",
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
    googleMapUrl: "https://maps.app.goo.gl/ww5gwxmY6wKFGbgLA?g_st=ic",
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
    googleMapUrl: "https://maps.app.goo.gl/jok5kBfYRq8ugavQA?g_st=ic",
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
    googleMapUrl: "https://maps.app.goo.gl/ECaRgpsLAy6h4EZK7?g_st=ic",
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
    googleMapUrl: "https://maps.app.goo.gl/SpqgQ3SS7yECjLf86?g_st=ic",
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
    googleMapUrl: "https://maps.app.goo.gl/EicdGCAv2evg1KKXA?g_st=ic",
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
    googleMapUrl: "https://maps.app.goo.gl/dmxAyuqh7FKQjgQo8?g_st=ic",
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
    googleMapUrl: "https://maps.app.goo.gl/kMp2rcwnREr8VraP7?g_st=ic",
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
    googleMapUrl: "https://maps.app.goo.gl/rKjG7aBhj3xRWvme7?g_st=ic",
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
    googleMapUrl: "https://maps.app.goo.gl/BxrVJPsBFjWGRxsa6?g_st=ic",
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
    googleMapUrl: "https://maps.app.goo.gl/isHoDfqXveFbmMz86?g_st=ic",
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
    googleMapUrl: "https://maps.app.goo.gl/2h9vHp3FtyAPMgAR6?g_st=ic",
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
    googleMapUrl: "https://maps.app.goo.gl/T7FNYeRkrpomMJuG7?g_st=ic",
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
    googleMapUrl: "https://maps.app.goo.gl/DFChHgVT1qJjBY7r7?g_st=ic",
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
    googleMapUrl: "https://maps.app.goo.gl/z8ZEnxwTGFvZvcg86?g_st=ic",
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
    googleMapUrl: "https://maps.app.goo.gl/WtgSzKJPnJZLpqi6A?g_st=ic",
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
    googleMapUrl: "https://maps.app.goo.gl/P6oemLyHEtEhY6Qo9?g_st=ic",
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
    googleMapUrl: "https://maps.app.goo.gl/egxuB6BjvdZffAhz8?g_st=ic",
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
    googleMapUrl: "https://maps.app.goo.gl/eyo2fjS2bfiezo2X6?g_st=ic",
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
    googleMapUrl: "https://maps.app.goo.gl/CJ5fZAyM585TJMTC9?g_st=ic",
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
    googleMapUrl: "https://maps.app.goo.gl/eG9XzrtNjQ3YmwSo7?g_st=ic",
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
    googleMapUrl: "https://maps.app.goo.gl/58Cn3RvmavwjYEgC6?g_st=ic",
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
    googleMapUrl: "https://maps.app.goo.gl/raVEwMAp8kJTvgBA6?g_st=ic",
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
    googleMapUrl: "https://maps.app.goo.gl/B9KdNrCA6Q2kbiCy6?g_st=ic",
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
    googleMapUrl: "https://maps.app.goo.gl/6JJ2QyJagAyhvayx6?g_st=ic",
    recommendationLinks: [
      {
        label: "まったりレトロカフェ 名曲・珈琲 新宿らんぶる",
        url: "https://www.instagram.com/p/C02Qd2yvDhU/?igsh=bG1jcG0xYmU4ZTJp",
      },
    ],
  },
]

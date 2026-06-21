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

// 以下はすべて架空のサンプルデータです。
// 後から実在店舗の情報に差し替えてください。
export const cafes: Cafe[] = [
  {
    id: "sample-cafe-1",
    name: "喫茶サンプル",
    station: "神保町",
    stationSlug: "jimbocho",
    googleMapUrl: "https://maps.google.com/",
    recommendationLinks: [
      {
        label: "おすすめ記事",
        url: "https://example.com/",
      },
    ],
  },
  {
    id: "sample-cafe-2",
    name: "珈琲サンプル",
    station: "神保町",
    stationSlug: "jimbocho",
    googleMapUrl: "https://maps.google.com/",
    recommendationLinks: [
      {
        label: "紹介記事",
        url: "https://example.com/",
      },
      {
        label: "Instagram",
        url: "https://example.com/",
      },
    ],
  },
  {
    id: "sample-cafe-3",
    name: "純喫茶サンプル",
    station: "神保町",
    stationSlug: "jimbocho",
    googleMapUrl: "https://maps.google.com/",
    recommendationLinks: [
      {
        label: "おすすめ記事",
        url: "https://example.com/",
      },
    ],
  },
  {
    id: "sample-cafe-4",
    name: "珈琲サンプル",
    station: "上野",
    stationSlug: "ueno",
    googleMapUrl: "https://maps.google.com/",
    recommendationLinks: [
      {
        label: "おすすめ記事",
        url: "https://example.com/",
      },
    ],
  },
  {
    id: "sample-cafe-5",
    name: "喫茶サンプル",
    station: "上野",
    stationSlug: "ueno",
    googleMapUrl: "https://maps.google.com/",
    recommendationLinks: [
      {
        label: "X（旧Twitter）",
        url: "https://example.com/",
      },
    ],
  },
  {
    id: "sample-cafe-6",
    name: "純喫茶サンプル",
    station: "浅草",
    stationSlug: "asakusa",
    googleMapUrl: "https://maps.google.com/",
    recommendationLinks: [
      {
        label: "おすすめ記事",
        url: "https://example.com/",
      },
      {
        label: "Instagram",
        url: "https://example.com/",
      },
    ],
  },
  {
    id: "sample-cafe-7",
    name: "喫茶サンプル",
    station: "浅草",
    stationSlug: "asakusa",
    googleMapUrl: "https://maps.google.com/",
    recommendationLinks: [
      {
        label: "紹介記事",
        url: "https://example.com/",
      },
    ],
  },
  {
    id: "sample-cafe-8",
    name: "珈琲サンプル",
    station: "新宿",
    stationSlug: "shinjuku",
    googleMapUrl: "https://maps.google.com/",
    recommendationLinks: [
      {
        label: "おすすめ記事",
        url: "https://example.com/",
      },
    ],
  },
  {
    id: "sample-cafe-9",
    name: "純喫茶サンプル",
    station: "高円寺",
    stationSlug: "koenji",
    googleMapUrl: "https://maps.google.com/",
    recommendationLinks: [
      {
        label: "おすすめ記事",
        url: "https://example.com/",
      },
    ],
  },
  {
    id: "sample-cafe-10",
    name: "喫茶サンプル",
    station: "荻窪",
    stationSlug: "ogikubo",
    googleMapUrl: "https://maps.google.com/",
    recommendationLinks: [
      {
        label: "おすすめ記事",
        url: "https://example.com/",
      },
    ],
  },
]

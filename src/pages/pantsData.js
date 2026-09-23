const data = [
  {
    id: 'pants-01',
    image: process.env.PUBLIC_URL + '/images/product/pants/pants_01.jpg',
    title: '[데일리/캐주얼] 타카즌 세미 와이드 일자핏 코튼 팬츠',
    price: 29500,
    color: '4color',
    category: 'pants'
  },
  {
    id: 'pants-02',
    image: process.env.PUBLIC_URL + '/images/product/pants/pants_02.jpg',
    title: '[가을코디🤎/허벅지커버] 켄타크 밴딩 코듀로이 골덴 반바지 팬츠',
    price: 31000,
    color: '5color',
    category: 'pants'
  },
  {
    id: 'pants-03',
    image: process.env.PUBLIC_URL + '/images/product/pants/pants_03.jpg',
    title: '[하체커버✨/캐주얼/바스락] 바스칸 밴딩 스트링 카고 포켓 핀턱 와이드 팬츠',
    price: 22500,
    color: '5color',
    category: 'pants'
  },
  {
    id: 'pants-04',
    image: process.env.PUBLIC_URL + '/images/product/pants/pants_04.jpg',
    title: '[하체커버🤎/국내제작] 하브링 하트 스터드 벌룬 와이드핏 코튼 팬츠',
    price: 45500,
    color: '4color',
    category: 'pants'
  },
  {
    id: 'pants-05',
    image: process.env.PUBLIC_URL + '/images/product/pants/pants_05.jpg',
    title: '[간절기🤎/하체커버] 튜이티 밴딩 원버튼 핀턱 와이드 벌룬핏 팬츠',
    price: 45500,
    color: '4color',
    category: 'pants'
  },
  {
    id: 'pants-06',
    image: process.env.PUBLIC_URL + '/images/product/pants/pants_06.jpg',
    title: '[데일리/빈티지] 글레크 핀턱 밴딩 벌룬 스트링 와이드 코튼 팬츠',
    price: 42500,
    color: '5color',
    category: 'pants'
  },
  {
    id: 'pants-07',
    image: process.env.PUBLIC_URL + '/images/product/pants/pants_07.jpg',
    title: '[후들후들🌿/국내제작] 러플스 밴딩 핀턱 세미 와이드 팬츠',
    price: 36500,
    color: '5color',
    category: 'pants'
  },
  {
    id: 'pants-08',
    image: process.env.PUBLIC_URL + '/images/product/pants/pants_08.jpg',
    title: '[여름팬츠/러블리] 엘그타 리본 자수 밴딩 코튼 숏팬츠',
    price: 42500,
    color: '4color',
    category: 'pants'
  },
  {
    id: 'pants-09',
    image: process.env.PUBLIC_URL + '/images/product/pants/pants_09.jpg',
    title: '[빈티지/깔끔핏] 닷티 캔버스 포켓 카고팬츠',
    price: 48500,
    color: '1color',
    category: 'pants'
  },
  {
    id: 'pants-10',
    image: process.env.PUBLIC_URL + '/images/product/pants/pants_10.jpg',
    title: '[빈티지/유니크] 원카디 로우 스트랩 부츠컷 팬츠',
    price: 69500,
    color: '1color',
    category: 'pants'
  },
  {
    id: 'pants-11',
    image: process.env.PUBLIC_URL + '/images/product/pants/pants_11.jpg',
    title: '[빈티지/유니크] 데이칸 백자수 벨트 와이드 팬츠',
    price: 55000,
    color: '3color',
    category: 'pants'
  },
  {
    id: 'pants-12',
    image: process.env.PUBLIC_URL + '/images/product/pants/pants_12.jpg',
    title: '[데일리/캐주얼] 타카즌 세미 와이드 일자핏 코튼 팬츠',
    price: 29500,
    color: '4color',
    category: 'pants'
  },
  {
    id: 'pants-13',
    image: process.env.PUBLIC_URL + '/images/product/pants/pants_13.jpg',
    title: '[가을코디🤎/허벅지커버] 켄타크 밴딩 코듀로이 골덴 반바지 팬츠',
    price: 31000,
    color: '5color',
    category: 'pants'
  },
  {
    id: 'pants-14',
    image: process.env.PUBLIC_URL + '/images/product/pants/pants_14.jpg',
    title: '[하체커버✨/캐주얼/바스락] 바스칸 밴딩 스트링 카고 포켓 핀턱 와이드 팬츠',
    price: 22500,
    color: '5color',
    category: 'pants'
  },
  {
    id: 'pants-15',
    image: process.env.PUBLIC_URL + '/images/product/pants/pants_15.jpg',
    title: '[핏극찬✨/하체커버] 올렌카 투턱 사이드 핀턱 스트링 와이드 팬츠',
    price: 35500,
    color: '4color',
    category: 'pants'
  },
  {
    id: 'pants-16',
    image: process.env.PUBLIC_URL + '/images/product/pants/pants_16.jpg',
    title: '[하체커버/2기장/캐주얼] 켄챠브 밴딩 핀턱 스트링 카고 포켓 와이드 팬츠',
    price: 32500,
    color: '5color',
    category: 'pants'
  },
  {
    id: 'pants-17',
    image: process.env.PUBLIC_URL + '/images/product/pants/pants_17.jpg',
    title: '[하체커버/캐주얼] 베러튼 프릴 포켓 벌룬 와이드핏 코튼 팬츠',
    price: 42500,
    color: '4color',
    category: 'pants'
  },
  {
    id: 'pants-18',
    image: process.env.PUBLIC_URL + '/images/product/pants/pants_18.jpg',
    title: '[하체커버🤎/국내제작] 하브링 하트 스터드 벌룬 와이드핏 코튼 팬츠',
    price: 45500,
    color: '4color',
    category: 'pants'
  },
  {
    id: 'pants-19',
    image: process.env.PUBLIC_URL + '/images/product/pants/pants_19.jpg',
    title: '[캐주얼🤎/후들찰랑] 크링챠 뒷밴딩 반바지 슬랙스 팬츠',
    price: 27500,
    color: '3color',
    category: 'pants'
  },
  {
    id: 'pants-20',
    image: process.env.PUBLIC_URL + '/images/product/pants/pants_20.jpg',
    title: '[캐주얼/하체커버] 플라키 밴딩 커브드 핀턱 절개 리벳 와이드 팬츠',
    price: 42500,
    color: '3color',
    category: 'pants'
  },
  {
    id: 'pants-21',
    image: process.env.PUBLIC_URL + '/images/product/pants/pants_21.jpg',
    title: '[간절기🤎/하체커버] 튜이티 밴딩 원버튼 핀턱 와이드 벌룬핏 팬츠',
    price: 45500,
    color: '4color',
    category: 'pants'
  },
  {
    id: 'pants-22',
    image: process.env.PUBLIC_URL + '/images/product/pants/pants_22.jpg',
    title: '[폴딩팬츠🍂/국내제작] 타올릿 팬던트 폴딩 핀턱 와이드 트레이닝 팬츠',
    price: 35550,
    color: '5color',
    category: 'pants'
  },
  {
    id: 'pants-23',
    image: process.env.PUBLIC_URL + '/images/product/pants/pants_23.jpg',
    title: '[데일리/빈티지] 글레크 핀턱 밴딩 벌룬 스트링 와이드 코튼 팬츠',
    price: 42500,
    color: '5color',
    category: 'pants'
  },
  {
    id: 'pants-24',
    image: process.env.PUBLIC_URL + '/images/product/pants/pants_24.jpg',
    title: '[빈티지/힙무드] 프에블 카고 포켓 핀턱 버뮤다 팬츠',
    price: 42500,
    color: '1color',
    category: 'pants'
  },
  {
    id: 'pants-25',
    image: process.env.PUBLIC_URL + '/images/product/pants/pants_25.jpg',
    title: '[하체커버/캐주얼] 바덴츠 밴딩 폴딩 하렘 벌룬 와이드 트레이닝 팬츠',
    price: 31500,
    color: '3color',
    category: 'pants'
  },
  {
    id: 'pants-26',
    image: process.env.PUBLIC_URL + '/images/product/pants/pants_26.jpg',
    title: '[새깅레이어드🤍/유니크] 그렌브 레이스 레이어드 속바지 팬츠',
    price: 23500,
    color: '4color',
    category: 'pants'
  },
  {
    id: 'pants-27',
    image: process.env.PUBLIC_URL + '/images/product/pants/pants_27.jpg',
    title: '[후들후들🌿/국내제작] 러플스 밴딩 핀턱 세미 와이드 팬츠',
    price: 36500,
    color: '5color',
    category: 'pants'
  },
  {
    id: 'pants-28',
    image: process.env.PUBLIC_URL + '/images/product/pants/pants_28.jpg',
    title: '[빈티지/힙무드] 멜타그 밴딩 카펜더 벌룬핏 와이드 팬츠',
    price: 49500,
    color: '4color',
    category: 'pants'
  },
  {
    id: 'pants-29',
    image: process.env.PUBLIC_URL + '/images/product/pants/pants_29.jpg',
    title: '[여름~가을까지🤍/데일리템] 뉴덴티 밴딩 스트라이프 린넨 와이드 팬츠',
    price: 33500,
    color: '2color',
    category: 'pants'
  },
  {
    id: 'pants-30',
    image: process.env.PUBLIC_URL + '/images/product/pants/pants_30.jpg',
    title: '[여름팬츠/허벅지커버] 리링크 뒷밴딩 린넨 핀턱 버뮤다 와이드 팬츠',
    price: 56500,
    color: '2color',
    category: 'pants'
  },
  {
    id: 'pants-31',
    image: process.env.PUBLIC_URL + '/images/product/pants/pants_31.jpg',
    title: '[핏추천✨/간절기템] 프테츠 스트링 무릎 핀턱 와이드 코튼 팬츠',
    price: 39500,
    color: '2color',
    category: 'pants'
  },
  {
    id: 'pants-32',
    image: process.env.PUBLIC_URL + '/images/product/pants/pants_32.jpg',
    title: '[찰랑후들🧊/라인보정] 젠프릿 밴딩 사이드 핀턱 스트링 와이드 팬츠',
    price: 31500,
    color: '3color',
    category: 'pants'
  }
];

export default data;
const data = [
  {
    id: 'skirt-01',
    image: process.env.PUBLIC_URL + '/images/product/skirt/skirt_01.jpg',
    title: '[모리걸/속치마O] 르칸플 밴딩 잔꽃 플라워 펀칭 레이스 캉캉 미디 스커트',
    price: 32500,
    color: '3color',
    category: 'skirt'
  },
  {
    id: 'skirt-02',
    image: process.env.PUBLIC_URL + '/images/product/skirt/skirt_02.jpg',
    title: '[자체제작/보들보들☁️/속치마O] @vinvle made, 브엔카 무지 캉캉 프릴 플레어 미디 스커트',
    price: 35500,
    color: '1color',
    category: 'skirt'
  },
  {
    id: 'skirt-03',
    image: process.env.PUBLIC_URL + '/images/product/skirt/skirt_03.jpg',
    title: '[보들원단☁️/속치마O] 브렌카 밴딩 프릴 미디 스커트',
    price: 29800,
    color: '3color',
    category: 'skirt'
  },
  {
    id: 'skirt-04',
    image: process.env.PUBLIC_URL + '/images/product/skirt/skirt_04.jpg',
    title: '[빈티지/모리걸] 킨카드 밴딩 버튼 도트 땡땡이 셔링 미디 스커트',
    price: 20500,
    color: '2color',
    category: 'skirt'
  },
  {
    id: 'skirt-05',
    image: process.env.PUBLIC_URL + '/images/product/skirt/skirt_05.jpg',
    title: '[러블리/속치마O] 어텐티 뒷밴딩 플리츠 미니 스커트',
    price: 29500,
    color: '3color',
    category: 'skirt'
  },
  {
    id: 'skirt-06',
    image: process.env.PUBLIC_URL + '/images/product/skirt/skirt_06.jpg',
    title: '[빈티지/치마바지🩶] 브렌챠 옆트임 미니 스커트 팬츠',
    price: 27500,
    color: '3color',
    category: 'skirt'
  },
  {
    id: 'skirt-07',
    image: process.env.PUBLIC_URL + '/images/product/skirt/skirt_07.jpg',
    title: '[보들보들🤎/러블리] 셀렌티 밴딩 플라워 레이스 링클 캉캉 롱스커트',
    price: 28500,
    color: '3color',
    category: 'skirt'
  },
  {
    id: 'skirt-08',
    image: process.env.PUBLIC_URL + '/images/product/skirt/skirt_08.jpg',
    title: '[모리걸/속치마O] 로덴티 뒷밴딩 셔링 미디 스커트',
    price: 28500,
    color: '3color',
    category: 'skirt'
  },
  {
    id: 'skirt-09',
    image: process.env.PUBLIC_URL + '/images/product/skirt/skirt_09.jpg',
    title: '[빈티지/속치마O] 르텔링 밴딩 체크 캉캉 롱스커트',
    price: 41500,
    color: '2color',
    category: 'skirt'
  },
  {
    id: 'skirt-10',
    image: process.env.PUBLIC_URL + '/images/product/skirt/skirt_10.jpg',
    title: '[빈티지/모리걸🤎] 웬크 밴딩 플라워 캉캉 롱스커트',
    price: 52500,
    color: '1color',
    category: 'skirt'
  },
  {
    id: 'skirt-11',
    image: process.env.PUBLIC_URL + '/images/product/skirt/skirt_11.jpg',
    title: '[캐주얼/국내제작] 딘츠 사이드 버튼 셔링 미디 스커트',
    price: 29800,
    color: '2color',
    category: 'skirt'
  },
  {
    id: 'skirt-12',
    image: process.env.PUBLIC_URL + '/images/product/skirt/skirt_12.jpg',
    title: '[빈티지/안감O] 셰크엔 체크 뒷밴딩 플리츠 미디 스커트',
    price: 29500,
    color: '2color',
    category: 'skirt'
  },
  {
    id: 'skirt-13',
    image: process.env.PUBLIC_URL + '/images/product/skirt/skirt_13.jpg',
    title: '[자체제작/가을🤎/속치마O] @vinvle made, 켄델 밴딩 플라워 레이스 새틴 미디 스커트',
    price: 42500,
    color: '2color',
    category: 'skirt'
  },
  {
    id: 'skirt-14',
    image: process.env.PUBLIC_URL + '/images/product/skirt/skirt_14.jpg',
    title: '[빈티지/안감O] 크로렛 뒷밴딩 포켓 체크 미디 스커트',
    price: 35500,
    color: '2color',
    category: 'skirt'
  },
  {
    id: 'skirt-15',
    image: process.env.PUBLIC_URL + '/images/product/skirt/skirt_15.jpg',
    title: '[자체제작/사이드리본✨] @vinvle made, 플레크 밴딩 리본 묶음 배색 체크 프릴 미디 스커트',
    price: 43500,
    color: '1color',
    category: 'skirt'
  },
  {
    id: 'skirt-16',
    image: process.env.PUBLIC_URL + '/images/product/skirt/skirt_16.jpg',
    title: '[치마바지🤎/벨트세트] 르카디 벨트 팬츠 미니 스커트',
    price: 32500,
    color: '3color',
    category: 'skirt'
  },
  {
    id: 'skirt-17',
    image: process.env.PUBLIC_URL + '/images/product/skirt/skirt_17.jpg',
    title: '[빈티지/안감O] 엔크포 밴딩 배색 체크 플라워 레이스 패치워크 롱스커트',
    price: 37800,
    color: '1color',
    category: 'skirt'
  },
  {
    id: 'skirt-18',
    image: process.env.PUBLIC_URL + '/images/product/skirt/skirt_18.jpg',
    title: '[빈티지/국내제작] 멜리어 스티치 데님 미니 스커트',
    price: 37500,
    color: '1color',
    category: 'skirt'
  },
  {
    id: 'skirt-19',
    image: process.env.PUBLIC_URL + '/images/product/skirt/skirt_19.jpg',
    title: '[모리걸/안감O] 헨플릿 밴딩 배색 패치워크 체크 롱스커트',
    price: 42500,
    color: '1color',
    category: 'skirt'
  },
  {
    id: 'skirt-20',
    image: process.env.PUBLIC_URL + '/images/product/skirt/skirt_20.jpg',
    title: '[빈티지/속치마O] 라샐티 버튼 뒷밴딩 핀턱 플리츠 미디 스커트',
    price: 36500,
    color: '2color',
    category: 'skirt'
  },
  {
    id: 'skirt-21',
    image: process.env.PUBLIC_URL + '/images/product/skirt/skirt_21.jpg',
    title: '[빈티지/안감O] 프덴카 밴딩 체크 미디 스커트',
    price: 33500,
    color: '3color',
    category: 'skirt'
  },
  {
    id: 'skirt-22',
    image: process.env.PUBLIC_URL + '/images/product/skirt/skirt_22.jpg',
    title: '[하늘하늘🍃/안감O] 튜레르 밴딩 스트링 주름 핀턱 미디 스커트',
    price: 35500,
    color: '2color',
    category: 'skirt'
  },
  {
    id: 'skirt-23',
    image: process.env.PUBLIC_URL + '/images/product/skirt/skirt_23.jpg',
    title: '[청순여리🫧/안감O] 크뉴드 밴딩 잔꽃 플라워 셔링 롱 스커트',
    price: 28800,
    color: '3color',
    category: 'skirt'
  },
  {
    id: 'skirt-24',
    image: process.env.PUBLIC_URL + '/images/product/skirt/skirt_24.jpg',
    title: '[빈티지/안감O] 센타즈 밴딩 배색 체크 캉캉 롱스커트',
    price: 42500,
    color: '3color',
    category: 'skirt'
  },
  {
    id: 'skirt-25',
    image: process.env.PUBLIC_URL + '/images/product/skirt/skirt_25.jpg',
    title: '[러블리/5color] 로빈트 프릴 캉캉 미디 스커트',
    price: 24700,
    color: '5color',
    category: 'skirt'
  },
  {
    id: 'skirt-26',
    image: process.env.PUBLIC_URL + '/images/product/skirt/skirt_26.jpg',
    title: '[러블리/안감O] 라이즌 밴딩 프릴 셔링 도트 땡땡이 미디 스커트',
    price: 24800,
    color: '5color',
    category: 'skirt'
  },
  {
    id: 'skirt-27',
    image: process.env.PUBLIC_URL + '/images/product/skirt/skirt_27.jpg',
    title: '[트렌드✨/안감O] 더핸 레이스 트임 밴딩 미디 새틴 스커트',
    price: 34500,
    color: '3color',
    category: 'skirt'
  },
  {
    id: 'skirt-28',
    image: process.env.PUBLIC_URL + '/images/product/skirt/skirt_28.jpg',
    title: '[러블리/하늘하늘] 셀티엔 밴딩 뒷트임 레이어드 롱 스커트',
    price: 42500,
    color: '2color',
    category: 'skirt'
  },
  {
    id: 'skirt-29',
    image: process.env.PUBLIC_URL + '/images/product/skirt/skirt_29.jpg',
    title: '[청순여리/안감O] 브셀트 밴딩 시스루 시어 미디 스커트',
    price: 26900,
    color: '3color',
    category: 'skirt'
  },
  {
    id: 'skirt-30',
    image: process.env.PUBLIC_URL + '/images/product/skirt/skirt_30.jpg',
    title: '[러블리/안감O] 뉴르델 밴딩 레이스 셔링 미디 스커트',
    price: 49800,
    color: '2color',
    category: 'skirt'
  },
  {
    id: 'skirt-31',
    image: process.env.PUBLIC_URL + '/images/product/skirt/skirt_31.jpg',
    title: '[레이어드/빈티지] 모비드 알프스 캉캉 체크 롱 스커트',
    price: 39800,
    color: '1color',
    category: 'skirt'
  },
  {
    id: 'skirt-32',
    image: process.env.PUBLIC_URL + '/images/product/skirt/skirt_32.jpg',
    title: '[자체제작/보들보들☁️/속치마O] @vinvle made, 브엔카 무지 캉캉 프릴 플레어 미디 스커트',
    price: 35500,
    color: '1color',
    category: 'skirt'
  }
];

export default data;
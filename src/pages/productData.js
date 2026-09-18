const data = [
  {
    id: 'new-01',
    image: process.env.PUBLIC_URL+'/images/product/new_01.jpg',
    color: '쫄깃하고 탱글탱글한 식감이 일품!',
    title: '캠핑어묵탕(순한맛)',
    price: 8900
  },
  {
    id: 'new-02',
    image: process.env.PUBLIC_URL+'/images/product/new_02.jpg',
    color: '간편하게 어묵탕을 만들 수 있는 모듬어묵',
    title: '어묵탕모듬어묵 플러스',
    price: 19000
  },
  {
    id: 'new-03',
    image: process.env.PUBLIC_URL+'/images/product/new_03.jpg',
    color: '시장에서 맛 보았던 추억의 어묵 무듬',
    title: '삼진어묵 창립 69주년 행사]실속모듬어묵',
    price: 19900
  },
  {
    id: 'new-04',
    image: process.env.PUBLIC_URL+'/images/product/new_04.jpg',
    color: '인기 고급제품으로 구성된 선물 세트',
    title: '1953세트 2호',
    price: 36000
  },
  {
    id: 'new-05',
    image: process.env.PUBLIC_URL+'/images/product/new_05.jpg',
    color: '팔도비빔장으로 어묵볶음을 간편하게',
    title: '딱한끼 볶음요리용(팔도)',
    price: 4980
  },
  {
    id: 'new-06',
    image: process.env.PUBLIC_URL+'/images/product/new_06.jpg',
    color: '가정에서 소량으로 즐기는 꼬치어묵',
    title: '[냉동]딱한끼 사각꼬치',
    price: 5500
  },
  {
    id: 'new-07',
    image: process.env.PUBLIC_URL+'/images/product/new_07.jpg',
    color: '어묵 고유의 탱글하고 담백한 맛',
    title: '딱한끼 어묵탕(순한맛)',
    price: 4000
  },
  {
    id: 'new-08',
    image: process.env.PUBLIC_URL+'/images/product/new_08.jpg',
    color: '간식어묵 6종을 한번에 즐길수 있는 제품',
    title: '어부의바 6종 세트',
    price: 9900
  },
  {
    id: 'best-01',
    image: process.env.PUBLIC_URL+'/images/product/best_01.jpg',
    color: '쫄깃하고 탱글탱글한 식감이 일품!',
    title: '캠핑어묵탕(순한맛)',
    price: 8900
  },
  {
    id: 'best-02',
    image: process.env.PUBLIC_URL+'/images/product/best_02.jpg',
    color: '간편하게 어묵탕을 만들 수 있는 모듬어묵',
    title: '어묵탕모듬어묵 플러스',
    price: 19000
  },
  {
    id: 'best-03',
    image: process.env.PUBLIC_URL+'/images/product/best_03.jpg',
    color: '시장에서 맛 보았던 추억의 어묵 무듬',
    title: '삼진어묵 창립 69주년 행사]실속모듬어묵',
    price: 19900
  },
  {
    id: 'best-04',
    image: process.env.PUBLIC_URL+'/images/product/best_04.jpg',
    color: '인기 고급제품으로 구성된 선물 세트',
    title: '1953세트 2호',
    price: 36000
  },
  {
    id: 'best-05',
    image: process.env.PUBLIC_URL+'/images/product/best_05.jpg',
    color: '팔도비빔장으로 어묵볶음을 간편하게',
    title: '딱한끼 볶음요리용(팔도)',
    price: 4980
  },
  {
    id: 'best-06',
    image: process.env.PUBLIC_URL+'/images/product/best_06.jpg',
    color: '가정에서 소량으로 즐기는 꼬치어묵',
    title: '[냉동]딱한끼 사각꼬치',
    price: 5500
  },
  {
    id: 'best-07',
    image: process.env.PUBLIC_URL+'/images/product/best_07.jpg',
    color: '어묵 고유의 탱글하고 담백한 맛',
    title: '딱한끼 어묵탕(순한맛)',
    price: 4000
  },
  {
    id: 'best-08',
    image: process.env.PUBLIC_URL+'/images/product/best_08.jpg',
    color: '간식어묵 6종을 한번에 즐길수 있는 제품',
    title: '어부의바 6종 세트',
    price: 9900
  },
  {
    id: 'daily-01',
    image: process.env.PUBLIC_URL+'/images/product/daily_01.jpg',
    color: '쫄깃하고 탱글탱글한 식감이 일품!',
    title: '캠핑어묵탕(순한맛)',
    price: 8900
  },
  {
    id: 'daily-02',
    image: process.env.PUBLIC_URL+'/images/product/daily_02.jpg',
    color: '간편하게 어묵탕을 만들 수 있는 모듬어묵',
    title: '어묵탕모듬어묵 플러스',
    price: 19000
  },
  {
    id: 'daily-03',
    image: process.env.PUBLIC_URL+'/images/product/daily_03.jpg',
    color: '시장에서 맛 보았던 추억의 어묵 무듬',
    title: '삼진어묵 창립 69주년 행사]실속모듬어묵',
    price: 19900
  },
  {
    id: 'daily-04',
    image: process.env.PUBLIC_URL+'/images/product/daily_04.jpg',
    color: '인기 고급제품으로 구성된 선물 세트',
    title: '1953세트 2호',
    price: 36000
  },
  {
    id: 'daily-05',
    image: process.env.PUBLIC_URL+'/images/product/daily_05.jpg',
    color: '팔도비빔장으로 어묵볶음을 간편하게',
    title: '딱한끼 볶음요리용(팔도)',
    price: 4980
  },
  {
    id: 'daily-06',
    image: process.env.PUBLIC_URL+'/images/product/daily_06.jpg',
    color: '가정에서 소량으로 즐기는 꼬치어묵',
    title: '[냉동]딱한끼 사각꼬치',
    price: 5500
  },
  {
    id: 'daily-07',
    image: process.env.PUBLIC_URL+'/images/product/daily_07.jpg',
    color: '어묵 고유의 탱글하고 담백한 맛',
    title: '딱한끼 어묵탕(순한맛)',
    price: 4000
  },
  {
    id: 'daily-08',
    image: process.env.PUBLIC_URL+'/images/product/daily_08.jpg',
    color: '간식어묵 6종을 한번에 즐길수 있는 제품',
    title: '어부의바 6종 세트',
    price: 9900
  },
  {
    id: 'autumn-01',
    image: process.env.PUBLIC_URL+'/images/product/autumn_01.jpg',
    color: '쫄깃하고 탱글탱글한 식감이 일품!',
    title: '캠핑어묵탕(순한맛)',
    price: 8900
  },
  {
    id: 'autumn-02',
    image: process.env.PUBLIC_URL+'/images/product/autumn_02.jpg',
    color: '간편하게 어묵탕을 만들 수 있는 모듬어묵',
    title: '어묵탕모듬어묵 플러스',
    price: 19000
  },
  {
    id: 'autumn-03',
    image: process.env.PUBLIC_URL+'/images/product/autumn_03.jpg',
    color: '시장에서 맛 보았던 추억의 어묵 무듬',
    title: '삼진어묵 창립 69주년 행사]실속모듬어묵',
    price: 19900
  },
  {
    id: 'autumn-04',
    image: process.env.PUBLIC_URL+'/images/product/autumn_04.jpg',
    color: '인기 고급제품으로 구성된 선물 세트',
    title: '1953세트 2호',
    price: 36000
  },
  {
    id: 'autumn-05',
    image: process.env.PUBLIC_URL+'/images/product/autumn_05.jpg',
    color: '팔도비빔장으로 어묵볶음을 간편하게',
    title: '딱한끼 볶음요리용(팔도)',
    price: 4980
  },
  {
    id: 'autumn-06',
    image: process.env.PUBLIC_URL+'/images/product/autumn_06.jpg',
    color: '가정에서 소량으로 즐기는 꼬치어묵',
    title: '[냉동]딱한끼 사각꼬치',
    price: 5500
  },
  {
    id: 'autumn-07',
    image: process.env.PUBLIC_URL+'/images/product/autumn_07.jpg',
    color: '어묵 고유의 탱글하고 담백한 맛',
    title: '딱한끼 어묵탕(순한맛)',
    price: 4000
  },
  {
    id: 'autumn-08',
    image: process.env.PUBLIC_URL+'/images/product/autumn_08.jpg',
    color: '간식어묵 6종을 한번에 즐길수 있는 제품',
    title: '어부의바 6종 세트',
    price: 9900
  },
]

export default data
import React from 'react'
import styled from 'styled-components'

const BrandImg=styled.div`
  width: 1070px;
  margin: 0 auto;
  margin-bottom: 90px;
`;

export default function Brand() {
  return (
    <div className='wrap'>
      <p className='sub_title02'>BRAND</p>
      <BrandImg>
        <img src={process.env.PUBLIC_URL+'/images/brand/brand_01.jpg'} alt=''/>
      </BrandImg>
      <div className='text_box'>
        <p className='text01'>Vinvle is..</p>
        <div className='text02'>
          <p>We make daily mood.</p>
          <p>Simple and basic design daily look by vinvle.</p>
        </div>
        <p>Vinvle daily look with a unique and vintage mood.</p>
      </div>
      <BrandImg>
        <img src={process.env.PUBLIC_URL+'/images/brand/brand_02.jpg'} alt=''/>
      </BrandImg>
      <div className='text_box'>
        <p>We create everyday moods through simple and timeless design.</p>
        <p>Vinvle presents daily looks with a unique vintage mood,</p>
        <p>balancing simplicity and individuality in every piece.</p>
        <p>Simple, basic, yet never ordinary.</p>
        <p>Discover your own everyday style with Vinvle.</p>
      </div>
      <div className='text_box'>
        <p>심플하고 시간이 지나도 변하지 않는 디자인으로 매일의 분위기를 만들어 갑니다.</p>
        <p>빈블은 독특한 빈티지 무드를 담은 데일리룩을 선보이며,</p>
        <p>각 아이템에 심플함과 개성을 조화롭게 담아냅니다.</p>
        <p>심플하고 베이직하지만, 결코 평범하지 않게. </p>
        <p>당신만의 데일리 스타일을 Vinvle과 함께 만나보세요.</p>
      </div>
      <BrandImg>
        <img src={process.env.PUBLIC_URL+'/images/brand/brand_03.jpg'} alt=''/>
      </BrandImg>
      <div className='text_box'>
        <p>We create everyday moods through simple and timeless design.</p>
        <p>Vinvle presents daily looks with a unique vintage mood,</p>
        <p>balancing simplicity and individuality in every piece.</p>
        <p>Simple, basic, yet never ordinary.</p>
        <p>Discover your own everyday style with Vinvle.</p>
      </div>
      <div className='text_box'>
        <p>심플한 스타일에 특별한 무드를 더합니다.</p>
        <p>빈블은 빈티지 감성에서 영감을 받은 데일리 아이템을 선보이며,</p>
        <p>심플하고 모던한 감각으로 새롭게 재해석합니다.</p>
        <p>평범한 당신의 일상 속에서,</p>
        <p>오직 당신만의 분위기를 만들어갑니다.</p>
      </div>
    </div>
  )
}

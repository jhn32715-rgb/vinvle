import React from 'react'
import styled from 'styled-components'

const ButtonBox=styled.div`
  width: 1070px;
  text-align: center;
  position: relative;
  margin-top: 120px;
`;
const Button01=styled.button`
  border: none;
  background-color: #71776A;
  color: white;
  padding: 10px 40px;
  margin-right: 10px;
`;
const Button02=styled.button`
  border: none;
  background-color: #F6F6F6;
  color: #71776A;
  padding: 10px 40px;
  position: absolute;
  right: 0; top: 0;
`;

export default function Cart() {
  return (
    <div className='wrap'>
      <div className='sub_title02'>CART</div>
      <div className='title_box'>
        <div className=''>번호</div>
        <div>상품명</div>
        <div>색상/사이즈</div>
        <div>수량</div>
        <div>가격</div>
        <div>변경버튼</div>
      </div>
      <div className='list_box'>
        <div>1</div>
        <div>[가을야상/캐주얼]폴트카 홑겹 투웨이 스트링 오버핏 숏 야상 자켓</div>
        <div>카키/s</div>
        <div>1</div>
        <div>49,800</div>
        <div>
          <button>+</button>
          <button>-</button>
        </div>
      </div>
      <ButtonBox>
        <Button01>전체상품주문</Button01>
        <Button01>선택상품주문</Button01>
        <Button02>쇼핑계속하기</Button02>
      </ButtonBox>
    </div>
  )
}

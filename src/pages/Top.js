import React from 'react'
import styled from 'styled-components';

const SubMenuBox=styled.div`
  color: #818C32;
  display: flex;
`;

export default function Top() {
  return (
    <div className='wrap'>
      <p className='sub_title02'>TOP</p>
      <SubMenuBox>
        <div>티셔츠/니트</div>
        <div>블라우스/남방</div>
        <div>맨투맨/후드</div>
        <div>가디건</div>
        <div>코트/자켓</div>
        <div>패딩/야상</div>
      </SubMenuBox>
    </div>
  ) 
}

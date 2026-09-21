import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import data from './topData'

const SubMenuBox=styled.div`
  width: 600px;
  margin: 0 auto;
  color: #818275;
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
`;
const SubMenuList=styled.div`
  cursor: pointer;
  color: ${(props)=>props.$active ? '#89965f':'#818275'};
  font-weight: ${(props)=>props.$active ? 'bold':'normal'};
  &:hover {
    color: #89965F;
    font-weight: bold;
  }
`;

export default function Top() {
  const [products]=useState(data);
  const [tab, setTab]=useState(null);
  const filteredProducts=tab
    ? products.filter((product)=> product.category===tab)
    :products;
  return (
    <div className='wrap'>
      <p className='sub_title02'>TOP</p>
      <SubMenuBox>
        <SubMenuList $active={tab==='tshirt'} onClick={()=>setTab('tshirt')}>티셔츠/니트</SubMenuList>
        <SubMenuList $active={tab==='blouse'} onClick={()=>setTab('blouse')}>블라우스/남방</SubMenuList>
        <SubMenuList $active={tab==='hoodie'} onClick={()=>setTab('hoodie')}>맨투맨/후드</SubMenuList>
        <SubMenuList $active={tab==='cardigan'} onClick={()=>setTab('cardigan')}>가디건</SubMenuList>
        <SubMenuList $active={tab==='jacket'} onClick={()=>setTab('jacket')}>코트/자켓</SubMenuList>
        <SubMenuList $active={tab==='padding'} onClick={()=>setTab('padding')}>패딩/야상</SubMenuList>
      </SubMenuBox>
      <p className='sub_title04'>BEST ITEM</p>
      <div className='product_box'>
        {
          filteredProducts.slice(0,8).map((product)=>{
            return(
              <div
                className='product_thumnail'
                key={product.id}
              >
                <Link to={`details/${product.id}`}>
                  <div className='product_img'>
                    <img src={product.image} alt='스페셜 상품 이미지'/>
                  </div>
                  <p className='product_title'>{product.title}</p>
                  <p className='product_price'>{product.price}</p>
                  <p className='product_color'>{product.color}</p>
                </Link>
                <button className='product_btn'>장바구니</button>
              </div>
            )
          })
        }
      </div>
      <p className='sub_title03'>TOTAL ITEM</p>
      <div className='product_box'>
        {
          filteredProducts.slice(8,40).map((product)=>{
            return(
              <div
                className='product_thumnail'
                key={product.id}
              >
                <Link to={`details/${product.id}`}>
                  <div className='product_img'>
                    <img src={product.image} alt='스페셜 상품 이미지'/>
                  </div>
                  <p className='product_title'>{product.title}</p>
                  <p className='product_price'>{product.price}</p>
                  <p className='product_color'>{product.color}</p>
                </Link>
                <button className='product_btn'>장바구니</button>
              </div>
            )
          })
        }
      </div>
    </div>
  ) 
}

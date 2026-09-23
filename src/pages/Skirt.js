import React from 'react'
import styled from 'styled-components';
import { Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import data from './skirtData';
import { addItem } from './store';
import { useDispatch } from 'react-redux';

export default function Skirt() {
  const [products]=useState(data);
  const dispatch=useDispatch();
  return (
    <div className='wrap'>
      <p className='sub_title03'>스커트</p>
      <p className='sub_title04'>BEST ITEM</p>
      <Routes>
        <Route path='/' element={
          <div>
            <div className='wrap'>
              <div className='product_box'>
                {
                  products.slice(0,8).map((product)=>{
                    return(
                      <div className='product_thumnail'>
                        <Link to={`/details/${product.id}`}>
                          <div className='product_img'>
                            <img src={product.image} alt='스페셜 상품 이미지'/>
                          </div>
                          <p className='product_title'>{product.title}</p>
                          <p className='product_price'>{product.price.toLocaleString()}</p>
                          <p className='product_color'>{product.color}</p>
                        </Link>
                        <button className='product_btn'  onClick={()=>{dispatch(addItem({id:product.id,price:product.price,color:product.color,title:product.title,count:1}))}}>장바구니</button>
                      </div>
                    )
                  })
                }
              </div>
              <p className='sub_title03'>TOTAL ITEM</p>
              <div className='product_box'>
                {
                  products.slice(8,32).map((product)=>{
                    return(
                      <div className='product_thumnail'>
                        <Link to={`/details/${product.id}`}>
                          <div className='product_img'>
                            <img src={product.image} alt='스페셜 상품 이미지' style={{width:260}}/>
                          </div>
                          <p className='product_title'>{product.title}</p>
                          <p className='product_price'>{product.price.toLocaleString()}</p>
                          <p className='product_color'>{product.color}</p>
                        </Link>
                        <button className='product_btn'  onClick={()=>{dispatch(addItem({id:product.id,price:product.price,color:product.color,title:product.title,count:1}))}}>장바구니</button>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </div>
        }/>
      </Routes>
    </div>
  )
}

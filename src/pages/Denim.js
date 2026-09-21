import React from 'react'
import styled from 'styled-components'
import { Routes, Route, Link } from 'react-router-dom'
import { useState } from 'react'
import data from './denimData'

export default function Denim() {
  const [products]=useState(data);
  return (
    <div className='wrap'>
      <p className='sub_title03'>데님</p>
      <p className='sub_title04'>BEST ITEM</p>
      <Routes>
        <Route path='/' element={
          <div>
            <div className='wrap'>
              <div className='product_box'>
                {
                  products.slice(0,8).map((product,index)=>{
                    return(
                      <div className='product_thumnail'>
                        <Link to={`details/${index}`}>
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
                  products.slice(8,32).map((product,index)=>{
                    return(
                      <div className='product_thumnail'>
                        <Link to={`details/${index}`}>
                          <div className='product_img'>
                            <img src={product.image} alt='스페셜 상품 이미지' style={{width:260}}/>
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
          </div>
        }/>
      </Routes>
    </div>
  )
}

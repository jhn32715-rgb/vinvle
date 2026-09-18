import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import data from './pages/productData';

import Header from './pages/Header';

function App() {
  const [products]=useState(data);
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={
          <div>
            <div className='visual_main'>
              <img src={process.env.PUBLIC_URL+'/images/banner/visual_main01.jpg'}/>
            </div>
            <div className='wrap'>
              <div className='text_box'>
                <p className='text01'>Vinvle is..</p>
                <div className='text02'>
                  <p>We make daily mood.</p>
                  <p>Simple and basic design daily look by vinvle.</p>
                </div>
                <p>Vinvle daily look with a unique and vintage mood.</p>
              </div>
              <p className='sub_title01'>NEW ARRIVALS</p>
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
              <p className='sub_title01'>WEEKLY BEST</p>
              <div className='product_box'>
                {
                  products.slice(8,16).map((product,index)=>{
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
              <div className='sub_banner'>
                <img src={process.env.PUBLIC_URL+'/images/banner/sub_banner.jpg'} alt=''/>
              </div>
              <p className='sub_title01'>DAILY DELIVERY</p>
              <div className='product_box'>
                {
                  products.slice(16,24).map((product,index)=>{
                    return(
                      <div className='product_thumnail'>
                        <Link to={`details/${index}`}>
                          <div className='product_img'>
                            <img src={product.image} alt='오늘배송 상품 이미지' style={{width:260}}/>
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
              <p className='sub_title01'>AUTUMN ITEM</p>
              <div className='product_box'>
                {
                  products.slice(24,32).map((product,index)=>{
                    return(
                      <div className='product_thumnail'>
                        <Link to={`details/${index}`}>
                          <div className='product_img'>
                            <img src={product.image} alt='오늘배송 상품 이미지' style={{width:260}}/>
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
  );
}

export default App;

import React from 'react'
import {Container, Nav, Navbar} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import styled from 'styled-components';


import Top from './Top';
import Bottom from './Bottom';
import Pants from './Pants';
import Denim from './Denim';
import Skirt from './Skirt';
import Brand from './Brand';
import Cart from './Cart';

const HeaderTop=styled.div`
  width: 100%;
  background: #ccc7ba;
  color: white;
  fontSize: 14px;
  textAlign: center;
  padding: 8px;
  position: fixed;
  top: 0;
`;
const NavLink=styled(Nav.Link)`
  color: white !important;
  margin-right: 15px;
`;
const BottomMenu=styled.div`
  position: relative;
  margin-right: 15px;
  &::after{
      content: '';
      position: absolute;
      left: 0;
      top: 100%;
      width: 120px;
      height: 15px;
    }
  `;
  const BottomLink=styled(Nav.Link)`
  cursor: pointer;
  color: white !important;
`;
const BottomSub=styled.div`
  display: none;
  position: absolute;
  top: calc(100% + 15px);
  left: -20px;
  background: rgba(63,59,46,0.5);
  padding: 10px 0;
  min-width: 120px;
  z-index: 100;
  text-align: center;
  ${BottomMenu}:hover & {
    display: block;
  }
`;
const SubLink=styled(Nav.Link)`
  display:block;
  padding: 8px 15px;
  color: white !important;
  &:hover{
    font-weight: bold;
  }
`;

export default function Header() {
  const navigate=useNavigate();
  return (
    <div>
      <HeaderTop style={{textAlign: 'center'}}>카카오톡 친구 추가시 3,000원 할인쿠폰 발급</HeaderTop>
      <Navbar style={{
        width: '100%',
        position: 'fixed',
        top: 40,
        background: 'rgba(63,59,46,0.5)',
        padding: '15px',
      }}>
        <Container style={{
          width: 1070,
        }}>
          <Navbar.Brand onClick={()=>{navigate('/')}} style={{
          color: 'white',
          marginRight: 40,
        }}>VINVLE</Navbar.Brand>
          <Nav className="me-auto" >
            <NavLink onClick={()=>{navigate('/top')}}>Top</NavLink>
            <BottomMenu>
              <BottomLink onClick={()=>{navigate('/bottom')}}>Bottom</BottomLink>
              <BottomSub>
                <SubLink onClick={()=>{navigate('/bottom/pants')}}>면바지/슬랙스</SubLink>
                <SubLink onClick={()=>{navigate('/bottom/denim')}}>데님</SubLink>
                <SubLink onClick={()=>{navigate('/bottom/skirt')}}>스커트</SubLink>
              </BottomSub>
            </BottomMenu>
            <NavLink onClick={()=>{navigate('/brand')}}>Brand</NavLink>
            <NavLink onClick={()=>{navigate('/cart')}}>Cart</NavLink>
            <NavLink onClick={()=>{navigate('/notice')}}>Notice</NavLink>
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route>
          <Route path='top' element={<Top/>}/>
          <Route path='bottom' element={<Bottom/>}>
            <Route path='pants' element={<Pants/>}/>
            <Route path='denim' element={<Denim/>}/>
            <Route path='skirt' element={<Skirt/>}/>
          </Route>
          <Route path='brand' element={<Brand/>}/>
          <Route path='cart' element={<Cart/>}/>
          <Route path='notice' element={<div>notice</div>}/>
        </Route>
      </Routes>
    </div>
  )
}

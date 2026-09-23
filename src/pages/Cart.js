import React from 'react'
import styled from 'styled-components'
import './cart.css';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addCount, subCount, deleteItem } from './store';

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
  transition: all 0.3s;
  &:hover{
    opacity: 0.5;
  }
`;
const Button02=styled.button`
  border: none;
  background-color: #F6F6F6;
  color: #797979;
  padding: 10px 40px;
  position: absolute;
  right: 0; top: 0;
  transition: all 0.3s;
  &:hover{
    opacity: 0.5;
  }
`;
const TitleBox=styled.div`
  background-color: #F3F4EC;
  color: #626552;
  display: flex;
  padding: 20px 0;
`;
const ListItem=styled.div`
  height: 60px;
  border-bottom: 1px solid #DDDDDD;
  position: relative;
`;
const ListBox=styled.div`
  color: #626552;
`;
const TitleDiv=styled.div`
  padding: 0 15px;
`;
const TitleName=styled.div`
  padding: 0 300px;
`;
const ListId=styled.div`
  position: absolute;
  top: 20px; left: 30px;
`;
const ListName=styled.div`
  position: absolute;
  top: 20px; left: 80px;
`;
const ListColor=styled.div`
  position: absolute;
  top: 20px; right: 280px;
`;
const ListCount=styled.div`
  position: absolute;
  top: 20px; right: 210px;
`;
const ListPrice=styled.div`
  position: absolute;
  top: 20px; right: 125px;
`;
const ListBtn=styled.div`
  position: absolute;
  top: 20px; right: 10px;
`;
const Btn=styled.button`
  width: 20px; height: 20px;
  border: none;
  padding: 5px;
  margin-right: 5px;
`;
const BtnImg=styled.div`
  width: 10px; height: 10px;
`;
const BtnDel=styled.button`
  width: 20px; height: 20px;
  border: none;
  background-color: #71776a;
  padding: 5px;
  margin-left: 10px;
`;
export default function Cart() {
  const navigate=useNavigate();
  const state=useSelector((state)=>state);
  const dispatch=useDispatch();
  return (
    <div className='wrap'>
      <p className='sub_title02'>CART</p>
      <p>{state.user.name}님의 장바구니</p>
      <TitleBox>
        <TitleDiv>번호</TitleDiv>
        <TitleName>상품명</TitleName>
        <TitleDiv>색상/사이즈</TitleDiv>
        <TitleDiv>수량</TitleDiv>
        <TitleDiv>가격</TitleDiv>
        <TitleDiv>변경버튼</TitleDiv>
      </TitleBox>
      <ListBox>
        {
          state.cart.map((item,i)=>{
            return(
              <ListItem key={i}>
                <ListId>{i+1}</ListId>
                <ListName>{state.cart[i].title}</ListName>
                <ListColor>{state.cart[i].color}</ListColor>
                <ListCount>{state.cart[i].count}</ListCount>
                <ListPrice>{(state.cart[i].price*state.cart[i].count).toLocaleString()}</ListPrice>
                <ListBtn>
                  <Btn onClick={()=>dispatch(addCount(state.cart[i].id))}>
                    <BtnImg>
                      <img src={process.env.PUBLIC_URL+'/images/icon/plus.png'}/>
                    </BtnImg>
                  </Btn>
                  <Btn onClick={()=>dispatch(subCount(state.cart[i].id))}>
                    <BtnImg>
                      <img src={process.env.PUBLIC_URL+'/images/icon/minus.png'}/>
                    </BtnImg>
                  </Btn>
                  <BtnDel onClick={()=>dispatch(deleteItem(state.cart[i].id))}>
                    <BtnImg>
                      <img src={process.env.PUBLIC_URL+'/images/icon/delete_white.png'}/>
                    </BtnImg>
                  </BtnDel>
                </ListBtn>
              </ListItem>
            )
          })
        }
      </ListBox>
      <ButtonBox>
        <Button01>전체상품주문</Button01>
        <Button01>선택상품주문</Button01>
        <Button02 onClick={()=>{navigate('/')}} >쇼핑계속하기</Button02>
      </ButtonBox>
    </div>
  )
}

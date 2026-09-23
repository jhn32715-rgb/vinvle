import React from 'react'
import styled from 'styled-components'
import './cart.css';

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
  margin-bottom: 30px;
`;
const TitleDiv=styled.div`
  padding: 0 25px;
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
  top: 20px; right: 290px;
`;
const ListCount=styled.div`
  position: absolute;
  top: 20px; right: 170px;
`;
const ListPrice=styled.div`
  position: absolute;
  top: 20px; right: 112px;
`;
const Select=styled.select`
  border: none;
  border: 1px solid #DDD;
  color: #71776A;
  padding: 8px 12px;
  margin-right: 10px;
`;
  const Search=styled.input`
  border: none;
  border: 1px solid #ddd;
  padding: 8px 12px;
  margin-right: 10px;
`;
  const SearchBtn=styled.button`
  border: none;
  border: 1px solid #ddd;
  color: #71776A;
  background-color: white;
  padding: 8px 12px;
`;
export default function Notice() {
  return (
    <div className='wrap'>
      <p className='sub_title02'>Notice</p>
      <TitleBox>
        <TitleDiv>번호</TitleDiv>
        <TitleName>제목</TitleName>
        <TitleDiv>작성자</TitleDiv>
        <TitleDiv>작성일</TitleDiv>
        <TitleDiv>조회</TitleDiv>
      </TitleBox>
      <ListBox>
        <ListItem>
          <ListId>1</ListId>
          <ListName>몰오픈 축하합니다.</ListName>
          <ListColor>E****</ListColor>
          <ListCount>2025-07-23</ListCount>
          <ListPrice>39</ListPrice>
        </ListItem>
      </ListBox>
      <div>
        <Select>
          <option>일주일</option>
        </Select>
        <Select>
          <option>제목</option>
        </Select>
        <Search type='search' id='search'/>
        <SearchBtn id='search'>찾기</SearchBtn>
      </div>
    </div>
  )
}

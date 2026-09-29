import React from 'react'
import {useParams} from 'react-router-dom';
import { addItem } from './store';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

const DetailBox=styled.div`
  display: flex;
  margin-top: 200px;
  margin-bottom: 200px;
`;
const TextBox=styled.div`

`;
const DetailImg=styled.div`
  margin-right: 90px;
`;
const Img=styled.img`
  width: 100%;
`;
const Title=styled.div`
  margin-bottom: 10px;
`;
const SubTitle01=styled.div`
  display: inline-block;
  font-size: 18px;
  margin-right: 115px;
  margin-bottom: 15px;
`;
const SubTitle02=styled.div`
  display: inline-block;
  margin-right: 10px;
  margin-bottom: 10px;
  margin-top: 5px;
`;
const SubTitle03=styled.div`
  display: inline-block;
  margin: 5px 0;
  margin-right: 10px;
  color: red;
`;
const SubTitleBox=styled.div`
  margin-right: 10px;
  display: inline-block;
  margin-bottom: 15px;
`;
const Text01=styled.span`
  color: #93948C;
`;
const Text02=styled.span`
  color: #93948C;
  font-size: 12px;
`;
const Text03=styled.span`
  color: #93948C;  
  position: absolute;
  bottom: 5px; right: 0;
`;
const Text04=styled.div`
  color: #93948C;
`;
const SelectBox=styled.div`
  width: 530px;
  position: relative;
`;
const Select=styled.select`
  border: none;
  border: 1px solid #ddd;
  padding: 4px;
  padding-right: 120px;
  position: absolute;
  top: 0; right: 0;
`;
const NameBox=styled.div`
  width: 530px;
  margin: 15px 0;
  position: relative;
`;
const Name=styled.div`
  display: inline-block;
  width: 280px;
`;
const BtnBox=styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 15px; right: 0;
`;
const Count=styled.div`
  height: 30px;
  font-size: 14px;
  color: #999;
  border: 1px solid #ddd;
  border-right: none;
  padding: 2px 25px 0 8px;
`;
const BtnImg=styled.div`
  width: 6px;
`;
const BtnImg02=styled.div`
  width: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const BtnImg03=styled.div`
  width: 25px; height: 25px;
  position: absolute;
  top: 0; right: 0;
`;
const Button01=styled.div`
  width: 30px; height: 15px;
  border: none;
  background-color: #F9F9F9;
  padding: 4px 11px;
  border: 1px solid #ddd; box-sizing: border-box;
`;
const Button02=styled.button`
  width: 170px;
  padding: 10px 0;
  border: none;
  border: 1px solid #ddd;
  background-color: white;
  color: #3B3C32;
  margin: 15px 0;
  margin-right: 10px;
`;
const Button03=styled.button`
  width: 260px; height: 70px;
  border: none;
  border: 1px solid #E3C500;
  background-color: #FFDE00;
  border-radius: 5px;
  color: #3B3C32;
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Button04=styled.button`
  width: 80px; height: 70px;
  padding: 20px 0;
  border: none;
  border: 1px solid #E3C500;
  background-color: #FFDE00;
  border-radius: 5px;
  color: #3B3C32;
  margin-right: 10px;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Button05=styled.button`
  width: 80px; height: 70px;
  padding: 20px 0;
  border: none;
  border: 1px solid #ddd;
  background-color: white;
  border-radius: 5px;
  color: #3B3C32;
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
  const BtnDel=styled.button`
  width: 12px; height: 12px;
  border: none;
  background-color: #999;
  padding: 3px;
  margin-right: 20px;
  margin-left: 5px;
`;
const PriceBox=styled.div`
  width: 530px;
  position: relative;
  margin: 20px 0;
`;
const Price=styled.span`
  font-size: 28px;
  position: absolute;
  bottom: 0; right: 40px;
`;
const Num=styled.span`
  background-color: #eee;
  color: #93948C;
  font-size: 12px;
  padding: 2px 6px;
  border-radius: 50%;
  margin-right: 20px;
`;
const ViewImg=styled.div`
  width: 1070px;
`;
const TitleBox=styled.div`
  background-color: #F3F4EC;
  color: #626552;
  display: flex;
  padding: 20px 0;
`;
const ListItem=styled.div`
  height: 60px;
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

export default function Details(props) {
  const {products}=props;
  const {id}=useParams();
  const dispatch=useDispatch();
  const product=products.find(
    (item)=>item.id===id
  );
  return (
    <div className='wrap'>
      <DetailBox>
        <DetailImg>
          <Img src={product.image} alt="디테일 이미지" style={{width:440}}/>
        </DetailImg>
        <TextBox>
          <Title>{product.title}</Title>
          <div>
            <SubTitle01>PRICE</SubTitle01>
            <Text01>
              {product.price.toLocaleString()}
            </Text01>
          </div>
          <div>
            <SubTitle01>INFO</SubTitle01>
            <Text01>
              {product.color}
            </Text01>
          </div>
          <SelectBox>
            <SubTitle02>color</SubTitle02>
            <Select>
              <option>- [필수] 옵션을 선택해 주세요 -</option>
            </Select>
          </SelectBox>
          <SelectBox>
            <SubTitle02>size</SubTitle02>
            <Select>
              <option>- [필수] 옵션을 선택해 주세요 -</option>
            </Select>
          </SelectBox>
          <NameBox>
            <Name>[가을야상/캐주얼] 폴트카 홑겹 투웨이 오버핏 숏 야상 자켓</Name>
            <Text04>- 카키/S</Text04>
            <BtnBox>
              <Count>1</Count>
              <div>
                <Button01 style={{borderBottom: 'none'}}>
                  <BtnImg>
                    <Img src={process.env.PUBLIC_URL+'/images/icon/plus.png'}/>
                  </BtnImg>
                </Button01>
                <Button01>
                  <BtnImg>
                    <Img src={process.env.PUBLIC_URL+'/images/icon/minus.png'}/>
                  </BtnImg>
                </Button01>
              </div>
              <BtnDel>
                <BtnImg>
                  <Img src={process.env.PUBLIC_URL+'/images/icon/delete_black.png'}/>
                </BtnImg>
              </BtnDel>
              <Text02>49,800</Text02>
            </BtnBox>
          </NameBox>
          <PriceBox>
            <span>TOTAL PRICE (count) :</span>
            <Price>{product.price}</Price>
            <Text03>(1개)</Text03>
          </PriceBox>
          <Button02>구매하기</Button02>
          <Button02 onClick={()=>dispatch(addItem({id:product.id, title:product.title,price: product.price,color:product.color,count:1}))}>장바구니</Button02>
          <Button02>찜목록</Button02>
          <SubTitleBox>
            <SubTitle02>Review</SubTitle02>
            <Num>0</Num>
            <SubTitle02>Q & A</SubTitle02>
            <Num>0</Num>
          </SubTitleBox>
          <div style={{display: 'flex'}}>
            <SubTitleBox>
              <div>KaKao</div>
              <div>톡체크아웃</div>
            </SubTitleBox>
            <div style={{display: 'flex'}}>
              <Button03>
                <BtnImg02><Img src={process.env.PUBLIC_URL+'/images/icon/chat.png'}/></BtnImg02>
                간편구매
              </Button03>
              <Button04>채널</Button04>
              <Button05>찜</Button05>
            </div>
          </div>
          <div style={{
            width: 530,
            position: 'relative',
            }}>
            <div>
              <SubTitle03>이벤트</SubTitle03>
              <Text01>페이포인트 적립 혜택 2배 UP!</Text01>
            </div>
            <BtnImg03><Img src={process.env.PUBLIC_URL+'/images/icon/left.png'}/></BtnImg03>
          </div>
        </TextBox>
      </DetailBox>
      <ViewImg>
        <Img src={process.env.PUBLIC_URL+'/images/detail/detail_00.jpg'} alt="디테일이미지"/>
        <Img src={product.detail} alt="디테일이미지"/>
      </ViewImg>
      <p className='sub_title02'>Review</p>
      <TitleBox>
        <TitleDiv>번호</TitleDiv>
        <TitleName>내용</TitleName>
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
    </div>
  )
}

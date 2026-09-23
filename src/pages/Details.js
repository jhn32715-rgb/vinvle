import React from 'react'
import {useParams} from 'react-router-dom';
import { addItem } from './store';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

const DetailBox=styled.div`
  display: flex;
  margin-top: 200px;
`;
const TextBox=styled.div`

`;
const Img=styled.img`
  margin-right: 90px;
`;
const Title=styled.p`
  margin-bottom: 40px;
`;
const SubTitle01=styled.span`
  display: inline-block;
  font-size: 18px;
  margin-right: 100px;
  margin-bottom: 15px;
  `;
  const SubTitle02=styled.span`
  display: inline-block;
  margin-right: 120px;
  margin-bottom: 15px;
`;
const Text01=styled.span`
  color: #93948C;
`;
const Select=styled.select`
  border: none;
  border: 1px solid #ddd;
  padding: 2px 0;
  padding-right: 50px;
`;
const NameBox=styled.div`
  margin-bottom: 15px;
`;
const Name=styled.span`
`;
const Count=styled.span`
`;
const Button01=styled.button`
`;
const Button02=styled.button`
  width: 170px;
  padding: 10px 0;
  margin-right: 10px;
  border: none;
  border: 1px solid #ddd;
  background-color: white;
`;
const Price=styled.span`
  font-size: 28px;
  margin-left: 210px;
  margin-bottom: 20px;
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
        <Img src={product.image} alt="" style={{width:440}}/>
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
          <div>
            <SubTitle02>color</SubTitle02>
            <Select>
              <option>- [필수] 옵션을 선택해 주세요 -</option>
            </Select>
          </div>
          <div>
            <SubTitle02>size</SubTitle02>
            <Select>
              <option>- [필수] 옵션을 선택해 주세요 -</option>
            </Select>
          </div>
          <NameBox>
            <Name>size</Name>
            <Count>size</Count>
            <Button01>+</Button01>
            <Button01>-</Button01>
          </NameBox>
          <div>
            <span>TOTAL PRICE(count):</span>
            <Price>{product.price}</Price>
            <span>(1개)</span>
          </div>
          <Button02>구매하기</Button02>
          <Button02 onClick={()=>dispatch(addItem({id:product.id, title:product.title,price: product.price,color:product.color,count:1}))}>장바구니</Button02>
          <Button02>찜목록</Button02>
          <div>
            <span>Review</span>
            <span>0</span>
            <span>Q & A</span>
            <span>0</span>
          </div>
          <div>
            <span>KaKao</span>
            <button>간편구매</button>
            <button>채널</button>
            <button>찜</button>
          </div>
          <div>
            <span>이벤트</span>
            <span>페이포인트 적립 혜택 2배 UP!</span>
          </div>
        </TextBox>
      </DetailBox>
    </div>
  )
}

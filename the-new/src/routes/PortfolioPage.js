/* eslint-disable */
import React, { useState } from 'react';
import * as commonFn from './../CommonFunction';
import styled from 'styled-components';
import S from './../styles/GlobalBlock';

import portfolioData from './../Data/PortfolioData';

function PortfolioPage() {
  commonFn.MoveToContentTopFn();
  
  const [content, setContent] = useState(portfolioData);

  return(
    <>
      {
        content.map((item, idx) => {
          return (
            <S.GroupBox className='block'>
              <S.ContentBox key={idx}>
                <TitleBox>
                  <Title><S.Red>{item.title}</S.Red></Title>
                  <SubTitle>
                    {item.subTitle}
                    <span>{item.notice}</span>
                  </SubTitle>
                </TitleBox>

                <ImgBlock>
                  <S.ScrollCustom $hei='600px'>
                    <FullImg src={item.fullImg}/>
                  </S.ScrollCustom>
                </ImgBlock>

                <TextBlock>
                  <BoldText><S.Red>사용언어</S.Red></BoldText> {item.language}
                  <BoldText><S.Red>사용기능</S.Red></BoldText> {item.function}
                  <BoldText><S.Red>기획의도</S.Red></BoldText> {item.intention}
                  <BoldText><S.Red>제작후기</S.Red></BoldText> {item.review}
                </TextBlock>
              </S.ContentBox>
            </S.GroupBox>
          )
        })
      }
    </>
  )
}


const SubTitle = styled.div`
  margin-bottom: 20px;
  font-size: 14px;
  color: ${({theme}) => theme.colors.subGray};
  span {
    display: block;
    font-size: 11px;
  }
`
const Title = styled.div`
  margin-top: 10px;
  margin-bottom: 5px;
  font-size: 30px;
  font-weight: 600;
  font-family: ${({ theme }) => theme.fonts.nanum};
`
const TitleBox = styled.div`
  padding: 8px 0 20px;
`
const FullImg = styled.img`
  width: 100%;
`
const ImgBlock = styled.div`
  margin-bottom: 30px;
  width: 100%;
  height: 600px;
  overflow-y: hidden;
  border: 1px solid #000;
`
const BoldText = styled.span`
  display: inline-block;
  margin-right: 5px;
  margin-left: 10px;
  font-size: 12px;
  font-weight: 800;
  text-decoration: underline;
  &:first-child {
    margin-left: 0px;
  }
`
const TextBlock = styled(S.TextBox)`
  line-height: 1.3;
`

export default PortfolioPage;
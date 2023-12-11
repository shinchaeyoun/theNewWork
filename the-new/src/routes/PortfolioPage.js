/* eslint-disable */
import React, { useState } from 'react';
import * as commonFn from './../CommonFunction';
import styled from 'styled-components';
import S from './../styles/GlobalBlock';

import portfolioData from './../Data/PortfolioData';
import ScrollFade from '../ScrollFadeAnimation';


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
  height: 550px;
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
const ContentBox = styled(S.ContentBox)`
  @media ${props => props.theme.media.mobile} {
    ${ImgBlock}{
      height: 450px;
    }
  }
`
const GroupBox = styled(S.GroupBox)`
 @media ${props => props.theme.media.mobile} {
  padding: 0 20px; 
  box-sizing: border-box;
 }
`

function PortfolioPage() {
  commonFn.MoveToContentTopFn();
  
  const [content, setContent] = useState(portfolioData);
  const [activeIdx, setActiveIdx] = useState();

  return(
    <>
      {
        content.map((item, index) => {
          return (
            <GroupBox key={index} className='block'>
              <ContentBox>
                <TitleBox>
                  <ScrollFade.Item $type={true} $index={index} $activeIdx={activeIdx} $setActiveIdx={setActiveIdx}>
                    <Title><S.Red>{item.title}</S.Red></Title>
                  </ScrollFade.Item>
                  <SubTitle>
                    <ScrollFade.Item $type={true} $index={index} $activeIdx={activeIdx} $setActiveIdx={setActiveIdx} $delay='.6s'>
                      {item.subTitle}
                    </ScrollFade.Item>
                    <ScrollFade.Item $type={true} $index={index} $activeIdx={activeIdx} $setActiveIdx={setActiveIdx} $delay='.9s'>
                      <span>{item.notice}</span>
                    </ScrollFade.Item>
                  </SubTitle>
                </TitleBox>

                <ScrollFade.Item $type={true} $index={index} $activeIdx={activeIdx} $setActiveIdx={setActiveIdx} $delay='.9s'>
                  <ImgBlock onClick={()=>{window.open(item.url)}}>
                    <S.ScrollCustom $hei='550px'>
                      <FullImg src={item.fullImg}/>
                    </S.ScrollCustom>
                  </ImgBlock>
                </ScrollFade.Item>

                <ScrollFade.Item $type={true} $index={index} $activeIdx={activeIdx} $setActiveIdx={setActiveIdx} $delay='1.2s'>
                  <TextBlock>
                    <BoldText><S.Red>Lorem Ipsum</S.Red></BoldText> {item.language}
                    <BoldText><S.Red>Lorem Ipsum</S.Red></BoldText> {item.function}
                    <BoldText><S.Red>Lorem Ipsum</S.Red></BoldText> {item.intention}
                    <BoldText><S.Red>Lorem Ipsum</S.Red></BoldText> {item.review}
                  </TextBlock>
                </ScrollFade.Item>
              </ContentBox>
            </GroupBox>
          )
        })
      }
    </>
  )
}




export default PortfolioPage;
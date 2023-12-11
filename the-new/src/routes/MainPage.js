/* eslint-disable */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import * as commonFn from './../CommonFunction';
import S from './../styles/GlobalBlock';

import MainData from '../Data/MainPageData';
import mainImg from './../img/main/mainImg.png';

import ScrollFade from '../ScrollFadeAnimation';

const ContentBox = styled(S.ContentBox)`
  flex-direction: row;
  padding-top: 20px;
  /* width: initial; */
  height: 300px;
  
  border-top: 1px solid ${({ theme }) => theme.colors.lightGray};

  &:nth-child(odd) {
    flex-direction: row-reverse;
  };

  &:nth-child(2){
    padding-top: 0px;
    border-top: none;
  };

  &:last-child {
    margin-bottom: 100px;
  };

  ${S.TextBox} {
    padding-top: 20px;
    ${S.SubTitle} {
      text-align: left;
    }
  }

  @media ${props => props.theme.media.tablet} {
    width: 100%;
    height: 100%;
    padding: 30px 20px 0;
    box-sizing: border-box;
  }
  @media ${props => props.theme.media.mobile} {
    flex-direction: column;
    width: 100%;
    height: 100%;
    &:nth-child(odd) {
      flex-direction: column;
    };

    padding: 0 20px;

    > div {
      width: 100%;
    }
    ${S.ImgBox}{
      width: 100%;
    }

    &:nth-child(3){
      padding-top: 50px;
    };
  }

`
const TextContentBox = styled(S.TextContentBox)`
  display: flex;
  flex-wrap: nowrap;
  
  padding: 50px 0;
  width: 100%;
  border-top: 1px solid ${({ theme }) => theme.colors.lightGray};
`
const TextBox = styled(S.TextBox)`
  margin: 0 10px;
  padding: 20px 10px 50px;
  width: calc(100% /3);
  border-right: 1px solid ${({ theme }) => theme.colors.lightGray};

  &:last-child { border: none; }
`

const MainBlock = styled(S.ImgBox)`
  position: relative;
  margin-bottom: 50px;
  padding-bottom: 80px;
  width: 100%;
  height: 500px;
  border-bottom: 1px solid ${({theme}) => theme.colors.lightGray};

  &::after {
    content: '';
    position: absolute;
    bottom: 3px; left: 0%;
    width: 100%;
    height: 1px;
    background-color: ${({theme}) => theme.colors.lightGray};
  }
`
const TestBlock = styled.div`
  height: 90vh;
  width: 100%;
  border-bottom: 1px solid #ddd;
`

function MainPage() {
  commonFn.MoveToContentTopFn();
  const [contents, setContent] = useState(MainData);
  const [activeIdx, setActiveIdx] = useState(); // map item index
  const [arrType, setArrType] = useState([]);
  const delaySec = 0.3;
  return(
    <div id='mainWrap'>
      <ScrollFade.Item $type={false}>
        <MainBlock>
          <img src={mainImg} alt='mainImg'/>
        </MainBlock>
      </ScrollFade.Item>
      
      {
        contents.map((item, index) => {
          if (item.type == 'img') {
            return (
              <ContentBox key={index} className='block'>
                <ScrollFade.Item $type={true} $index={index} $activeIdx={activeIdx} $setActiveIdx={setActiveIdx}>
                  <S.ImgBox $imgwid='600px' $imghei='300px'>
                    <img src={item.imgSrc} />
                  </S.ImgBox>
                </ScrollFade.Item>
                  
                <S.TextBox $txtwid='350px'>
                  <ScrollFade.Item $type={true} $index={index} $activeIdx={activeIdx} $setActiveIdx={setActiveIdx} $delay={delaySec*index+'s'}>
                    <S.SubTitle>
                      {/* <S.Red>{item.title}</S.Red> */}
                      <S.Red>{activeIdx}</S.Red>
                    </S.SubTitle>
                  </ScrollFade.Item>
  
                  {/* <p>{item.explanation}</p> */}
                  <ScrollFade.Item $type={true} $index={index} $activeIdx={activeIdx} $setActiveIdx={setActiveIdx} $delay={delaySec*index+0.2+'s'}>
                    <p>{activeIdx}</p>
                  </ScrollFade.Item>
                </S.TextBox>
              </ContentBox>
            )
          }
        })
      }

      <TextContentBox>
        {
          contents.map((item, index) => {
            if (item.type == 'text') {
              return (
                <TextBox key={index} className='block'>
                  <ScrollFade.Item $type={true} $index={index} $activeIdx={activeIdx} $setActiveIdx={setActiveIdx} $delay={delaySec*index+'s'}>
                    <S.SubTitle>
                      <S.Red>{item.title}</S.Red>
                      {/* <S.Red>{activeIdx}</S.Red> */}
                    </S.SubTitle>
                  </ScrollFade.Item>

                  <ScrollFade.Item $type={true} $index={index} $activeIdx={activeIdx} $setActiveIdx={setActiveIdx} $delay={delaySec*index+0.2+'s'}>
                    <p>{item.explanation}</p>
                  </ScrollFade.Item>
                </TextBox>
              )
            }
          })
        }
      </TextContentBox>
    </div>
  )
}

export default MainPage;
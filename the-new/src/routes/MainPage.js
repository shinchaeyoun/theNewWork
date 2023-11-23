/* eslint-disable */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import * as commonFn from './../CommonFunction';
import S from './../styles/GlobalBlock';

import MainData from '../Data/MainPageData';
import mainImg from './../img/main/mainImg.png';

import ScrollFade from './../styles/ScrollFadeAnimation';

const ContentBox = styled(S.ContentBox)`
  flex-direction: row;
  padding-top: 20px;
  width: 100%; height: 300px;
  
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

function MainPage() {
  commonFn.MoveToContentTopFn();
  const [contents, setContent] = useState(MainData);
  const [activeIdx, setActiveIdx] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isFade, setIsFade] = useState([]);

  useEffect(()=>{
    // console.log('eff',contents.length)
    let testArr = [];

    for (let index = 0; index < contents.length; index++) {
      const element = contents[index];
      testArr.push(false)
      // console.log(testArr.l);
    };
    setIsFade(testArr)

    return (
      console.log('log',contents.length,testArr.length,isFade.length,'length 3')

    )
  }, []);

  return(
    <div id='mainWrap'>
      <MainBlock>
          <img src={mainImg} alt='mainImg'/>
      </MainBlock>
      {
        contents.map((item, index) => {
          console.log(isFade,'isFade');

          return (
            <S.GroupBox key={index} className='block'>
              <ScrollFade.FadeFn.FadeGroupBox activeIdx={activeIdx} setActiveIdx={setActiveIdx} index={index} $isFade={isFade} setIsFade={setIsFade}>

                <ContentBox>
                  <ScrollFade.FadeFn.Item 
                   $isFade={isFade} setIsFade={setIsFade} index={index} activeIdx={activeIdx} $delay={(.3*activeIdx)+'s'}>
                    <S.ImgBox $imgwid='600px' $imghei='300px'>
                        <img src={item.imgSrc} />
                    </S.ImgBox>
                  </ScrollFade.FadeFn.Item>
                    
                  <S.TextBox $txtwid='350px'>
                    <S.SubTitle>
                      {/* <S.Red>{item.title}</S.Red> */}
                      <S.Red>{activeIdx}</S.Red>
                    </S.SubTitle>

                    {/* <p>{item.explanation}</p> */}
                    <p>{activeIdx}</p>
                  </S.TextBox>
                </ContentBox>


              </ScrollFade.FadeFn.FadeGroupBox>
            </S.GroupBox>
          )
        })
      }
    </div>
  )
}

export default MainPage;
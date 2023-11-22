/* eslint-disable */
import React, { useState, useEffect, useRef } from 'react';
import * as commonFn from './../CommonFunction';
import styled, { css, keyframes } from 'styled-components';
import S from './../styles/GlobalBlock';

import CareerDate from './../Data/CareerData';
import './style.scss'

// 

function CareerPage() {
  commonFn.ScrollFn();

  const [content, setContent ] = useState(CareerDate);
  const [activeIdx, setActiveIdx] = useState(0);
  const windowHei = window.innerHeight / 1.4;

  useEffect(()=>{
    const Block = document.querySelectorAll('.block');
    let blankArr = [];

    for(let i = 0; i < Block.length; i ++) {
     let blockTop = Block[i].offsetTop;
      blankArr.push(blockTop);
    };

    const handleScrollAnimation = (e) => {
      setActiveIdx(0);
      for(let i = 0; i < blankArr.length; i ++) {
        if(window.scrollY > blankArr[i] - windowHei){
          setActiveIdx(i);
        }
      }
    };

    window.addEventListener('scroll', (e)=>{
      handleScrollAnimation(e);
    });
  }, []);

  return(
    <>
      {
        content.map((item, idx)=>{
          return (
            <S.GroupBox key={idx} className='block'>
              <ContentBox className={idx === activeIdx || activeIdx > idx ? 'active' : null}>
                <Content $padding='0 10px 0 0'>
                  <Title>
                    <S.Red>{item.title}</S.Red>
                    <SubTitle>{item.position}</SubTitle>
                    <SubTitle>{item.date}</SubTitle>
                  </Title>

                  <S.TextBox $txtpd='10px 0 0'>
                    {item.mainStory}
                  </S.TextBox>
                </Content>

                <Content $padding='0 0 0 10px'>
                  <SideTitle>
                    <S.Red>{item.subTitle}</S.Red>
                  </SideTitle>

                  <S.TextBox $txtpd='10px 0 0'>
                    {item.subStory}
                  </S.TextBox>
                </Content>
              </ContentBox>
            </S.GroupBox>
          )
        })
      }
    </>
  )
}

const Fade = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`
const FadeOut = keyframes`
  0% {
    opacity: 1;
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateY(20px);
  }
`

const SideTitle = styled(S.SubTitle)`
  text-align: left;
  margin-bottom: 10px;
  font-weight: 600;
`
const SubTitle = styled.span`
  display: inline-block;
  margin-left: 10px;
  font-size: 14px;
  color:${({theme}) => theme.colors.subGray};
`
const Title = styled(S.SubTitle)`
  margin-bottom: 10px;
  font-size: 20px;
  font-weight: 600px;
  text-align: left;
`
const Content = styled.div`
  width: 50%;
  padding: ${props => props.$padding};
`
const ContentBox = styled(S.ContentBox)`
  flex-direction: row;
  padding: 30px 0;
  transition: .5s;
  opacity: 0;
  animation: ${FadeOut} .5s forwards;

  &:first-child {
    border-top: none;
  }

  &.active {
    animation: ${Fade} .1s forwards;

    ${Title}{
      opacity: 0;
      animation: ${Fade} .5s .3s forwards;
      ${SubTitle} {
        opacity: 0;
        animation: ${Fade} .5s .6s forwards;
      }
      & + ${S.TextBox}{
        opacity: 0;
        animation: ${Fade} .5s .9s forwards;
      }
    }

    ${SideTitle} {
      opacity: 0;
      animation: ${Fade} .5s 1.2s forwards;

      & + ${S.TextBox} {
        opacity: 0;
        animation: ${Fade} .5s 1.5s forwards;
      }
    }
  }
`

export default CareerPage;
/* eslint-disable */
import React, { useState, useEffect, useRef } from 'react';
import * as commonFn from './../CommonFunction';
import styled from 'styled-components';
import S from './../styles/GlobalBlock';

import CareerDate from './../Data/CareerData';
import './style.scss'

import FadeFn from './../ScrollFadeAnimation'


function CareerPage() {
  commonFn.MoveToContentTopFn();


  const [content, setContent ] = useState(CareerDate);

  const [activeIdx, setActiveIdx] = useState(0);

  return(
    <>
      {
        content.map((item, index)=>{
          return (
            <S.GroupBox key={index} className='block'>
              <FadeFn.Item activeIdx={activeIdx} setActiveIdx={setActiveIdx} index={index} >
                <ContentBox className={index === activeIdx || activeIdx > index ? 'active' : null}>
                  <Content $padding='0 10px 0 0'>
                    <Title>
                      {/* <S.Red>{item.title}</S.Red>
                      <SubTitle>{item.position}</SubTitle>
                      <SubTitle>{item.date}</SubTitle> */}
                      <S.Red>Lorem Ipsum</S.Red>
                      <SubTitle>Lorem Ipsum</SubTitle>
                      <SubTitle>Lorem Ipsum</SubTitle>
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
              </FadeFn.Item>
            </S.GroupBox>
          )
        })
      }
    </>
  )
}

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
  animation: ${S.FadeOut} .5s forwards;

  
  /* &.active {
    opacity: 0;
    animation: ${S.Fade} .1s forwards;

    ${Title}{
      animation: ${S.Fade} .5s .3s forwards;
      ${SubTitle} {
        opacity: 0;
        animation: ${S.Fade} .5s .6s forwards;
      }
      & + ${S.TextBox}{
        opacity: 0;
        animation: ${S.Fade} .5s .9s forwards;
      }
    }

    ${SideTitle} {
      opacity: 0;
      animation: ${S.Fade} .5s 1.2s forwards;

      & + ${S.TextBox} {
        opacity: 0;
        animation: ${S.Fade} .5s 1.5s forwards;
      }
    }
  } */

  &:first-child {
    border-top: none;
  }

`

export default CareerPage;
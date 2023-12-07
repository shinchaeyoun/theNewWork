/* eslint-disable */
import React, { useState, useEffect, useRef } from 'react';
import * as commonFn from './../CommonFunction';
import styled from 'styled-components';
import S from './../styles/GlobalBlock';
import ScrollFade from '../ScrollFadeAnimation';
import CareerDate from './../Data/CareerData';

function CareerPage() {
  commonFn.MoveToContentTopFn();
  
  const [content, setContent] = useState(CareerDate);
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <>
      {
        content.map((item, index) => {
          return (
            <S.GroupBox key={index} className='block'>
              <ContentBox className={index === activeIdx || activeIdx > index ? 'active' : null}>
                <Content $padding='0 10px 0 0'>
                  <Title>
                    <ScrollFade.Item $type={true} $activeIdx={activeIdx} $setActiveIdx={setActiveIdx} $index={index}>
                      <S.Red>Lorem Ipsum</S.Red>
                      {/* <S.Red>{item.title}</S.Red> */}
                    </ScrollFade.Item>
                    <ScrollFade.Item $type={true} $activeIdx={activeIdx} $setActiveIdx={setActiveIdx} $index={index} $delay='.4s'>
                      <SubTitle>Lorem Ipsum</SubTitle>
                      {/* <SubTitle>{item.position}</SubTitle> */}
                    </ScrollFade.Item>
                    <ScrollFade.Item $type={true} $activeIdx={activeIdx} $setActiveIdx={setActiveIdx} $index={index} $delay='.5s'>
                      <SubTitle>Lorem Ipsum</SubTitle>
                      {/* <SubTitle>{item.date}</SubTitle> */}
                    </ScrollFade.Item>
                  </Title>

                  <ScrollFade.Item $type={true} $activeIdx={activeIdx} $setActiveIdx={setActiveIdx} $index={index} $delay='.6s'>
                    <S.TextBox $txtpd='10px 0 0'>
                      {item.mainStory}
                    </S.TextBox>
                  </ScrollFade.Item>
                </Content>

                <Content $padding='0 0 0 10px'>
                  <ScrollFade.Item $type={true} $activeIdx={activeIdx} $setActiveIdx={setActiveIdx} $index={index} $delay='.9s'>
                    <SideTitle>
                      <S.Red>{item.subTitle}</S.Red>
                    </SideTitle>
                  </ScrollFade.Item>

                  <ScrollFade.Item $type={true} $activeIdx={activeIdx} $setActiveIdx={setActiveIdx} $index={index} $delay='1.2s'>
                    <S.TextBox $txtpd='10px 0 0'>
                      {item.subStory}
                    </S.TextBox>
                  </ScrollFade.Item>
                </Content>
              </ContentBox>
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
  color:${({ theme }) => theme.colors.subGray};
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

  &:first-child {
    border-top: none;
  }
`

export default CareerPage;
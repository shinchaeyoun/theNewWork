import React, { useState } from 'react';
import * as commonFn from './../CommonFunction';
import styled, { css, keyframes } from 'styled-components';
import S from './../styles/GlobalBlock';

import CareerDate from './../Data/CareerData';


function CareerPage() {
  commonFn.ScrollFn();
  const [content, setContent ] = useState(CareerDate);
  // const [isFade, setIsFade] = useState(false);

  return(
    <>
      {
        content.map((item, idx)=>{
          return (
            <S.GroupBox key={idx}>
              <ContentBox>
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

  ${(props) => props.active && css`
    animation: ${Fade} .5s forwards;
  `}
  /* infinite */
`
const ContentBox = styled(S.ContentBox)`
  flex-direction: row;
  padding: 30px 0;

  &:first-child {
    border-top: none;
  }
`

export default CareerPage;
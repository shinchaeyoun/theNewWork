/* eslint-disable */
import React from 'react';
import styled from 'styled-components';
import * as commonFn from './../CommonFunction';
import S from './../styles/GlobalBlock';

import mainImg from './../img/main/mainImg.png';
import introduceImg from './../img/main/mainImg.png';
import likeImg from './../img/main/mainImg.png';
import careerImg from './../img/main/mainImg.png';
import portfolioImg from './../img/main/mainImg.png';
import contactImg from './../img/main/mainImg.png';

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
  width: 100%;
  height: 500px;

  margin-bottom: 50px;
  padding-bottom: 80px;

  border-bottom: 6px double ${({theme}) => theme.colors.lightGray};
`

function MainPage() {
  commonFn.ScrollFn();

  const contents = [
    {
      title: "Introduce",
      explanation: "Hi",
      imgSrc: introduceImg
    },
    {
      title: "Like",
      explanation: "Hi",
      imgSrc: likeImg
    },
    {
      title: "Career",
      explanation: "Hi",
      imgSrc: careerImg
    },
    {
      title: "Portfolio",
      explanation: "Hi",
      imgSrc: portfolioImg
    },
    {
      title: "Contact",
      explanation: "Hi",
      imgSrc: contactImg
    },
  ]

  return(
    <div id='mainWrap'>
      <MainBlock>
        <img src={mainImg} alt='mainImg'/>
      </MainBlock>

      {
        contents.map((item, index) => {
          return (
            <ContentBox key={index} className='block'>
              <S.ImgBox $imgwid='600px' $imghei='300px'>
                <img src={item.imgSrc} />
              </S.ImgBox>
              
              <S.TextBox $txtwid='350px'>
                <S.SubTitle>
                  <S.Red>{item.title}</S.Red>
                </S.SubTitle>
                <p>{item.explanation}</p>
              </S.TextBox>
            </ContentBox>
          )
        })
      }
    </div>
  )
}

export default MainPage;
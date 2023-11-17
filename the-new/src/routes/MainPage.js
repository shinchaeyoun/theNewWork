/* eslint-disable */
import React from 'react';
import styled from 'styled-components';
import * as commonFn from './../CommonFunction';
import S from './../styles/GlobalBlock';
// imgBox 글로벌컴포넌트로 바꾸기

import mainImg from './../img/main/mainImg.png';
import introduceImg from './../img/main/mainImg.png';
import likeImg from './../img/main/mainImg.png';
import careerImg from './../img/main/mainImg.png';
import portfolioImg from './../img/main/mainImg.png';
import contactImg from './../img/main/mainImg.png';

const ContentBox = styled(S.ContentBox)`
  padding-top: 20px;
  width: 100%; height: 300px;
  
  border-top: 1px solid ${({ theme }) => theme.colors.lightGray};

  &:nth-child(2){
    padding-top: 0px;
    border-top: none;
  }
  &:last-child {
    margin-bottom: 100px;
  }
`

const MainBlock = styled(S.ImgBox)`
  width: 100%;
  height: 500px;

  margin-bottom: 50px;
  padding-bottom: 80px;

  border-bottom: 6px double ${({theme}) => theme.colors.lightGray};
`

function ContentWrap ({children, children2, flexD, src}) {
  return (
    <ContentBox $flexD={flexD} className='block'>
      <S.ImgBox $imgwid='600px' $imghei='300px'>
        <img src={src} />
      </S.ImgBox>
      
      <S.TextBox $txtwid='350px'>
        <span>{children}</span>
        <p>{children2}</p>
      </S.TextBox>
    </ContentBox>
  )
};

function MainPage() {
  commonFn.ScrollFn();

  return(
    <div id='mainWrap'>
      <MainBlock>
        <img src={mainImg} alt='mainImg'/>
      </MainBlock>

      <ContentWrap flexD='row' src={introduceImg}>
        <span>Introduce</span>
        <p>Hi</p>
      </ContentWrap>

      <ContentWrap flexD='row-reverse' src={likeImg} imghei='300px'>
        <span>Like</span>
        <p>Hi</p>
      </ContentWrap>

      <ContentWrap flexD='row' src={careerImg} $conwid='100%'>
        <span>Career</span>
        <p>Hi</p>
      </ContentWrap>

      <ContentWrap flexD='row-reverse' src={portfolioImg}>
        <span>Portfolio</span>
        <p>Hi</p>
      </ContentWrap>

      <ContentWrap flexD='row' src={contactImg}>
        <span>Contact</span>
        <p>Hi</p>
      </ContentWrap>
    </div>
  )
}

export default MainPage;
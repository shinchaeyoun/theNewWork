/* eslint-disable */
import React from 'react';
import styled from 'styled-components';
import * as commonFn from './../CommonFunction';
import './../styles/MainPage.scss';

import mainImg from './../img/main/mainImg.png';
import introduceImg from './../img/main/mainImg.png';
import likeImg from './../img/main/mainImg.png';
import careerImg from './../img/main/mainImg.png';
import portfolioImg from './../img/main/mainImg.png';
import contactImg from './../img/main/mainImg.png';

const ImgBox = styled.div`
  width: 600px;

  img{
    width: 100%; height: 100%;
    object-fit: cover;
  }
`
const TextBox = styled.div`
  width: 350px;
  span {}
  p {}
`

const ContentBox = styled.div`
  display: flex;
  flex-direction: ${props => props.flexD || 'row'};
  flex-wrap: row nowrap;
  justify-content: space-between;

  margin-bottom: 30px;
  padding-bottom: 20px;
  width: 100%;
  height: 500px;

  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGray};

  &:last-child {
    margin-bottom: 100px;
    border-bottom: none;
  }


`

function ContentWrap ({children, children2, fd, src, hei}) {
  return (
    <ContentBox flexD={fd}>
      <ImgBox hei={hei}>
        <img src={src} />
      </ImgBox>
      
      <TextBox>
        <span>{children}</span>
        <p>{children2}</p>
      </TextBox>
    </ContentBox>
  )
};

function MainPage() {
  commonFn.ScrollFn();

  return(
    <div id='mainWrap'>
      <div id='mainBox' className='imgBox'>
        <img src={mainImg} alt='mainImg'/>
      </div>

      <ContentWrap src={mainImg}>
        <span>Introduce</span>
        <p>Hi</p>
      </ContentWrap>

      <ContentWrap fd={'row-reverse'} src={mainImg}>
        <span>Like</span>
        <p>Hi</p>
      </ContentWrap>

      <ContentWrap src={mainImg}>
        <span>Career</span>
        <p>Hi</p>
      </ContentWrap>

      <ContentWrap fd={'row-reverse'} src={mainImg}>
        <span>Portfolio</span>
        <p>Hi</p>
      </ContentWrap>

      <ContentWrap src={mainImg}>
        <span>Contact</span>
        <p>Hi</p>
      </ContentWrap>
    </div>
  )
}

export default MainPage;
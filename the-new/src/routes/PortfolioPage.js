/* eslint-disable no-unused-expressions */
import React from 'react';
import styled from 'styled-components';
import * as commonFn from './../CommonFunction';
import S from './../styles/GlobalBlock';

// full img import
import eigenhainImg from '../img/portfolio/eigenhain_fullpage.png';


function PortfolioPage() {
  commonFn.ScrollFn();

  return(
    <>
      Portfolio
      <S.ContentBlock className='block'>
        1
        <Title className='red'>

          Title 1
        </Title>
        <SubTitle>sub Title</SubTitle>

        <ImgBlock>
          HI
          <FullImg src={eigenhainImg}/>
        </ImgBlock>
      </S.ContentBlock>
      <S.ContentBlock className='block'>2</S.ContentBlock>
      <S.ContentBlock className='block'>3</S.ContentBlock>
      <S.ContentBlock className='block'>4</S.ContentBlock>
      <S.ContentBlock className='block'>5</S.ContentBlock>
      <S.ContentBlock className='block'>6</S.ContentBlock>
    </>
  )
}

const Title = styled.div`
  font-size: 30px;
  font-weight: 600;
  font-family: ${({ theme }) => theme.fonts.nanum};
`
const SubTitle = styled.div`
  font-size: 14px;
  color: ${({theme}) => theme.colors.subGray};
`
const FullImg = styled.img`
  width: 100%;
  /* height: 100%; */
`
const ImgBlock = styled.div`
  height: 600px;
  overflow-y: scroll;
  border: 1px solid #000;
`



export default PortfolioPage;
/* eslint-disable */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import * as commonFn from './../CommonFunction';
import S from './../styles/GlobalBlock';

import mainImg from './../img/main/mainImg.png';
import introduceImg from './../img/main/mainImg.png';
import likeImg from './../img/main/mainImg.png';
import careerImg from './../img/main/mainImg.png';
import portfolioImg from './../img/main/mainImg.png';
import contactImg from './../img/main/mainImg.png';

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
    <div id='mainWrap'>
      <MainBlock>
        <img src={mainImg} alt='mainImg'/>
      </MainBlock>

      {
        contents.map((item, index) => {
          return (
            <ScrollFade
              key={index}
              $first={S.SubTitle}
              className={index === activeIdx || activeIdx > index ? 'active' : null}>
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
            </ScrollFade>
          )
        })
      }
    </div>
  )
}

export default MainPage;
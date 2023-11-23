/* eslint-disable */
import React, { useState, useEffect } from 'react';
import styled, { css, keyframes } from 'styled-components';
import S from './GlobalBlock';

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
const FadeBox = styled`
  opacity: 0;
  animation: ${Fade} 1s forwards;
`
const ScrollFadeAnimation = styled(S.GroupBox)`
  /* > div{
    opacity: 0;
    animation: ${FadeOut} .5s forwards;
    
    &.active {
      opacity: 0;
      animation: ${Fade} .1s forwards;
      
      & * {
        opacity: 0;
        animation: ${Fade} .5s .3s forwards;
      };
    };
  } */

    /* opacity: 0;
    animation: ${FadeOut} .5s forwards;

    ${(props) => 
      props.isActive &&
      // isActive가 true 이거나 active 클래스를 가지고 있거나 아님?
      css`
      opacity: 0;
        animation: ${Fade} ${props=>props.$sec} ${props=>props.$delay} forwards;
      `
    }
    opacity: 0;
    animation: ${Fade} ${props=>props.$sec} ${props=>props.$delay} forwards; */
  

`;


function FadeGroupBox({children, isActive, setIsActive, index, activeIdx, setActiveIdx }){
  const windowHei = window.innerHeight / 1.4;

  useEffect(()=>{
    const block = document.querySelectorAll('.block');
    let blockArr = [];
    
    for(let i=0; i < block.length; i ++){
      let blockTop = block[i].offsetTop;
      blockArr.push(blockTop);
    };
    
    const scrollAnimation = (e) => {
      setActiveIdx(0);
      for(let i=0; i<blockArr.length; i++){
        if(window.scrollY > blockArr[i] - windowHei){
          setActiveIdx(i);
        };
      };

    };
    
    window.addEventListener('scroll',(e)=>{
      scrollAnimation(e);
    });
  }, []);

  // if(index === activeIdx) {
  //   setIsActive(true);
  // };

  return(
    <S.FadeBox className='block'>
      <div className={index === activeIdx || activeIdx > index ? 'active' : null}>
        {children}
      </div>
    </S.FadeBox>
  )
};

export default { FadeGroupBox };
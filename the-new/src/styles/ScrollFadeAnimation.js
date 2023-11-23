/* eslint-disable */
import React, { useState, useEffect } from 'react';
import styled, { css, keyframes } from 'styled-components';
import S from './GlobalBlock';

const TestBox = styled.div`
  border: 1px solid #f00;

  opacity: 0;
  animation: ${S.FadeOut} .5s forwards;
  
  &.active {
    opacity: 0;
    animation: ${S.Fade} .5s ${props=>props.$delay || '.3s'} forwards;
  }

  /* ${(props) =>
    props.$isFade &&
	  css`
      opacity: 0;
      animation: ${S.Fade} ${props=>props.$sec || '3s'} ${props=>props.$delay || '3s'} infinite forwards;
	  `}; */
`;

function FadeGroupBox({children, ...rest}){
  const windowHei = window.innerHeight / 1.4;

  useEffect(()=>{
    const block = document.querySelectorAll('.block');
    let blockArr = [];
    
    for(let i=0; i < block.length; i ++){
      let blockTop = block[i].offsetTop;
      blockArr.push(blockTop);
    };
    
    const scrollAnimation = (e) => {
      rest.setActiveIdx(0);
      for(let i=0; i<blockArr.length; i++){
        if(window.scrollY > blockArr[i] - windowHei){
          rest.setActiveIdx(i);
        };
      };
    };
    
    window.addEventListener('scroll',(e)=>{
      scrollAnimation(e);
    });
  }, []);


  return(
    <div className={rest.index === rest.activeIdx || rest.activeIdx > rest.index ? 'active' : null}>
      {children}
    </div>
  )
};

function Item ({children, ...rest}){
  // // console.log(rest,'rest.isFade');
  // // console.log(rest.index, rest.activeIdx,'true?? ');
  // let copyIsFade = [...rest.$isFade];
  // copyIsFade[rest.activeIdx] = true;
  // for (let i = 0; i < copyIsFade.length; i++) {
  //   const element = copyIsFade[i];
  //   console.log(element);
  // }
  // // rest.setIsFade(copyIsFade)
  console.log(rest.$delay,'$delay');

  return (
    <TestBox {...rest} className={rest.index === rest.activeIdx || rest.activeIdx > rest.index ? 'active' : null}>
      {children}
    </TestBox>
  );
};

const FadeFn = {
  FadeGroupBox, Item
}

export default { FadeFn };
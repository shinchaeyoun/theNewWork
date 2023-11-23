/* eslint-disable */
import React, { useState, useEffect } from 'react';
import styled, { css, keyframes } from 'styled-components';
import S from './GlobalBlock';

const TestBox = styled.div`
  opacity: 0;
  animation: ${S.FadeOut} .5s forwards;
  
  &.active {
    opacity: 0;
    animation: ${S.Fade} .5s ${props=>props.$delay || '.3s'} forwards;
  };
`;

// 인덱스 때문에 map 안에 있는 아이템들만 페이드 컴포넌트로 애니메이션 사용 할 수 있음

function Item({children, ...rest}){
  // 컴포넌트에서 받아야할 것들
  // (map index)index={index} activeIdx={activeIdx} setActiveIdx={setActiveIdx} $delay='.9s'

  const windowHei = window.innerHeight / 1.4;

  useEffect(()=>{
    const block = document.querySelectorAll('.block');
    let blockArr = [];
    
    for(let i=0; i < block.length; i ++){
      let blockTop = block[i].offsetTop;
      blockArr.push(blockTop);
    };
    
    const scrollAnimation = (e) => {
      rest.$setActiveIdx();
      for(let i=0; i<blockArr.length; i++){
        if(window.scrollY > blockArr[i] - windowHei){
          rest.$setActiveIdx(i);
        };
      };
    };
    
    window.addEventListener('scroll',(e)=>{
      scrollAnimation(e);
    });
  }, []);


  return (
    <TestBox {...rest} className={rest.$index === rest.$activeIdx || rest.$activeIdx > rest.$index ? 'active' : null}>
      {children}
    </TestBox>
  );
};

export default { Item };
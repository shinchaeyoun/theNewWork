/* eslint-disable */
import React, { useState, useEffect } from 'react';
import styled, { css, keyframes } from 'styled-components';
import S from './styles/GlobalBlock';

const MapAniItem = styled.div`
  width: 100%;
  opacity: 0;
  animation: ${S.FadeOut} .5s forwards;
  
  &.active {
    opacity: 0;
    animation: ${S.Fade} .5s ${props=>props.$delay || '.3s'} forwards;
  };
  `;
const SingleAniItem = styled.div`
width: 100%;
  opacity: 0;
  animation: ${S.FadeOut} .5s forwards;
  
  &.active {
    opacity: 0;
    animation: ${S.Fade} .5s ${props=>props.$delay || '.3s'} forwards;
  };
`;

/* 컴포넌트에서 받아와야할 것
$type={true} $index={index} $activeIdx={activeIdx} $setActiveIdx={setActiveIdx} */
function Item({children, ...rest}){
  const windowHei = window.innerHeight / 1.4;

  if(rest.$type) {
    useEffect(()=>{
      const block = document.querySelectorAll('.block');
      let blockArr = [];
      
      for(let i=0; i < block.length; i ++){
        let blockTop = block[i].offsetTop;
        blockArr.push(blockTop);
      };
      
      const scrollAnimation = () => {
        rest.$setActiveIdx();
        for(let i=0; i<blockArr.length; i++){
          if(window.scrollY > blockArr[i] - windowHei){
            rest.$setActiveIdx(i);
          };
        };
      };
      
      window.addEventListener('scroll',()=>{
        scrollAnimation();
      });

      scrollAnimation();
    }, []);

    return (
      <MapAniItem {...rest} className={rest.$index === rest.$activeIdx || rest.$activeIdx > rest.$index ? 'active' : null}>
        {children}
      </MapAniItem>
    );
  } else {    
    useEffect(()=>{
      const block = document.querySelectorAll('.singleItem');
      let itemTopArr = [];

      for(let i=0; i < block.length; i ++){
        let blockTop = block[i].offsetTop;
        itemTopArr.push(blockTop);
      };

      const scrollAnimation = () => {
        for(let i=0; i<itemTopArr.length; i++){
          if(window.scrollY > itemTopArr[i] - windowHei){
            block[i].classList.add('active');
          } else {
            block[i].classList.remove('active');
          };
        };
      };

      window.addEventListener('scroll',()=>{
        scrollAnimation();
      });
      
      scrollAnimation();
    }, []);

    return (
      <SingleAniItem {...rest} className='singleItem'>
        { children }
      </SingleAniItem>
    );
  }
};


export default { Item };
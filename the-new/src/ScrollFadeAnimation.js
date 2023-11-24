/* eslint-disable */
import React, { useState, useEffect } from 'react';
import styled, { css, keyframes } from 'styled-components';
import S from './styles/GlobalBlock';

const TestBox = styled.div`
  border: 1px solid #f00;
  opacity: 0;
  animation: ${S.FadeOut} .5s forwards;
  
  &.active {
    opacity: 0;
    animation: ${S.Fade} .5s ${props=>props.$delay || '.3s'} forwards;
  };
`;
const NonMapItem = styled.div`
  /* border: 1px solid #f00; */
  opacity: 0;
  animation: ${S.FadeOut} .5s forwards;
  
  &.active {
    /* border: 1px solid #00f; */
    opacity: 0;
    animation: ${S.Fade} .5s ${props=>props.$delay || '.3s'} forwards;
  };
`;


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
  } else {
    useEffect(()=>{
      const block = document.querySelectorAll('.nonMapItem');
      let itemTopArr = [];

      for(let i=0; i < block.length; i ++){
        block[i].setAttribute('index',i)
        let blockTop = block[i].parentElement.offsetTop;
        itemTopArr.push(blockTop);
      };

      const scrollAnimation = (e) => {
        for(let i=0; i<itemTopArr.length; i++){
          if(window.scrollY > itemTopArr[i] - windowHei){
            block[i].classList.add('active');
          } else {
            block[i].classList.remove('active');
          };
        };
      };
      
      window.addEventListener('scroll',(e)=>{
        scrollAnimation(e);
      });
    }, []);

    return (
      <NonMapItem {...rest}
        className='nonMapItem'
      // className={rest.$index === rest.$activeIdx || rest.$activeIdx > rest.$index ? 'active nonMapItem' : 'nonMapItem'}
      >
        { children }
      </NonMapItem>
    );
  }
};


export default { Item };
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
  opacity: 0;
  animation: ${S.FadeOut} .5s forwards;
  
  &.active {
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
    /*
      맵으로 돌리는 컴포넌트가 아니면 activeIdx는 사용하지 않을 예정.
      클래스 핸들링은 리턴에서 해야해.
      data-index를 주고. 가상의 인덱스를 만들까. 함수 내에서만 사용하는 인덱스.. 현재 인덱스..

      구간을 지난 아이템에게 활성화를 해줘야함.
      그 아이템을 어케 선택할래?
      위에서는 아이템 인덱스랑       
    */

    useEffect(()=>{
      const block = document.querySelectorAll('.singleItem');
      let itemTopArr = [];

      for(let i=0; i < block.length; i ++){
        block[i].setAttribute('index',i)
        let blockTop = block[i].offsetTop;
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
      
      window.addEventListener('click',(e)=>{
        scrollAnimation(e);
      });
    }, []);

    return (
      <NonMapItem {...rest}
        className='singleItem'
      // className={rest.$index === rest.$activeIdx || rest.$activeIdx > rest.$index ? 'active nonMapItem' : 'nonMapItem'}
      >
        { children }
      </NonMapItem>
    );
  }
};


export default { Item };
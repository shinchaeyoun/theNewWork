/* eslint-disable */
import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import * as commonFn from './../CommonFunction';
import S from './../styles/GlobalBlock';

const Test = styled(S.ContentBlock)`
  border: 1px solid #f00;
`

const TestBlock = styled.div`
  ${S.ContentBlock} {
    background-color: #ddd;
    color: ${(props)=>props.color||'black'}
  }
`

function TestBox ({children,color}) {
  return (
    <TestBlock color={color}>
      <S.ContentBlock>
        {children}
      </S.ContentBlock>
    </TestBlock>
  )
}

function IntroducePage() {
  commonFn.ScrollFn();
  
  return(
    <>
      <span>i</span>ntroduce page

      <TestBox color={'red'}>
        hid
      </TestBox>
      
      <TestBlock>
        <S.ContentBlock>hhhiiii</S.ContentBlock>
      </TestBlock>
      
      <Test>HIIIII</Test>
      
      <S.ContentBlock id='Greeting' className='block'>Greeting </S.ContentBlock>
      <S.ContentBlock id='Profile' className='block'>Profile </S.ContentBlock>
      <S.ContentBlock id='Hashtag Story' className='block'>Hashtag Story </S.ContentBlock>
      <S.ContentBlock id='Favorite Message' className='block'>Favorite Message </S.ContentBlock>
    </>
  )
}

export default IntroducePage;
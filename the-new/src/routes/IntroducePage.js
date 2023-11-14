/* eslint-disable */
import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import * as commonFn from './../CommonFunction';

function IntroducePage() {
  commonFn.ScrollFn();
  
  return(
    <>
      <span>i</span>ntroduce page
      <ContentBlock id='Greeting' className='block'>Greeting </ContentBlock>
      <ContentBlock id='Profile' className='block'>Profile </ContentBlock>
      <ContentBlock id='Hashtag Story' className='block'>Hashtag Story </ContentBlock>
      <ContentBlock id='Favorite Message' className='block'>Favorite Message </ContentBlock>
    </>
  )
}

const ContentBlock = styled.div`
  height: 100vh;
  border-bottom: 1px solid #000;
`

export default IntroducePage;
/* eslint-disable */
import React, { useState, useRef, useEffect } from 'react';
import { useLocation } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import * as commonFn from './../CommonFunction';


function LikePage() {
  commonFn.ScrollFn();

  return(
    <>
      like page
      <ContentBlock id='Travel' className='block'>Travel</ContentBlock>
      <ContentBlock id='Flimeing' className='block'>Flimeing</ContentBlock>
      <ContentBlock id='Movies' className='block'>Movies</ContentBlock>
      <ContentBlock id='Music' className='block'>Music</ContentBlock>
    </>
  )
}

const ContentBlock = styled.div`
  height: 100vh;
  border-bottom: 1px solid #000;
`
export default LikePage;
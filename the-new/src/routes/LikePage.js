/* eslint-disable */
import React, { useState, useRef, useEffect } from 'react';
import { useLocation } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import * as commonFn from './../CommonFunction';
import S from './../styles/GlobalBlock';


function LikePage() {
  commonFn.ScrollFn();

  return(
    <>
      like page
      <S.ContentBlock id='Travel' className='block'>Travel</S.ContentBlock>
      <S.ContentBlock id='Flimeing' className='block'>Flimeing</S.ContentBlock>
      <S.ContentBlock id='Movies' className='block'>Movies</S.ContentBlock>
      <S.ContentBlock id='Music' className='block'>Music</S.ContentBlock>
    </>
  )
}


export default LikePage;
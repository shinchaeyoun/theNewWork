/* eslint-disable */
import React, { useState, useRef, useEffect } from 'react';
import { useLocation } from 'react-router';
import styled from 'styled-components';


function LikePage() {
  const location = useLocation();
  const subCate = useRef();
  
  const [content, setContent] = useState([]);

  const scrollTo = location.state;

  console.log(scrollTo);

  useEffect(()=>{
    console.log('scrollTo', scrollTo);
  })

  return(
    <>
      like page
      <ContentBlock id='Travel'>Travel / {scrollTo}</ContentBlock>
      <ContentBlock id='Flimeing'>Flimeing / {scrollTo}</ContentBlock>
      <ContentBlock id='Movies'>Movies / {scrollTo}</ContentBlock>
      <ContentBlock id='Music'>Music / {scrollTo}</ContentBlock>
    </>
  )
}

const ContentBlock = styled.div`
  height: 100vh;
  border-bottom: 1px solid #000;
`
export default LikePage;
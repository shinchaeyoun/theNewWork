import React from 'react';
import styled from 'styled-components';
import * as commonFn from './../CommonFunction';


const Wrapper = styled.div `
  padding-bottom: 50px;
`

const ImgContent = styled.div `
  border: 1px solid #f00;
  width: ${props => props.wid || '1000px'};
  height: ${props => props.hei || '500px'};
`

function MainPage() {
  commonFn.ScrollFn();
  return(
    <Wrapper>
      <div id='main_container'>
        <MainBox classname="block">
          HI
        </MainBox>

        {/* <ImgContent wid={'500px'} hei={'250px'}></ImgContent> */}
      </div>

    </Wrapper>
  )
}

function MainBox ({children, wid, hei}) {
  return (
    <ImgContent wid={wid} hei={hei}>
      {children}
    </ImgContent>
  )
}


export default MainPage;
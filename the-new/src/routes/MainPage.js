import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div `
  padding-bottom: 50px;
`

const ImgContent = styled.div `
  border: 1px solid #f00;
  width: ${props => props.wid || '1000px'};
  height: ${props => props.hei || '500px'};
`
function MainPage() {
  return(
    <Wrapper>
      <div id='main_container'>
        <MainBox>
          HI
        </MainBox>

        <ImgContent wid={'500px'} hei={'250px'}></ImgContent>
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
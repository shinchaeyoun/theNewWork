/* eslint-disable */
import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import * as commonFn from './../CommonFunction';
import S from './../styles/GlobalBlock';

import greetingImg from './../img/introduce/greeting_image.png'
import ScrollFade from '../ScrollFadeAnimation';

import Content from './../Data/IntroduceData';

function IntroducePage() {
  commonFn.MoveToContentTopFn();

  const [data,setDate] = useState(Content);
  const [activeIdx, setActiveIdx] = useState();

  const delayTime = .3;
  
  return(
    <>
      <S.GroupBox className='block'>
        <S.TextContentBox $txtconwid='250px'>
          {/* <S.SubTitle>Profile</S.SubTitle> */}
          <S.SubTitle>Lorem Ipsum</S.SubTitle>

          <ScrollFade.Item $type={false}>
            <p><span>Lorem</span>Ipsum</p>
          </ScrollFade.Item>
          <ScrollFade.Item $type={false} $delay={delayTime*2+'s'}>
            <p><span>Lorem</span>Ipsum</p>
          </ScrollFade.Item>
          <ScrollFade.Item $type={false} $delay={delayTime*3+'s'}>
            <p><span>Lorem</span>Ipsum</p>
          </ScrollFade.Item>
          <ScrollFade.Item $type={false} $delay={delayTime*4+'s'}>
            <p><span>Lorem</span>Ipsum</p>
          </ScrollFade.Item>
          
        </S.TextContentBox>

        <S.ContentBox $conwid='500px'>
          <ScrollFade.Item $type={false} $delay={delayTime*1.5+'s'}>
            <S.ImgBox $imgwid='500px' $imghei='250px' $mb='0px'>
              <img src={greetingImg} alt='greeting_image'/>
            </S.ImgBox>
          </ScrollFade.Item>

          <S.TextBox>
            <ScrollFade.Item $type={false} $delay={delayTime*2.5+'s'}>
              <S.SubTitle>Lorem Ipsum</S.SubTitle>
            </ScrollFade.Item>
            {/* <S.SubTitle>Greeting</S.SubTitle> */}
            <ScrollFade.Item $type={false} $delay={delayTime*3.5+'s'}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </ScrollFade.Item>
          </S.TextBox>
        </S.ContentBox>

        <S.TextContentBox $txtconwid='250px' $padding='0 0 0 20px'>
          <S.SubTitle>Lorem Ipsum</S.SubTitle>
          {/* <S.SubTitle>Profile</S.SubTitle> */}

          <ScrollFade.Item $type={false} $delay={delayTime*2+'s'}>
            <p><span>keyword</span>keyword</p>
          </ScrollFade.Item>
          <ScrollFade.Item $type={false} $delay={delayTime*3+'s'}>
            <p><span>keyword</span>keyword</p>
          </ScrollFade.Item>
          <ScrollFade.Item $type={false} $delay={delayTime*4+'s'}>
            <p><span>keyword</span>keyword</p>
          </ScrollFade.Item>
          <ScrollFade.Item $type={false} $delay={delayTime*5+'s'}>
            <p><span>keyword</span>keyword</p>
          </ScrollFade.Item>
          <ScrollFade.Item $type={false} $delay={delayTime*6+'s'}>
            <p><span>keyword</span>keyword</p>
          </ScrollFade.Item>
        </S.TextContentBox>
      </S.GroupBox>

      <S.GroupBox className='block'>
        <S.Title>Hashtag Story</S.Title>

        <S.ContentBox $conwid='590px'>
          <ScrollFade.Item $type={false} $delay={delayTime*2.5+'s'}>
            <S.ImgBox $imgwid='100%' $imghei='400px'>
              <img src={greetingImg} alt='hashtagStory'/>
            </S.ImgBox>
          </ScrollFade.Item>

          <S.TextBox $txtwid='95%'>
            <ScrollFade.Item $type={false} $delay={delayTime*3.5+'s'}>
              <S.SubTitle>#Hashtag</S.SubTitle>
            </ScrollFade.Item>

            <ScrollFade.Item $type={false} $delay={delayTime*4.5+'s'}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </ScrollFade.Item>
          </S.TextBox>
        </S.ContentBox>

        <S.ContentBox $conwid='390px'>
          <ScrollFade.Item $type={false}>
            <S.ImgBox $imgwid='100%' $imghei='300px'>
              <img src={greetingImg} alt='hashtagStory'/>
            </S.ImgBox>
          </ScrollFade.Item>

          <S.TextBox $txtwid='95%'>
            <ScrollFade.Item $type={false} $delay={delayTime*2+'s'}>
              <S.SubTitle>#Hashtag</S.SubTitle>
            </ScrollFade.Item>

            <ScrollFade.Item $type={false} $delay={delayTime*3+'s'}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </ScrollFade.Item>
          </S.TextBox>
        </S.ContentBox>

        <S.ContentBox $conwid='390px'>
          <ScrollFade.Item $type={false}>
            <S.ImgBox $imgwid='100%' $imghei='300px'>
              <img src={greetingImg} alt='hashtagStory'/>
            </S.ImgBox>
          </ScrollFade.Item>

          <S.TextBox $txtwid='95%'>
            <ScrollFade.Item $type={false} $delay={delayTime*2+'s'}>
              <S.SubTitle>#Hashtag</S.SubTitle>
            </ScrollFade.Item>

            <ScrollFade.Item $type={false} $delay={delayTime*3+'s'}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </ScrollFade.Item>
          </S.TextBox>
        </S.ContentBox>

        <S.ContentBox $conwid='590px'>
          <ScrollFade.Item $type={false} $delay={delayTime*2.5+'s'}>
            <S.ImgBox $imgwid='100%' $imghei='400px'>
              <img src={greetingImg} alt='hashtagStory'/>
            </S.ImgBox>
          </ScrollFade.Item>

          <S.TextBox $txtwid='95%'>
            <ScrollFade.Item $type={false} $delay={delayTime*3.5+'s'}>
              <S.SubTitle>#Hashtag</S.SubTitle>
            </ScrollFade.Item>
            
            <ScrollFade.Item $type={false} $delay={delayTime*4.5+'s'}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </ScrollFade.Item>
          </S.TextBox>
        </S.ContentBox>

      </S.GroupBox>

      <S.GroupBox className='block'>
        <S.Title>Favorite Message</S.Title>

        <S.TextContentBox $txtconwid='475px;' $spanfull={true}>
          <ScrollFade.Item $type={false}>
            <S.SubTitle>Favorite Message</S.SubTitle>
          </ScrollFade.Item>


          <p>
            <ScrollFade.Item $type={false} $delay={delayTime*2+'s'}>
              <span>Lorem ipsum</span>
            </ScrollFade.Item>

            <ScrollFade.Item $type={false} $delay={delayTime*3+'s'}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </ScrollFade.Item>
          </p>
        </S.TextContentBox>
        
        <S.TextContentBox $txtconwid='475px;' $spanfull={true}>
          <ScrollFade.Item $type={false} $delay={delayTime*4+'s'}>
            <S.SubTitle>Motto of Life</S.SubTitle>
          </ScrollFade.Item>

          <p>
            <ScrollFade.Item $type={false} $delay={delayTime*5+'s'}>
              <span >Lorem ipsum</span>
            </ScrollFade.Item>

            <ScrollFade.Item $type={false} $delay={delayTime*6+'s'}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </ScrollFade.Item>
          </p>
        </S.TextContentBox>
      </S.GroupBox>
    </>
  )
}

export default IntroducePage;
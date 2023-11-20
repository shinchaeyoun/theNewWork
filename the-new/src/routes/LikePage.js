/* eslint-disable */
import React, { useState, useRef, useEffect, Component } from 'react';
import { useLocation } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import * as commonFn from './../CommonFunction';
import S from './../styles/GlobalBlock';
import './../styles/like.scss'

import likeImg from './../img/like/like_image.png'
import travel1 from './../img/like/like_image.png'
import travel2 from './../img/like/like_image.png'
import travel3 from './../img/like/like_image.png'

import playIcon from './../img/like/music/play.png'
import pauseIcon from './../img/like/music/pause.png'

import slideData from './../img/like/flimImgData';
import Slider from "react-slick";
import '../styles/slick.css';
import '../styles/slick-theme.css';

import audioList from './../components/MusicData';

const flimSlides = slideData.flimData.map(image => {
  return (
    <div key={image.alt}>
      <img src={image.url} alt={image.alt}/>
    </div>
  )
});



function NextArrow(props) {
  const {className, style, onClick} = props;
  return (
    <div 
      className={className}
      style={{...style, display: 'block', background: 'red'}}
      onClick={onClick}
    />
  )
};
function PrevArrow(props) {
  const {className, style, onClick} = props;
  return (
    <div 
      className={className}
      style={{...style, display: 'block', background: 'blue'}}
      onClick={onClick}
    />
  )
};


function LikePage() {
  commonFn.ScrollFn();

  const [travelTab, setTravelTab] = useState(0);
  const [trackIdx, setTrackIdx] = useState(0);
  const [playNow, setPalyNow] = useState(false);

  const travelArr = [
    {
      name: 'Tab1',
      content: 'Tab menu one',
      imgSrc: travel1, alt: 'alt1'
    },
    {
      name: 'Tab2',
      content: 'Tab menu two',
      imgSrc: travel2, alt: 'alt2'
    },
    {
      name: 'Tab3',
      content: 'Tab menu three',
      imgSrc: travel3, alt: 'alt3'
    }
  ];

  const flimSettings = {
    dots: true,
    autoplay: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    speed: 2000,
    autoplaySpeed: 2000,
  };

  const NextTrack = () => {
    // let idx = trackIdx;
    trackIdx++;

    if (trackIdx >= 10) {
      trackIdx=0;
    };
    setTrackIdx(trackIdx);
  };

  const PrevTrack = () => {
    // let idx = trackIdx;
    trackIdx--;

    if (trackIdx < 0) {
      trackIdx=9;
    };
    setTrackIdx(trackIdx);
  };

  const Playing = () => {
    setPalyNow(!playNow);


  }

  
  return(
    <>
      <S.GroupBox className='block'>
        <S.Title>Travel</S.Title>

        <ContentBox $flexalign='center' $conwid='100%' $flexD='row-reverse'>
          <S.ImgBox $imgwid='600px' $imghei='400px'>
            <img src={likeImg} alt='likeImg'/>
          </S.ImgBox>

          <S.TextBox $txtwid='400px'>
            <S.SubTitle>Travel History</S.SubTitle>

            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </S.TextBox>
        </ContentBox>

        <ContentBox className='tab_wrap' $flexD='row' $border={true}  $bdcolor='lightGray'>
          <S.FlexBox className='tab_content'>
            <ul>
              <li>{travelArr[travelTab].content}</li>
            </ul>

            <S.ImgBox className={'imgTab'+travelTab} $imgwid='600px'>
              <img src={travelArr[travelTab].imgSrc} alt={travelArr[travelTab].alt}/>
            </S.ImgBox>
          </S.FlexBox>

          <div className='tab_menu'>
            <S.SubTitle>Memorable Travel 3</S.SubTitle>

            <ul>
              {
                travelArr.map((menu, index)=>(
                  <li
                  key={index}
                    className={index === travelTab ? 'focused' : null}
                    onClick={()=>setTravelTab(index)}>{menu.name}</li>
                ))
              }
            </ul>
          </div>
        </ContentBox>
      </S.GroupBox>

      <S.GroupBox className='block'>
        <S.Title>Drive</S.Title>
      </S.GroupBox>

      <S.GroupBox className='block'>
        <S.Title>Flimeing</S.Title>

        <div id='fSlide'>
          <Slider {...flimSettings}>
            {flimSlides}
          </Slider>
        </div>
      </S.GroupBox>

      <S.GroupBox className='block'>
        <S.Title>Music</S.Title>

        <S.FlexBox id='music' className='block'>
          <div id='left'>
            <S.ImgBox>
              <img className='testImg' src={audioList[trackIdx].albumImage}/>
            </S.ImgBox>

            <S.TextBox>
              {audioList[trackIdx].track}
              {audioList[trackIdx].artist}
              {audioList[trackIdx].trackNumber}
            </S.TextBox>

            <div className="slider_bar">
              <div className="slider">
                <span className="dot"></span>
                <span className="bar"></span>
                <div id="ins-time"></div>
                <div id="s-hover"></div>
                <div id="seek-bar"></div>
              </div>
            </div>

            <div className="track_time">
              <div className="current_time">
                <span>00:00</span>
              </div>

              <div className="track_length">
                <span>00:00</span>
              </div>
            </div>

            <div className="control_bar">
              <div className="prev" onClick={()=>{
                PrevTrack();
              }}>prev</div>

              <div className="play" id="play" onClick={()=>{
                Playing();
              }}>
                {playNow ? playIcon : pauseIcon }
              </div>

              <div className="next" onClick={()=>{
                NextTrack();
              }}>next</div>
            </div>

            <div className="sound">
              <div className="low"></div>
              <div className="bar"><span></span></div>
              <div className="high"></div>
            </div>
          </div>

          <div id='right'>
            <ul>
              {
                audioList.map((item, index)=>{
                  return (
                    <li key={item.trackNumber}>
                      {item.track}
                    </li>
                  )
                })
              }        
            </ul>
          </div>
        </S.FlexBox>
      </S.GroupBox>
    </>
  )
}


const ContentBox = styled(S.ContentBox)`
  margin: 30px 0;
  padding: 30px 0;
  height: 350px;
  overflow: hidden;

  ${S.FlexBox} {
    width: 850px;

    ul {
      /* padding-right: 20px; */
      width: 300px;
      li {

      }
    }

    ${S.ImgBox} {
      /* padding: 0 20px; */
      width: 550px; height: 350px;
    }
  }
`
export default LikePage;
/* eslint-disable */
import React, { useState, useRef, useEffect, Component } from 'react';
import { useLocation } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import * as commonFn from './../CommonFunction';
import S from './../styles/GlobalBlock';
import './../styles/like.scss'
import Slider from "react-slick";
import '../styles/slick.css';
import '../styles/slick-theme.css';


import likeImg from './../img/like/like_image.png'
import travel1 from './../img/like/like_image.png'
import travel2 from './../img/like/like_image.png'
import travel3 from './../img/like/like_image.png'

import slideData from '../Data/flimImgData';

import audioData from '../Data/MusicData';

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
  commonFn.MoveToContentTopFn();

  const [travelTab, setTravelTab] = useState(0);
  const [trackIdx, setTrackIdx] = useState(0);
  const [playState, setPlayState] = useState(false);
  const [sHoverWid, setShoverWid] = useState(0);
  const [sBarWid, setSbarWid] = useState(0);
  const [dotPos, setDotPos] = useState(0);
  const [curMin, setCurMin] = useState('00');
  const [curSec, setCurSec] = useState('00');
  const [durMin, setDurMin] = useState('00');
  const [durSec, setDurSec] = useState('00');

  const sAreaRef = useRef();
  const sHoverRef = useRef();
  const sBar = useRef();
  const dot = useRef();

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

  // player
  const [audio, setAudio] = useState(new Audio(audioData.audioList[trackIdx].link));
  audio.loop = false;
  audio.volume = 0.2;

  const NextTrack = () => {
    let idx = trackIdx;
    idx++;
    
    if (idx >= 10) { idx=0; };
    setTrackIdx(idx);
    
    const changeAudio  = new Audio(audioData.audioList[idx].link);
    playing(changeAudio)
  };
  const playTrack = () => {
    let nowState = !playState;
    setPlayState(nowState);
  };
  const PrevTrack = () => {
    let idx = trackIdx;
    idx--;
    
    if (idx < 0) { idx=9; };
    setTrackIdx(idx);
    
    const changeAudio  = new Audio(audioData.audioList[idx].link);
    playing(changeAudio);
  };

  const playing = (newAudio) => {
    setPlayState(true);
    audio.load();
    setAudio(newAudio);
  };

  const sAreaEvt = (state, e) => {
    const seekBarPos = sAreaRef.current?.offsetLeft;
    const seekT = e.clientX - seekBarPos;
    const seekLoc = audio.duration * (seekT / sAreaRef.current.offsetWidth);

    switch (state) {
      case 'over' :
        let hoverWid = (seekT / sAreaRef.current.offsetWidth) * 100;
        setShoverWid(hoverWid+'%');
        break;
      case 'out' :
        setShoverWid(0);
        break;
      case 'click' :
        setPlayState(true);
        audio.currentTime = seekLoc;
        break;
    }
  };

  const time = () => {
    let cMin = Math.floor(audio.currentTime / 60);
    let cSec = Math.floor(audio.currentTime - cMin * 60);

    let dMin = Math.floor(audio.duration / 60);
    let dSec = Math.floor(audio.duration - dMin * 60);

    if (cMin < 10) { cMin = '0' + cMin; };
    if (cSec < 10) { cSec = '0' + cSec; };
    if (dMin < 10) { dMin = '0' + dMin; };
    if (dSec < 10) { dSec = '0' + dSec; };

    setCurMin(cMin);
    setCurSec(cSec);
    setDurMin(dMin);
    setDurSec(dSec);

    const playProgress = (audio.currentTime / audio.duration) * 100;

    setSbarWid(playProgress+'%');
    setDotPos(playProgress+'%');
  };

  if(playState){
    audio.play();
  } else {
    audio.pause();
  };
  audio.addEventListener('timeupdate', ()=> {
    time();
  });
  audio.onended = () => {
    NextTrack();
  };
  // player end


  return(
    <>
      <S.GroupBox className='block'>
        <S.Title>
          {/* <S.FadeBox isActive $sec='.5s' $delay='.3s'> */}
            Travel
          {/* </S.FadeBox> */}
        </S.Title>

        <ContentBox $flexalign='center' $conwid='100%' $flexD='row-reverse'>
          <S.ImgBox $imgwid='600px' $imghei='400px'>
            <img src={likeImg} alt='likeImg'/>
          </S.ImgBox>

          <S.TextBox $txtwid='400px' $txtpd='0 20px 0 0'>
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

        <FlexBox id='music' className='block' $padding='50px 0'>
          <ContentBlock $wid='350px' $pad='0 40px' id='left' style={{borderRight: 'none'}}>
            <S.ImgBox className='album_cover' $imgwid='280px'>
              <img
                className='testImg'
                src={audioData.audioList[trackIdx].albumImage}/>
            </S.ImgBox>

            <S.TextBox className='album_title'>
              <div className='track_name'>
                {audioData.audioList[trackIdx].track}
              </div>

              <div className='artist_name'>
                {audioData.audioList[trackIdx].artist}
              </div>
            </S.TextBox>

            <div className="slider_bar">
              <div className="slider"
                ref={sAreaRef}
                onMouseMove={(e)=>{sAreaEvt('over',e)}}
                onMouseOut={(e)=>{sAreaEvt('out',e)}}
                onClick={(e)=>{sAreaEvt('click',e)}}>
                <span
                  ref={dot}
                  style={{left: dotPos}}
                  className={playState ? 'active dot' : 'dot'}>
                </span>
                <span
                  ref={sBar}
                  style={{width: sBarWid}}
                  className="bar">
                </span>
                <div
                  ref={sHoverRef}
                  style={{width: sHoverWid}}
                  id="s-hover">
                </div>
              </div>
            </div>

            <div className="track_time">
              <div className="current_time">
                <span>{curMin} : {curSec}</span>
              </div>

              <div className="track_length">
                <span>{durMin} : {durSec}</span>
              </div>
            </div>

            <div className="control_bar">
              <div className="prev" onClick={()=>{PrevTrack()}}>
                {audioData.iconList[2]}
              </div>

              <div className="play" id="play" onClick={()=>{playTrack()}}>
                {playState ? audioData.iconList[1] : audioData.iconList[0] }
              </div>

              <div className="next" onClick={()=>{NextTrack()}}>
                {audioData.iconList[2]}
              </div>
            </div>

            <div className="sound">
              <div className="low"></div>
              <div className="bar"><span></span></div>
              <div className="high"></div>
            </div>
          </ContentBlock>

          <ContentBlock $wid='450px' $hei='500px' $scroll='hidden'>
            <S.ScrollCustom className='ScrollCustom' $hei='500px'>
              <ul>
                {
                  audioData.audioList.map((item, index)=>{
                    return (
                      <PlayListBox
                        key={item.trackNumber}
                        className={trackIdx === index && playState ? 'active': null}
                        onClick={() => {
                          setTrackIdx(index);
                          const changeAudio  = new Audio(audioData.audioList[index].link);
                          playing(changeAudio);
                        }}
                      >
                        <S.ImgBox $imgwid='60px' $imghei='60px'>
                          <img src={item.albumImage} alt='pause_icon'/>
                        </S.ImgBox>
                        <div className='title'>
                          <S.Red className='track'>{item.track}</S.Red>
                          <div className='artist'>{item.artist}</div>
                        </div>
                      </PlayListBox>
                    )
                  })
                }        
              </ul>
            </S.ScrollCustom>
          </ContentBlock>
        </FlexBox>
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
      width: 300px;
    }

    ${S.ImgBox} {
      width: 550px; height: 350px;
    }
  }
`
const FlexBox = styled(S.FlexBox)`
  justify-content: center;

  padding: ${props => props.$padding};
`
const PlayListBox = styled.li`
  display: flex;
  align-items: center;
  padding: 10px 30px;
  height: 60x;
  border-bottom: 1px solid ${({theme}) => theme.colors.gray};

  &:last-child {
    border-bottom: none;
  }
  &.active {
    background-color: #cccccc7a;
  }

  .title {
    padding-left: 20px;
    text-transform: capitalize;

    .track {
      display: block;
      font-size: 15px;
      font-weight: 600;
    }
    .artist {
      color: ${({theme}) => theme.colors.subGray};
    }
  }
`
const ContentBlock = styled.div`
  width: ${props => props.$wid};
  height: ${props => props.$hei};

  padding: ${props => props.$pad};
  border: 1px solid ${({theme}) => theme.colors.gray};
  box-sizing: border-box;

  overflow-y: ${props => props.$scroll};
`
export default LikePage;
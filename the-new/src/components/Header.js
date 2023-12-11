/* eslint-disable */
import React, { useState, useContext, useEffect } from 'react';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import styled, { css, keyframes } from 'styled-components';


import './Header.scss';
import './../styles/GlobalStyle.scss';
import { AppContext } from '../App';
import S from '../styles/GlobalBlock';

import {Desktop, Tablet, Mobile, Default} from './../routes/MediaQuery';

const Test = styled.div`
  width: 500px;
  height: 400px;
  border: 1px solid #000;

  ${props => props.isDesktop && css`
    border: 1px solid #f00;
  `}

  ${props => props.isTablet && css`
    border: 1px solid #0f0;
  `}

  ${props => props.isMobile && css`
    border: 1px solid #00f;
  `}
`
const Container = styled.div`
  @media ${props => props.theme.media.mobile} {
    position: relative;
    border-bottom: 1px solid #000;
    padding-bottom: 10px;
    margin-bottom: 30px;
    
    &::after {
      content: '';
      position: absolute;
      left: 0px; bottom: 5px;
      width: 100%; height: 1px;
      background-color: #000;
    }
  }

  .date {
    position: absolute;
    left: 0; bottom: 20px;
    font-family: ${props => props.theme.fonts.assistant};
    font-weight: 600;
  }
  .main_title{
    font-size: 60px;
    font-family: ${props => props.theme.fonts.chomsky};

    cursor: pointer;
  }
  .onoff {
    position: absolute;
    right: 0; bottom: 20px;

    ul {
      position: relative;
      border: 1px solid #000;
      border-radius: 50px;
      width: 26px; height: 12px;
      cursor: pointer;
      li {
        position: absolute;
        top: 0; left: 0;
        width: 12px; height: 12px;
        border-radius: 50%;
        background-color: #000;
        transition: all .2s;

        &.active {
          transform: translateX(14px);
          background-color: $pointColor;
        }
      }
    }
  }
`
const Content = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  /* border: 1px solid #f00; */

  /* @media ${props => props.theme.media.desktop} {
    border: 1px solid #00f;
  }
  @media ${props => props.theme.media.mobile} {
    border: 1px solid #ddd;
  } */
`
const Categoty = styled.div`
  display: flex;
  justify-content: space-around;
  position: relative;
  padding: 15px 0px;
  margin-bottom: 30px;

  font-family: ${props => props.theme.fonts.outfit};

  border-top: 1px solid ${props => props.theme.colors.lightGray};
  border-bottom: 1px solid #000;

  > div {
    cursor: pointer;
  }

  &::after {
    content: '';
    position: absolute;
    left: 0px; bottom: -5px;
    width: 100%; height: 1px;
    background-color: #000;
  }
`
const MobileCategoty = styled(Categoty)`
  flex-flow: column;
  justify-content: space-evenly;

  position: absolute;
  top: 0px; left: 0px;
  width: 100vw;
  height: 100vh;
  background-color: #eee;
  z-index: 100;

  > div {
    text-align: center;
    font-size: 28px;
    color: ${({theme}) => theme.colors.subGray};
  }
`
const ActiveNav = styled.span`
  color: ${({ theme }) => theme.pointColor};
  font-weight: bold;
`
const Nav = styled.span`
`
const BurgerMenu = styled.ul`
  position: absolute;
  left: 0px;
  bottom : 20px;
  z-index: 999;
  
  > li {
    width:20px;height:2px;margin:4px;
    background-color: #000;
    transition: all 0.3s;
  }
  &.active {
    > li {
      &:nth-child(1) {
        transform: rotate(45deg) translate(0px,8px);
      }
      &:nth-child(2) {
        opacity: 0; transform: translateX(-10px);
      }
      &:nth-child(3) {
        transform: rotate(-45deg) translate(0px,-8px);
      }
    }
  }
`

function Header() {
  const { isColorMode, toggleColorMode } = useContext(AppContext);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let categorys = useSelector((state) => state.categorys);
  let [category, setCategory] = useState(categorys);
  const [isActive, setIsActive] = useState(0);

  const goToContent = (toTop, main, mainIdx, subIdx) => {
    navigate(main, {
      state: {
        moveToTop: toTop,
        mainIdx: mainIdx,
        subIdx: subIdx
      }
    });
  };

  let date = new Date();
  let year = date.getFullYear();
  let day = date.getDate();
  let week = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');
  let month = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December');

  let currentData = week[date.getDay()] + ', ' + month[date.getMonth()] + ' ' + day + ', ' + year;

  let [currentTime, setCurrentTime] = useState('00:00:00');
  let [currentApm, setCurrentApm] = useState('AM');

  let [isBurger, setIsBurger] = useState(false);
  if(isBurger){
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'unset';
  };


  useEffect(()=>{
    setInterval(()=> {
      let time = new Date();
      let hours = time.getHours();
      let minutes = time.getMinutes();
      let seconds = time.getSeconds();

      setCurrentTime(`${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`);
      
      if (hours > 12) {
        setCurrentApm('PM');
        hours %= 24;
      };
      
    }, 1000);

  },[]);

  return (
    <header>
      <Container>
        <Content>
          <Mobile>
            <BurgerMenu onClick={()=>{
                setIsBurger(!isBurger);
              }}
              className={isBurger ? 'active' : null}
            >
              <li></li>
              <li></li>
              <li></li>
            </BurgerMenu>
          </Mobile>
          
          <Default>
            <div className='date'>
              <div id='current_date'>
                {currentData}
              </div>
              <div className='clock_wrap'>
                <span id='clock'>{currentTime}</span>
                <span id='apm'>{currentApm}</span>
              </div>
            </div>
          </Default>

          <div className='main_title' onClick={() => {
            goToContent(true, '/', 0, 0)
          }}>
            <S.Red>T</S.Red>itle
          </div>

          <div className='onoff'
            onClick={toggleColorMode}>
            <ul>
              <li className={isColorMode ? 'active' : ''}></li>
            </ul>
          </div>
        </Content>

        <Default>
          <Categoty>
            {
              category.map((item, index) => {
                return (
                  <div item={item} key={index}
                    onClick={() => {
                      setIsActive(index);
                      goToContent(true, item.category_link, index, 0);
                    }}>
                    {
                      isActive === index
                        ?
                        <ActiveNav>{item.category_name}</ActiveNav>
                        :
                        <Nav>{item.category_name}</Nav>
                    }
                  </div>
                )
              })
            }
          </Categoty>
        </Default>
        
        {
          isBurger &&
          <MobileCategoty>
            {
              category.map((item, index) => {
                return (
                  <div item={item} key={index}
                    onClick={() => {
                      setIsActive(index);
                      setIsBurger(false);
                      goToContent(true, item.category_link, index, 0);
                    }}>
                    {
                      isActive === index
                        ?
                        <ActiveNav>{item.category_name}</ActiveNav>
                        :
                        <Nav>{item.category_name}</Nav>
                    }
                  </div>
                )
              })
            }
          </MobileCategoty>
        }
      </Container>
    </header>
  )
}

export default Header;
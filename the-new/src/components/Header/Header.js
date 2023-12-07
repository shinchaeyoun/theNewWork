/* eslint-disable */
import React, { useState, useContext } from 'react';
import { Routes, Route, Link , useNavigate, Outlet} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { useMediaQuery } from "react-responsive";

import styled, { css, keyframes } from 'styled-components';

import './Header.scss';
import { AppContext } from '../../App';
import S from '../../styles/GlobalBlock';

// import {Desktop, Tablet, Mobile, Default } from '../../styles/mediaQuery';



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

function Header() {
  const { isColorMode, toggleColorMode } = useContext(AppContext);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let categorys = useSelector((state) => state.categorys);
  let [category, setCategory] = useState(categorys);


  let date,
      year,
      day;
  let week = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');
  let month = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December');
  date = new Date();
  year = date.getFullYear();
  day = date.getDate();

  let currentData = week[date.getDay()] + ', ' + month[date.getMonth()] + ' ' + day + ', ' + year;

  const goToContent = (toTop, main, mainIdx, subIdx) => {    
    navigate(main, {
      state: {
        moveToTop: toTop,
        mainIdx : mainIdx,
        subIdx : subIdx
      }
    });
  };

  // const isDesktop = useMediaQuery({
  //   query: '(min-width: 1024px)',
  // });
  // const isTablet = useMediaQuery({
  //   query: '(min-width: 768px) and (max-width: 1023px)',
  // });
  // const isMobile = useMediaQuery({
  //   query: '(max-width: 767px)'
  // });
  
  
  
// const Desktop = ({children}) => {
//   const isDesktop = useMediaQuery({ minWidth: 1024 });
//   return isDesktop ? children : null;
// };

// const Tablet = ({children}) => {
//   const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
//   return isTablet ? children : null;
// };

// const Mobile = ({children}) => {
//   const isMobile = useMediaQuery({ maxWidth: 767 });
//   return isMobile ? children : null;
// };

// // mobile이 아닐 때만 출력되는 컴포넌트
// const Default = ({children}) => {
//   const isNotMobile = useMediaQuery({ minWidth: 768 });
//   return isNotMobile ? children : null;
// };



  return(
    <header>
      {/* <Test $isDesktop={isDesktop} $isTablet={isTablet} $isMobile={isMobile}>Test</Test> */}
      {/* <Desktop>
        <p>Desktop or laptop</p>
      </Desktop>

      <Tablet>
        <p>Tablet</p>
      </Tablet>

      <Mobile>
        <p>Mobile 버거 메뉴 만들기</p>
      </Mobile> */}

      <div className='header_container'>
        <div className='header_content'>
          <div className='date'>
            <div id='current_date'>
              { currentData }
            </div>
            <div className='clock_wrap'>
              <span id='clock'></span>
              <span id='apm'></span>
            </div>
          </div>

          <div className='main_title' onClick={()=>{
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
        </div>
        
        {/* <Default> */}
        <div className="header_cate">
          <ul>
            {
              category.map((item, i)=>{
                return (
                  <li item={item} key={i} onClick={()=>{
                    goToContent(true, item.category_link, i, 0)}}>
                    {item.category_name}
                  </li>
                )
              })
            }
          </ul>
        </div>
      {/* </Default> */}
      </div>
    </header>
  )
}

export default Header;
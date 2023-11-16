/* eslint-disable */
import React, { useState, useContext } from 'react';
import { Routes, Route, Link , useNavigate, Outlet} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import './Header.scss';
import { AppContext } from '../../App';
import S from '../../styles/GlobalBlock';

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


  return(
    <header>
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
      </div>
    </header>
  )
}

export default Header;
/* eslint-disable */
import React from 'react';
import './Header.scss';
import { useSelector } from "react-redux";
import { Router, Routes, Route, Link } from 'react-router-dom';

function Header() {
  return(
    <header>
      <div className='header_container'>
        <div className='header_content'>
          <div className='date'>
            <div id='current_date'></div>
            <div className='clock_wrap'>
              <span id='clock'></span>
              <span id='apm'></span>
            </div>
          </div>

          <div className='main_title'>
            <span className='red'>T</span>he <span className='red'>S</span>hin's <span className='red'>W</span>ork <span className='red'>S</span>pace
          </div>

          <div className='onoff'>
            <ul>
              <li></li>
            </ul>
          </div>
        </div>
        
        <div class="header_cate">
          <ul>
            <li data-hover2><a href="./main.html">Main</a></li>
            <li data-hover2><a href="./introduce.html">Introduce</a></li>
            <li data-hover2><a href="./like.html">Like</a></li>
            <li data-hover2><a href="./career.html">Career</a></li>
            <li data-hover2><a href="./portfolio.html">Portfolio</a></li>
            <li data-hover2><a href="./contact.html">Contact</a></li>
          </ul>

          <Router>
            <Routes>
              {/* <Route path="/" element={<Main />} /> */}
              <Route path="/detail" element={ <div>detail</div> } />
              <Route path="/about" element={ <div>about</div> } />
              {/* <Route path="/bookmark" element={ <BookmarkPage /> } /> */}
            </Routes>
          </Router>
          
        </div>
      </div>
    </header>
  )
}

export default Header;
/* eslint-disable */
import React, { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import { changeTopArr } from './store';

export function GotoComponent (main, mainIdx, subIdx) {
  navigate(main, {
    state: {
      mainIdx : mainIdx,
      subIdx : subIdx
    }
  });

  dispatch(gotoContentTop([main, mainIdx, subIdx]));
}

export function ScrollFn () {
  const dispatch = useDispatch();
  const location = useLocation();
  const mainIdxState = location.state.mainIdx;
  const subIdxState = location.state.subIdx;
  
  let subCate = useSelector((state) => state.categorys[mainIdxState].sub_categories);

  const setTop = ()=>{
    let contentBlock = document.querySelectorAll('.block');
    let contentTop;
    for(let i = 0; i < contentBlock.length; i ++ ){
      contentTop = contentBlock[i].offsetTop;
      dispatch(changeTopArr([mainIdxState, i, contentTop]))
    };
  };
  const scroll = (val) => {
    window.scrollTo({
      top: val, left:0,
      behavior: 'smooth'
    });
  };
    
  useEffect(()=>{
    let topVal;
    if (subIdxState == undefined || subIdxState == null){
      topVal = 0;
    } else {
      topVal = subCate[subIdxState].sub_category_top;
    };

    scroll(topVal);
    setTop();
  }, []);

}
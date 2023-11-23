/* eslint-disable */
import React, { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate} from 'react-router-dom'
import { useLocation } from 'react-router';
import { gotoContentTop, changeTopArr } from './store';

function MoveToContentTopFn () {
  const location = useLocation();
  const dispatch = useDispatch();
  const state = location.state;
  let mainIdxState;
  let subIdxState;
  let subCate;
  let contentBlock;
  let contentTop;

  if(state == undefined || state == undefined){
    mainIdxState = 0;
    subIdxState = 0;
  } else {
    mainIdxState = state.mainIdx;
    subIdxState = state.subIdx;
  };

  subCate = useSelector((state) => state.categorys[mainIdxState].sub_categories);

  const setTop = ()=>{
    contentBlock = document.querySelectorAll('.block');
    contentTop;

    for(let i = 0; i < contentBlock.length; i ++ ){
      contentTop = contentBlock[i].offsetTop;
      dispatch(changeTopArr([mainIdxState, i, contentTop]));
    };
  };
  
  useEffect(()=>{
    setTop();

    if (!state == null) {
      if(!state.moveToTop){
        dispatch(gotoContentTop([subIdxState, mainIdxState, subIdxState]));
      };
    };
  }, []);
};


export { MoveToContentTopFn };
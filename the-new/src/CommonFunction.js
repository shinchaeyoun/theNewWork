/* eslint-disable */
import React, { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate} from 'react-router-dom'
import { useLocation } from 'react-router';
import { gotoContentTop, changeTopArr } from './store';

function ScrollFn () {
  const location = useLocation();
  const dispatch = useDispatch();
  let mainIdxState;
  let subIdxState;
  let subCate;
  
  if(location.state == undefined || location.state == undefined){
    mainIdxState = 0;
    subIdxState = 0;
  } else {
    mainIdxState = location.state.mainIdx;
    subIdxState = location.state.subIdx;
  };

  subCate = useSelector((state) => state.categorys[mainIdxState].sub_categories);

  const setTop = ()=>{
    let contentBlock = document.querySelectorAll('.block');
    let contentTop;

    for(let i = 0; i < contentBlock.length; i ++ ){
      contentTop = contentBlock[i].offsetTop;
      dispatch(changeTopArr([mainIdxState, i, contentTop]));
    };
  };
    
  useEffect(()=>{
    setTop();
    
    if(!location.state.moveToTop){
      dispatch(gotoContentTop([subIdxState, mainIdxState, subIdxState]));
    };
  }, []);

}


export { ScrollFn };
/* eslint-disable */
import React, { useState, useContext } from 'react';
import { AppContext } from './../App';
import styled from 'styled-components';


function IntroducePage() {
  const { isColorMode, toggleColorMode } = useContext(AppContext);

  return(
    <>
      <span>i</span>ntroduce page
    </>
  )
}

export default IntroducePage;
// /* eslint-disable */
import React, { useState, useEffect } from 'react';
import styled, { css, keyframes } from 'styled-components';
import S from './GlobalBlock';

// function FadeGroupBox({children, index, activeIdx, setActiveIdx }){
//   const windowHei = window.innerHeight / 1.4;

//   useEffect(()=>{
//     const block = document.querySelectorAll('.block');
//     let blockArr = [];
    
//     for(let i=0; i < block.length; i ++){
//       let blockTop = block[i].offsetTop;
//       blockArr.push(blockTop);
//     };
    
//     const scrollAnimation = (e) => {
//       setActiveIdx(0);
//       for(let i=0; i<blockArr.length; i++){
//         if(window.scrollY > blockArr[i] - windowHei){
//           setActiveIdx(i);
//         };
//       };

//     };
    
//     window.addEventListener('scroll',(e)=>{
//       scrollAnimation(e);
//     });
//   }, []);

//   return(
//     <div className={index === activeIdx || activeIdx > index ? 'fade' : null}>
//       {children}
//     </div>
//   )
// };

// export default { FadeGroupBox };


const TestBox = styled.div`
  ${(props) =>
    props.isFade &&
	  css`
      opacity: 0;
      animation: ${S.Fade} ${props=>props.$sec || '.5s'} ${props=>props.$delay || '.3s'} forwards;
	  `};
`;

function Box ({children, ...rest}){
  console.log(rest.isFade);
  return (
    <TestBox {...rest}>
      {children}
    </TestBox>
  );
};

export default Box;
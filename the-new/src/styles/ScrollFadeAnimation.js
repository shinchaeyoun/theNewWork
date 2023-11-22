/* eslint-disable */
import styled, { css, keyframes } from 'styled-components';
import S from './GlobalBlock';


const Fade = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`
const FadeOut = keyframes`
  0% {
    opacity: 1;
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateY(20px);
  }
`

const ScrollFadeAnimation = styled.span`
  outline: 1px solid #f00;
  animation: ${FadeOut} .5s forwards;

  ${({activeState}) =>
    activeState &&
    `
      &.active {
        animation: ${Fade} .1s forwards;

        ${Title}{
          opacity: 0;
          animation: ${Fade} .5s .3s forwards;
          // ${SubTitle} {
          //   opacity: 0;
          //   animation: ${Fade} .5s .6s forwards;
          // }
          // & + ${S.TextBox}{
          //   opacity: 0;
          //   animation: ${Fade} .5s .9s forwards;
          // }
        }

        // ${SideTitle} {
        //   opacity: 0;
        //   animation: ${Fade} .5s 1.2s forwards;

        //   & + ${S.TextBox} {
        //     opacity: 0;
        //     animation: ${Fade} .5s 1.5s forwards;
        //   }
        // }
      }
    `
  }

`;

function ScrollFade ({children, activeState}) {
  return (
    <ScrollFadeAnimation $activeState className='test'>
      {children}
    </ScrollFadeAnimation>
  )
}
export default ScrollFade;

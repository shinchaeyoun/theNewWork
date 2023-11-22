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
  opacity: 0;
  animation: ${FadeOut} .5s forwards;

  &.active {
    opacity: 0;
    animation: ${Fade} .5s .3s forwards;

    & * {
      opacity: 0;
      animation: ${Fade} .5s .6s forwards;

    }
  };
`;

function ScrollFade ({children, ...rest}) {

  console.log('rest',{...rest}.$first);

  return (
    <ScrollFadeAnimation {...rest} id='test'>
      {children}
    </ScrollFadeAnimation>
  )
}
export default ScrollFade;

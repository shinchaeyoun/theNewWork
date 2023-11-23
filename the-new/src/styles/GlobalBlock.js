/* eslint-disable */
import styled, { createGlobalStyle, css, keyframes } from 'styled-components';

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

const FadeItem = styled.div`
  ${(props) => props.$isFade &&`
    color: red;
  `}
`
const Title = styled.div`
  display: block;
  width: 100%;
  margin-bottom: 30px;
  
  color: ${({ theme }) => theme.pointColor};
  font-weight: 800;
  font-family: ${props => props.theme.fonts.assistant};
`
const SubTitle = styled.div`
  margin-bottom: 10px;

  color: ${({ theme }) => theme.pointColor};
  font-size: 20px;
  font-weight: 600;
  font-family: ${({theme}) => theme.fonts.nanum};
  text-align: center;
  text-transform: capitalize;
`
const Red = styled.span`
  color: ${({ theme }) => theme.pointColor};
`
const RedBg = styled.span`
  background-color: ${({ theme }) => theme.pointColor || theme.subGray};
`
const ScrollCustom = styled.div`
  height: ${props => props.$hei};
  overflow-y: scroll;
  // 해당 박스를 감싼 태그에는 overflow-y: hidden;
  /* overflow-y: hidden; */

  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-thumb {
    height: 30%;
    background-color: ${({ theme }) => theme.pointColor || theme.subGray};
    border-radius: 50px;
  }
  &::-webkit-scrollbar-track {
    background: rgba(90, 90, 90, .3);
  }
`
const ImgBox = styled.div`
  width: ${props => props.$imgwid || '500px'};
  height: ${props => props.$imghei || 'initial'};

  img {
    width: 100%; height: 100%;
    object-fit: cover;
  }
`
const TextBox = styled.div`
  width: ${props => props.$txtwid || '100%'};

  padding: ${props => props.$txtpd};
  box-sizing: border-box;
`
const FlexBox = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;

  width: 100%;
`
const ContentBox = styled.div`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: ${(props) => props.$flexD || 'column'};
  justify-content: space-between;
  align-items: ${(props) => props.$flexalign || 'flex-start'};

  margin-bottom: ${props => props.$mb || '30px'};
  width: ${props => props.$conwid || '100%'};

  ${props => props.$border && css`
    border-top: 1px solid ${({theme}) => theme.colors.lightGray};
  `}

  p {
    span {
      margin-right: 20px;
      font-weight: 500;
    }
  }
`
const TextContentBox = styled.div`
  // div >p >span 구조
  width: ${props => props.$txtconwid || '500px'};
  padding: ${props => props.$padding};
  box-sizing: border-box;
  
  p {
    span {
      font-weight: 500;
      margin-right: ${props => props.spanfull ? '0px' : '20px'};

      ${props => props.$spanfull && css`
        display: block;
        font-weight: 600;
      `}
    }
  }
`

const GroupBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 20px 0;

  border-top: 1px solid #000;

  &:first-child {
    border-top: none;
  }

  &:nth-child(2){
    border-top: none;
  }
`
const S = {
  Fade,
  FadeOut,
  FadeItem,
  Red,
  RedBg,
  ScrollCustom,
  Title,
  SubTitle,
  ImgBox,
  TextBox,
  FlexBox,
  ContentBox,
  TextContentBox,
  GroupBox,
}

export default S;
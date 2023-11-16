import styled, { css } from 'styled-components';

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

const ContentBlock = styled.div`
  height: 100vh;
  border-bottom: 1px solid #000;
` // 나중에 지울 것

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
`
const FlexBox = styled.div`
  display: flex;
  flex-wrap: nowrap;


  justify-content: space-between;

  width: 100%;

  outline: 1px solid #f00;
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
  // div>p>span 구조
  width: ${props => props.$txtconwid || '500px'};
  
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
`


const S = {
  Red,
  Title,
  SubTitle,
  ContentBlock,
  ImgBox,
  TextBox,
  FlexBox,
  ContentBox,
  TextContentBox,
  GroupBox,
}

export default S;